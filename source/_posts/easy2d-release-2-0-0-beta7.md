---
title: v2.0.0-beta7 更新内容简介
tags: 版本发布
button: 立即下载
button_url: '/download'
date: 2018-05-25 22:05:55
---

本次更新内容较多，但也许这是 Easy2D v2.0.0 正式版发布前的最后一个版本了。

我最近逐渐认识到，在人气不高的时候把框架的功能过于细化只能起反作用，因为细化也意味着复杂。何况当初设计这个框架的本意就是为了方便 C++ 新手学习，所以新版本 beta7 进一步简化 Easy2D ，删除了大段代码，同时也带来了一些新特性。

这次更新几乎将整个 E2D 框架重做，不要担心这会花费很大的学习成本，它只会让你更容易上手，而且会减少你对一些模糊不清的函数的疑问。

<!-- more -->


### Game 类更新内容

此次更新修改了 `Game` 类的几个方法名，所以 beta7 不兼容旧的项目。

现在，一个最简单的 Easy2D 程序如下：

```cpp
#include <easy2d.h>
int main()
{
    // 初始化
    Game::init();
    // 开始游戏
    Game::start();
    return 0;
}
```

重做后的 `Game::init` 方法必须在主函数的第一行调用，其他任何操作都应该在初始化成功后执行。这个方法不再设置窗口标题和大小，但你可以通过 `Window::setTitle` 方法设置窗口标题，`Window::setSize` 方法设置窗口大小。

而且你也不必再判断 `Game::init` 函数的返回值，因为初始化失败时，它将抛出异常，终止程序。你可以用下面的方法让异常处理的方式更加友好。

```cpp
#include <easy2d.h>
int main()
{
    try
    {
        Game::init();
    }
    catch (SystemException e)
    {
        // 捕获异常，并弹窗提示
        Window::error(e.msg());
        // 结束程序
        return -1;
    }
    Game::start();
    return 0;
}
```

`Game::run` 函数更名为 `Game::start` ，通常它应在程序的最后一行调用，因为这个函数返回时表示游戏已经结束。这个函数会在游戏结束时自动回收游戏资源。

`Game::uninit` 函数更名为 `Game::destroy` ，现在你不必手动执行这个函数，因为 `Game::start` 会自动调用它。

如果你不希望 `start` 函数自动回收资源，可以使用 `Game::start(false)` 启动游戏，然后在你需要的地方调用 `destroy` 方法。


### 工厂模式与垃圾回收

beta7 版本之前，e2d::Object 对象是直接用 new 运算符创建的，如下面的代码。

```cpp
// 创建一个精灵对象
auto sprite = new Sprite("image.png");
```

我在 Object 的构造函数中做了些 “手脚”，使它的内存可以被自动回收，所以你会发现示例代码中从来没有 delete 语句，但却不会发生内存泄漏。

这种做法其实很糟糕，因为你不能自由控制 new 创建的对象，而且通过其他方式创建的对象在回收时会崩溃。为了解决这个问题，beta7 版本增加了全局的 `Create` 函数。

这是一种工厂模式，你所学过的工厂模式也许是这样的：

```cpp
// 简单工厂模式
Factory::create("Sprite", "image.png");
// 另外一种简单工厂模式
Factory::createSprite("image.png");
```

通过 `Factory` 工厂来创建不同的对象，这个对象就是经过了处理的对象。还有另外一种工厂方法模式，如下

```cpp
// 工厂方法模式
Sprite::create("image.png");
```

这三种方法各有优势，但它们都有一个共同缺陷：扩展性差。如果你自定义了一个 `Bird` 类，那么你就需要为它添加一个 `Bird::create` 方法，或者 `Factory::createBird` 方法，才能创建它。

beta7 版本新增了 `Create` 函数，它是一个模版函数，并拥有强大的扩展性。它的使用方法如下

```cpp
auto sprite = Create<Sprite>("image.png");
```

使用 Create 函数创建的对象将被 `GC(垃圾回收装置)` 跟踪，当这个对象不再被需要时，GC 会自动 delete 它。

`GC` 判断一个对象是否需要被释放的方法如下：

- Object 对象保存了一个引用计数，这个计数表示它被 “使用” 的次数，初始的引用计数为 0
- 当引用计数 <= 0 时，GC 会认为这个对象可以被回收，并在适当的时候 delete 它
- 当引用计数 > 0 时，GC 会认为这个对象正被使用着，不会对它采取任何操作
- Object 的 `retain` 和 `release` 方法可以使引用计数加一或减一
- `Game::destory` 方法会强制让 GC 释放所有对象

比如我们使用 `Create` 函数创建了一个 `Scene` ，下面的代码展示了引用计数的变化

```cpp
// 创建一个场景，此时引用计数为 0
auto scene = Create<Scene>();
// 进入场景，它的引用计数变为 1
SceneManager::enter(scene);
// 退出场景，它的引用计数变为 0，GC 会自动将 scene 回收
SceneManager::back();
```

另外，你仍然可以使用 new 去创建对象，但是需要你自己去 delete。


### Music 重做内容

beta7 版本移除了 `MusicManager` 类，并新增了 `Player` 播放器类，它更加简单易用。

现在，如果你想播放一段音乐，只需要：

```cpp
Player::play("music.wav");
```

如果你想停止它，只需要：

```cpp
Player::stop("music.wav");
```

另外需要注意的是，在游戏开始之前，最好把游戏中所有的音乐预加载，防止第一次播放音乐时卡顿。

```cpp
// 预加载音乐
Player::preload("music.wav");
```

`Player` 的所有操作都被最大限度的简化，当然这也意味着不够灵活，和受更大的限制。beta7 版本保留了 `Music` 类，你可以手动创建一个音乐对象。

```cpp
// 创建一个音乐对象
auto music = Create<Music>("music.wav");
```

有了这个对象，你可以设置它的音量，判断它的播放状态，以及设置它播放结束时执行特定的函数。

```cpp
// 设置音乐对象的音量
music->setVolume(2);
// 判断音乐是否正在播放
bool playing = music->isPlaying();
// 设置音乐播放结束时的回调函数
music->setFuncOnEnd(func);
```

虽然 `Music` 对象是通过 Create 函数创建，但它在播放时不会被引擎自动回收，直到它播放结束。

```cpp
// 创建一个音乐对象并播放
// 这个对象将在音乐结束时自动释放内存
Create<Music>("music.wav")->play();
```


### 从程序资源加载图片或音乐

现在，Easy2D 支持了从资源加载图片或音乐的功能，所以你可以把游戏中所有的图片和音乐都打包到 exe 中。

方法如下：

1. 在 VS 中右键项目 => 添加 => 资源
2. 点击“导入” => 选择你想导入的文件 => 确认
3. 在 cpp 中引入 resource.h
4. 打开 VS 的“资源视图”，查看你刚刚添加的资源的名称和分类名称
5. 通过资源名称和分类名称加载图片或音乐

例如，当你导入第一张 .png 图片时，资源名称往往是 IDB_PNG1 ，资源类型是 "PNG" ，然后你就可以使用下面的代码创建一个精灵

```cpp
auto s = new Sprite(IDB_PNG1, "PNG");
```

PS. Visual Studio 的添加资源功能一直存在问题，偶尔会导致 VS 崩溃，而且也经常无法正常识别 resource.h 中的宏，但是它仍然可以正常编译。

### Timer 重做内容

`Timer` 类中的方法全都改为了静态方法，这说明你不再需要 new 一个定时器出来再去操作它，而是直接开启一个定时器，在启动时设置好它的参数即可。

```cpp
// 启动定时器，该定时器执行 func 函数
Timer::start(func);
```

启动定时器时，你可以给它起一个名称

```cpp
// 启动定时器，该定时器执行 func 函数
Timer::start(func, "定时器");
```

这样你就可以把名字叫 "定时器" 的定时器暂停

```cpp
// 暂停名称叫 "定时器" 的定时器
Timer::pause("定时器");
// 继续名称叫 "定时器" 的定时器
Timer::resume("定时器");
```

当你不需要这个定时器时，你可以把它停止，停止的定时器无法再启动

```cpp
// 停止名称叫 "定时器" 的定时器
Timer::stop("定时器");
```

当然你也可以启动一个只执行一次的定时器

```cpp
// 启动定时器，该定时器在 2 秒后执行一次 func 函数
Timer::startOnce(func, 2);
```

或者还可以设置定时器的执行时间间隔、执行次数、以及创建后是否暂停

```cpp
// 启动定时器，该定时器执行 func 函数，执行间隔为 1.5 秒，
// 执行次数为 10 次，创建后暂停，名称是 "定时器"
Timer::start(func, 1.5, 10, true, "定时器");
```

### Collider 重做内容

beta7 中增加了 `Collider::Type` 枚举，可以使用 `Node::setCollider` 方法直接设置碰撞体的形状，这意味着你不需要 new 一个 Collider 再把它赋给 Node 了。

`Collider::Type` 枚举有三个类型，分别是

```cpp
Collider::Type::RECT      // 矩形
Collider::Type::CIRCLE    // 圆形
Collider::Type::ELLIPSE   // 椭圆形
```

你应该这样去使用它

```cpp
// 设置碰撞体类型为圆形
node->setCollider(Collider::Type::CIRCLE);
```

碰撞体只是描述了物体的形状，你还需要告诉 Easy2D 哪些物体间可以发生碰撞。

假设节点 node1 和 node2 的名称分别为 "节点一" 和 "节点二"

```cpp
node1->setName("节点一");
node2->setName("节点二");
```

如果想检测到 node1 与 node2 的碰撞，需要调用 `Collision::addName` 方法把它们的名字加进去。

```cpp
// 添加可碰撞物体名称
Collision::addName("节点一", "节点二");
```

这样设置过后，node1 和 node2 之间的碰撞就会被检测到。

为了检测碰撞的发生，你需要创建一个监听器去监听碰撞事件，方法如下

```cpp
// 创建一个伪函数类
Function func = CollisionListen;
// 创建一个监听器
auto listener = Create<Listener>(func);
// 让监听器去监听碰撞事件
Collision::addListener(listener);
// 打开碰撞监听
Collision::setEnable(true);
```

其中 `CollisionListen` 是一个函数，它可以定义如下

```cpp
void CollisionListen()
{
    // 判断碰撞是否由它们产生
    if (Collision::isCausedBy("节点一", "节点二"))
    {
        // 执行相应操作
    }
}
```

### 初始化列表

在 VS2013 及以上版本中，可以使用初始化列表一次性添加多个值。

例如，下面的代码使用初始化列表将多个节点一次性添加到场景中

```cpp
// 使用初始化列表一次添加多个值
scene->add({ node1, node2, node3 });
```

再如，一次性添加多个可碰撞物体名称

```cpp
// 使用初始化列表一次添加多个值
Collision::addName({
    { "节点一", "节点二" },
    { "节点一", "节点三" }
});
```

再如，一次性添加多个 Image 到 Animation 中

```cpp
// 使用初始化列表一次添加多个值
animation->add({ image1, image2, image3 });
```

### 其他新功能

- `Text` 现在具备了简单的文字排版能力，包括文字描边、行间距、对齐方式、自动换行、下划线、删除线等。
- `String::format` 支持创建格式化的字符串，如下所示

```cpp
// 字符串 str 的值为 "level 12"
String str = String::format("level %d", 12);
```

- 调用 `Renderer::showFps` 函数可以显示画面的 FPS 值

- `NodeProperty` 结构体可获取节点的所有属性，如下所示

```cpp
// 获取节点所有属性
NodeProperty prop = node->getProperty();
// 设置节点所有属性
node->setProperty(prop);
```


### 其他

此次版本更新内容较多，更多新内容请到入门教程中查看。
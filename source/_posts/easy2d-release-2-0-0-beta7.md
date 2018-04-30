---
title: v2.0.0-beta7 更新内容简介
tags: 版本发布
button: 立即下载
button_url: '/download'
date: 2018-04-24 22:05:55
---

本次更新内容较多，但也许这是 v2.0.0 正式版发布前的最后一个版本了。

我最近逐渐认识到，在人气不高的时候把框架的功能过于细化只能起反作用，因为细化也意味着复杂，初学者需要对比这个函数和那个看起来几乎一样的函数的区别。何况当初设计这个框架的本意就是为了方便 C++ 新手学习，所以新版本 beta7 进一步简化 Easy2D ，删除了大段代码，同时也带来了一些新特性。

我认为这次更新中最引人注目的是 `Timer` 定时器重做和 `Collider` 碰撞体重做，不要担心重做会增加你的学习成本，它只会让你更容易上手，而且不会有任何歧义上的疑问。

<!-- more -->

### Game 类更新内容

此次更新修改了 `Game` 类的方法名，所以 beta7 不兼容旧的项目。

现在，一个最简单的 Easy2D 程序如下：

```cpp
#include <easy2d.h>
int main()
{
    if (Game::init())
    {
        Game::start();
    }
    return 0;
}
```

`Game::init` 方法不再设置窗口标题和大小，它必须在主函数的第一行调用，其他任何操作都应该在初始化成功后执行。现在你可以通过 `Window::setTitle` 设置窗口标题，`Window::setSize` 设置窗口大小。

`Game::run` 函数更名为 `Game::start` ，原因之一是为了与其他类的函数名统一。

`Game::uninit` 函数更名为 `Game::destroy` ，现在你不必在程序最后执行这个函数，因为 `start` 函数将在游戏结束时自动回收游戏资源。

如果你不希望 `start` 函数自动回收资源，可以使用 `Game::start(false)` 启动游戏，然后在你需要的地方调用 `destroy`。

### Music 重做内容

`Music` 类中的方法全都改为了静态方法，并且移除了 `MusicManager` 类。

现在，如果你想播放一段音乐，只需要：

```cpp
Music::play("music.wav");
```

如果你想停止它，只需要：

```cpp
Music::stop("music.wav");
```

所有的操作都被最大限度的简化（当然这也意味着更大的限制）。另外需要注意的是，在游戏开始之前，最好把游戏中所有的音乐预加载，防止第一次播放音乐时卡顿。

```cpp
// 预加载音乐
Music::preload("music.wav");
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

beta7 中增加了 `ColliderType` 枚举，可以使用 `Node::setCollider` 方法直接设置碰撞体的形状，这意味着你不需要 new 一个 Collider 再把它赋给 Node 了。

`ColliderType` 枚举有三个类型，分别是

```cpp
ColliderType::RECT      // 矩形
ColliderType::CIRCLE    // 圆形
ColliderType::ELLIPSE   // 椭圆形
```

你应该这样去使用它

```cpp
// 设置碰撞体类型为圆形
node->setCollider(ColliderType::CIRCLE);
```

即使设置了碰撞体，也不是所有带碰撞体的节点都会碰撞，因为它们默认不与任何其他节点发生碰撞。

假设 node1 和 node2 的名称分别为 "节点一" 和 "节点二"

```cpp
node1->setName("节点一");
node2->setName("节点二");
```

如果想允许 node1 主动碰撞 node2，只需要调用 `Node::addColliableName` 方法把 node2 的名字加进去。

```cpp
node1->addColliableName("节点二");
```

这样设置过后，node1 移动时会自动检测是否碰撞 node2，但 node2 移动时不会检测 node1 的位置。

如果想允许 node1 和 node2 互相碰撞，只需要把 node1 的名字也加入到 node2 的可碰撞物体名称中

```cpp
node2->addColliableName("节点一");
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
node1->addColliableName({ "节点二", "节点三", "节点四" });
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

---
title: 入门教程
subtitle: [基础篇]
icon: idea
toc: true
type: "tutorial"
---

## 第一个程序

Easy2D 可以在 **控制台程序** 和 **Win32程序** 两种类型的工程下使用，编写 Easy2D 游戏首先需要具备 C++ 基础知识，并且熟悉 Visual Studio 的基本用法。

新建一个空的控制台程序，我们从这里起步。

```cpp
#include <easy2d.h>

int main()
{
    return 0;
}
```

一个 Easy2D 游戏需要四个部分：**初始化**、**设计游戏内容**、**开始游戏**、**回收游戏资源**。

`Game` 类用来控制游戏流程，它可以完成开始游戏、暂停游戏、退出游戏等一系列操作。Game 类的 `Game::init` 函数用来初始化游戏并创建一个窗口，可以指定窗口的标题、宽度高度、图标等等属性，例如下面的代码创建了一个标题为 "Hello"，宽度为 640 像素，高度为 480 像素的窗口。

```cpp
// 初始化
Game::init("Hello", 640, 480);
```

这个函数必须在 main 函数的第一行调用，且只能调用一次。如果在 `Game::init` 前进行了其他操作，有可能出现未知的错误。

Game 类的 `Game::run` 函数用来开始游戏，它其实是一个循环，当窗口关闭或退出游戏时，这个函数才返回。

```cpp
// 开始游戏
Game::run();
```

Game 类的 `Game::uninit` 函数用来回收游戏资源，这个函数应在 `Game::run` 函数之后调用，回收游戏过程中产生的资源。

```cpp
// 回收游戏资源
Game::uninit();
```

上面的三个函数中，只有 `Game::init` 函数有返回值，因为初始化的过程有可能失败。初始化失败时，说明程序运行环境创建出现了问题，应当直接结束游戏。

所以，一个最简单的 Easy2D 程序如下所示，运行后将显示一个无画面的黑窗口。

```cpp
#include <easy2d.h>

int main()
{
    /* 初始化 */
    bool ret = Game::init("Hello", 640, 480);
    if (!ret)
    {
        /* 初始化失败 */
        return -1;
    }

    /* 设计游戏内容 */

    /* 开始游戏 */
    Game::run();

    /* 回收游戏资源 */
    Game::uninit();
    return 0;
}
```

<br/>

## 场景和节点

`Scene(场景)` 代表游戏中的一个界面，你的游戏可以有类似主菜单、游戏界面、结束界面等多个场景。

Easy2D 中使用 new 运算符创建场景：

```cpp
// 创建一个空场景
auto scene = new Scene();
```

`SceneManager(场景管理器)` 是控制场景间切换的类，使用 `SceneManager::enter` 函数可以进入你创建的场景中

```cpp
// 进入 scene 场景
SceneManager::enter(scene);
```

场景中所有的元素都被称为`Node(节点)`，比如场景中的一个按钮，或者一张图片，它们都是节点的一种。

Easy2D 提供了许多游戏中常用的节点，比如`Text(文本)`、`Sprite(精灵)`、`Button(按钮)`等等，你可以像创建场景一样，直接用 new 运算符创建它们

```cpp
// 创建一个文本节点
auto text = new Text("Hello Easy2D");
```

将创建好的节点加入到场景中，它将显示在画面上

```cpp
// 将文本添加到场景中
scene->add(text);
```

上面的内容都属于**设计游戏内容**，所以上面这个 Demo 的完整代码如下所示

```cpp
#include <easy2d.h>

int main()
{
    bool ret = Game::init("Hello", 640, 480);
    if (!ret)
    {
        return -1;
    }

    /* 设计游戏内容 */
    // 创建一个空场景
    auto scene = new Scene();
    // 进入 scene 场景
    SceneManager::enter(scene);
    // 创建一个文本节点
    auto text = new Text("Hello Easy2D");
    // 将文本添加到场景中
    scene->add(text);

    Game::run();

    Game::uninit();
    return 0;
}
```

<br/>

## 坐标系和节点坐标

Easy2D 使用左手坐标空间，坐标系原点在屏幕的左上角，x 轴向右为正，y 轴向下为正。

为了研究 Easy2D 的坐标系，我们将一张图片复制到工程目录下，并把它转化为`精灵(Sprite)`。

<div class="ui info message"><div class="header">Tips </div>
精灵代表了一张图片，它可以进行移动、旋转、放大缩小等等操作。
</div>

使用下面的代码设计游戏内容，将图片的路径和文件名传入精灵的构造函数中，可以看到屏幕上显示了这张图片

```cpp
// 创建一个场景
auto scene = new Scene();
// 创建一个精灵
auto sprite = new Sprite("图片名.png");
// 把精灵添加到场景中
scene->add(sprite);
```

![场景示例](/assets/images/tutorial/pivot3.png)

节点的`Position`(坐标) 代表了它在屏幕上显示的位置，节点的坐标由 x 和 y 两个值组成，x 坐标值越大，它在屏幕上的位置越靠右，y 坐标值越大，它在屏幕上的位置越靠下。节点的默认坐标为 (0, 0)，也就是屏幕左上角。

节点的`Pivot`(中心点) 是一个重要属性，它相当于节点的 “把手”。有了中心点，你就可以 “抓着” 它移动这个节点，或者旋转它。

`Node::setPivot` 函数用于设置节点的中心点，它需要两个 double 类型的参数，两个参数的取值范围都是 [0, 1]，代表了中心点的位置。中心点一定在节点的内部，中心点设置为（0, 0）代表节点的中心点在它的左上角，（1, 1）代表中心点在它的右下角，（0.5, 1）代表中心点在它的底部的中心位置。

例如，下图是一个精灵在中心点分别为 (0.5, 0.5) 和 (0, 0) 时进行旋转得到的结果：

![旋转示意图](/assets/images/tutorial/pivot2.png)

<div class="ui info message"><div class="header">Tips </div>
节点的默认中心点位置为（0, 0），也就是它的左上角。
</div>

我们把刚才创建的精灵中心点设为 (0.5, 0.5) 进行测试

```cpp
sprite->setPivot(0.5, 0.5);
```

运行结果如下图所示，可以看到精灵的一部分被遮住了。这是因为精灵的默认坐标为(0, 0)，也就是屏幕左上角，而精灵的中心点位置是图片的正中心，所以显示出的结果为 “精灵正中心的位置在屏幕左上角” 。

![修改了中心点后的精灵](/assets/images/tutorial/pivot1.png)

现在我们想完整地看到精灵，可以把精灵向右下方移动宽度和高度的一半，这样整个精灵就显示在屏幕中了。

`Node::getWidth`和`Node::getHeight`函数可以获取节点的宽度和高度，如下所示

```cpp
// 获取精灵的宽度
double width = sprite->getWidth();
// 获取精灵高度
double height = sprite->getHeight();
```

`Node::setPos` 函数用来直接设置节点在屏幕上的位置，它需要两个 double 类型的参数，分别表示节点的 x 坐标和 y 坐标。

```cpp
// 移动精灵的位置
sprite->setPos(width / 2, height / 2);
```

节点的中心点为它的正中心时，如果把它的 x 坐标设置为屏幕宽度的一半，y 坐标设置为屏幕高度的一半，那么它将显示在屏幕正中央。

`Window` 类用于控制与窗口有关的内容，`Window::getWidth`和`Window::getHeight`函数可以获取窗口的宽度和高度，如下所示

```cpp
// 获取窗口宽度
double width = EApp::getWidth();
// 获取窗口高度
double height = EApp::getHeight();
```

设置精灵的坐标，让它移动到屏幕的中心

```cpp
// 移动精灵到屏幕中央
sprite->setPos(width / 2, height / 2);
```

运行后的效果如下图：

![精灵居中显示](/assets/images/tutorial/pivot4.png)

<br/>

## 关于命名

Easy2D 按照以下规律命名函数：

- 小驼峰式命名法则，第一个单词小写，后面的单词首字母大写，如`Window::getWidth`
- 所有函数均按照`动词`+`名语`形式命名，如`SceneManager::enter`
- 获取对象的属性值：`get`+`属性名`，如`Node::getWidth`
- 修改对象的属性值：`set`+`属性名`，如`Node::setPos`
- 获取对象的状态(bool值)：`is`+`状态名`，如`Node::isVisiable`

<br/>

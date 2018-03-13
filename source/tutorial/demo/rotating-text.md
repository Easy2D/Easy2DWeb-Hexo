---
title: 入门教程
subtitle: [ [快速上手篇,/tutorial/demo/], 旋转的文字]
icon: idea
toc: true
type: "tutorial"
---

## 准备

在 VS 中写好我们基础篇里学习的基本代码，运行后显示一个 300*300 大小的窗口。

```cpp
#include <easy2d.h>

int main()
{
    if (Game::init("Demo:Rotating Text", 300, 300))
    {
        /* 设计游戏内容 */

        Game::run();
    }
    Game::uninit();
    return 0;
}
```

## 显示文本

在**设计游戏内容**的部分，创建一个场景和一个 Text 对象，然后文本添加到场景中。

```cpp
#include <easy2d.h>

int main()
{
    if (Game::init("Demo:Rotating Text", 300, 300))
    {
        // 创建场景
        auto scene = new Scene();
        // 进入该场景
        SceneManager::enter(scene);

        // 创建一个 Text 对象
        auto test = new Text("Hello Easy2D!");
        // 将 Text 添加到场景中
        scene->add(test);

        Game::run();
    }
    Game::uninit();
    return 0;
}
```

用我们在基础篇中学到的方法，修改文本中心点和文本坐标，让它在屏幕上居中显示

```cpp
#include <easy2d.h>

int main()
{
    if (Game::init("Demo:Rotating Text", 300, 300))
    {
        // 创建场景
        auto scene = new Scene();
        // 进入该场景
        SceneManager::enter(scene);

        // 创建一个 Text 对象
        auto text = new Text("Hello Easy2D!");
        // 将 Text 添加到场景中
        scene->add(text);

        // 居中显示在屏幕上
        text->setPivot(0.5, 0.5);
        text->setPos(Window::getWidth() / 2, Window::getHeight() / 2);

        Game::run();
    }
    Game::uninit();
    return 0;
}
```

运行后的结果如下图所示

![Rotating Text](/assets/images/tutorial/demo/rotating-text/1.png)

## 动画的实现

实现动画有很多种方式，我们使用一个新概念来实现这个功能，它的名字叫 `Action`(动作)。

Action 可以让一个节点动起来，它有许多的派生类，分别实现不同的效果。例如 `ActionRotateTo` 可以让节点在一定时间内旋转至一定的角度，它的构造函数需要两个 double 类型的参数，一个代表动作时长（秒），另一个代表旋转后的角度。

```cpp
// 创建一个旋转动画，3 秒后旋转至 180 度
auto rotate = new ActionRotateTo(3, 180);
```

`Node::runAction` 可以让节点执行一个动作，添加下面的代码并运行，可以看到文本慢慢旋转至了 180 度。

```cpp
// 让 Text 执行这个动作
text->runAction(rotate);
```

为了让节点不停地旋转，我们不使用 ActionRotateTo 这个动作，而是使用 `ActionRotateBy`。ActionRotateBy 也是旋转动画，它与 ActionRotateTo 不同的是，它表示一段相对的旋转。

我们刚刚测试的动画，无论节点一开始的角度是多少，它 3 秒后都旋转到 180 度。也就是说，这个动画运行的结果是一定的，那就是文本倒立显示在屏幕上。

![Rotating Text](/assets/images/tutorial/demo/rotating-text/2.png)

而 ActionRotateBy 动画是一段相对动画，如果节点一开始的角度是 20 度，那么 3 秒后它将旋转到 200 度（20+180=200）。

删掉刚刚创建的旋转动画，重新创建一段 ActionRotateBy 动画

```cpp
// 创建一个旋转动画，1 秒内顺时针旋转 60 度
auto rotate = new ActionRotateBy(1, 60);
```

但这个动画也不是无限运行的，它 1 秒钟后就会结束。

`ActionLoop` 用来创建一段循环动画，它可以让另一个动作不断的执行。

```cpp
// 创建一个循环动画
auto action = new ActionLoop(rotate);
```

执行这个动画，文本将一直旋转，永远都不会停下来。

```cpp
// 让 Text 执行这个动作
text->runAction(action);
```

## 完整代码

```cpp
#include <easy2d.h>

int main()
{
    if (Game::init("Demo:Rotating Text", 300, 300))
    {
        // 创建场景
        auto scene = new Scene();
        // 进入该场景
        SceneManager::enter(scene);

        // 创建一个 Text 对象
        auto text = new Text("Hello Easy2D!");
        // 将 Text 添加到场景中
        scene->add(text);

        // 居中显示在屏幕上
        text->setPivot(0.5, 0.5);
        text->setPos(Window::getWidth() / 2, Window::getHeight() / 2);

        // 创建一个旋转动画，1 秒内顺时针旋转 60 度
        auto rotate = new ActionRotateBy(1, 60);
        // 创建一个循环动画
        auto action = new ActionLoop(rotate);
        // 让 Text 执行这个动作
        text->runAction(action);

        Game::run();
    }
    Game::uninit();
    return 0;
}
```
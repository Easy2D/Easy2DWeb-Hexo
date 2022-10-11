---
title: 入门教程
subtitle: [ [基础功能, /tutorial/base/], Game游戏类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/base/game.html],
        [Window 窗口类,/tutorial/base/window.html],
        [Input 输入类,/tutorial/base/input.html],
        [Time 时间类,/tutorial/base/time.html],
        [Renderer 渲染器,/tutorial/base/renderer.html],
        [Logger 日志,/tutorial/base/logger.html]
    ]
---

## Game 游戏类

Game 类控制整个游戏的进度和流程，管理所有资源的初始化和释放。

当然，它最主要的功能是初始化游戏、启动游戏和销毁游戏资源：

```cpp
// 初始化游戏
if (Game::init())
{
    // 启动游戏
    Game::start();
}
// 游戏结束，销毁资源
Game::destroy();
```

Game::init 函数默认会创建一个 640x480 大小的窗口，初始化时也可以设置窗口的标题和大小：

```cpp
// 创建标题为 Hello，大小为 1000x800 的窗口
if (Game::init(L"Hello", 1000, 800))
{
    // 初始化成功
}
```

Game 类启动游戏时可以指定期望的帧率（需要关闭垂直同步功能，详见 Renderer 渲染器）

```cpp
Game::start(60);    // 期望 60 FPS
```

Game 类还可以控制游戏的暂停和继续，游戏暂停后所有的定时器、动画、更新函数都会暂停，只有按钮正常运行，所以你可以在按钮的回调函数中控制游戏暂停。

```cpp
// 暂停游戏
Game::pause();
// 继续游戏
Game::resume();
// 判断游戏是否正在暂停
bool isPaused = Game::isPaused();
```

在代码的任何地方调用 quit 函数可以直接让游戏退出：

```cpp
// 退出游戏
Game::quit();
```

Game 类还有一些不建议手动调用的函数，例如 reset 可以重置游戏内部计时：

```cpp
Game::reset();
```

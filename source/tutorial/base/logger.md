---
title: 入门教程
subtitle: [ [基础功能, /tutorial/base/], Logger 日志]
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

## Logger 日志

Logger 提供了简单的日志记录功能，用于辅助开发者进行调试。

开启或关闭 Logger 系统只需要一行代码（Logger默认是开启状态）：

```cpp
// 打开日志系统
Logger::enable();
// 关闭日志系统
Logger::disable();
```

Logger 提供了三种日志等级，分别是 message（消息）、warning（警告）、error（错误），三种等级都可以用类似 printf 函数的格式化方式输出日志：

```cpp
// 输出一行消息
Logger::messageln(L"这是一条消息，同时输出一个数字 %d", 123);
// 输出一行警告
Logger::warningln(L"这是一条警告，同时输出一个浮点数 %.2f", 1.23);
// 输出一行错误
Logger::errorln(L"这是一条错误，同时输出一个字符串 %s", L"字符串");
```

### 关于控制台

使用 VS 编译的程序主要分为 `控制台程序（Console）` 和 `Win32程序` 两种，一般初学者都习惯于创建控制台程序，它的特点是程序启动后会有一个黑框框，执行printf函数可以在黑框框中输出文字。

但是对于游戏开发而言，控制台（也就是黑框框）是不应该出现的，所以游戏开发应选择 `Win32程序` 方式创建项目。

在 Win32 程序中，由于不存在控制台，我们 Logger 输出的日志也就看不到了，这时候可以使用 Logger 提供的函数创建一个控制台出来：

```cpp
// 显示控制台
Logger::showConsole(true);
```

<div class="ui info message"><div class="header">Tips </div>
这个函数应该只在调试时使用，发布游戏前应去除这个函数。
</div>

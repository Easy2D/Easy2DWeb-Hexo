---
title: 入门教程
subtitle: [ [基础功能, /tutorial/base/], Input输入类]
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

## Input 输入类

Input 类用来获取用户的鼠标或键盘输入，以实现游戏和用户的简单交互。

例如，判断一个键盘按键是否正在按下：

```cpp
// 获取字母 A 键是否正被按下
bool isDown = Input::isDown(KeyCode::A);
```

这个函数同样可以对鼠标按键有效：

```cpp
// 获取鼠标左键是否正被按下
bool isDown = Input::isDown(MouseCode::Left);
```

Input 不止可以获取正在按下的状态，还可以判断按键是否刚刚按下、或刚刚抬起：

```cpp
// 判断字母 A 键是否刚刚按下
bool isPress = Input::isPress(KeyCode::A);
// 判断字母 A 键是否刚刚抬起
bool isRelease = Input::isRelease(KeyCode::A);
```

Input 类可以直接获取鼠标的当前位置：

```cpp
// 获取鼠标位置
Point mousePos = Input::getMousePos();
```

如果你需要获取鼠标在某个方向的移动增量，例如，你想实现在游戏中显示自定义图片的鼠标样式，可能需要先隐藏系统鼠标，然后通过获取鼠标移动增量，来画出一个虚拟鼠标：

```cpp
// 获取鼠标 X 方向的位移增量
float deltaX = Input::getMouseDeltaX();
// 获取鼠标 Y 方向的位移增量
float deltaY = Input::getMouseDeltaY();
// 获取鼠标滚轮的位移增量
float deltaZ = Input::getMouseDeltaZ();
```

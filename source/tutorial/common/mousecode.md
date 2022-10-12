---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], MouseCode鼠标键值]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Point 坐标点,/tutorial/common/point.html],
        [Size 大小,/tutorial/common/size.html],
        [String 字符串,/tutorial/common/string.html],
        [Color 颜色,/tutorial/common/color.html],
        [KeyCode 键值,/tutorial/common/keycode.html],
        [MouseCode 鼠标键值,/tutorial/common/mousecode.html],
        [Image 图片类,/tutorial/common/image.html],
        [Font 字体,/tutorial/common/font.html],
        [DrawingStyle 绘图样式,/tutorial/common/drawing-style.html],
        [Listener 监听器,/tutorial/common/listener.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## MouseCode 鼠标键值

MouseCode 枚举了鼠标的三个按键，分别是：

```cpp
// 鼠标左键
MouseCode::Left
// 鼠标右键
MouseCode::Right
// 鼠标中键
MouseCode::Middle
```

使用 MouseCode 配合 Input 类可以获取用户按键输入，例如：

```cpp
// 获取鼠标左键是否正被按下
bool isDown = Input::isDown(MouseCode::Left);
```

关于 Input 类的使用请查阅 [Input 获取用户输入](/tutorial/base/input.html)

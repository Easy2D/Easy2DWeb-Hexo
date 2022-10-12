---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], KeyCode键值]
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

## KeyCode 键值

KeyCode 枚举了键盘上几乎所有按键的键值。

字母键：

```cpp
// 字母 A 键
KeyCode::A
// 字母 Z 键
KeyCode::Z
```

数字键：

```cpp
// 数字 0 键
KeyCode::Num0
// 数字 9 键
KeyCode::Num9
```

数字小键盘键：

```cpp
// 数字小键盘 0 键
KeyCode::Numpad0
// 数字小键盘 9 键
KeyCode::Numpad9
```

其他常用键：

```cpp
// 回车
KeyCode::Enter
// 退出键
KeyCode::Esc
// 上下左右键
KeyCode::Up
KeyCode::Down
KeyCode::Left
KeyCode::Right
// 空格
KeyCode::Space
```

使用 KeyCode 配合 Input 类可以获取用户按键输入，例如：

```cpp
// 获取字母 A 键是否正被按下
bool isDown = Input::isDown(KeyCode::A);
```

关于 Input 类的使用请查阅 [Input 获取用户输入](/tutorial/base/input.html)

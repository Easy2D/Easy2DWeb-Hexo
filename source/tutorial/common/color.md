---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Color颜色]
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
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数封装器,/tutorial/common/function.html]
    ]
---

## Color 颜色

Color 类表示一个 红、绿、蓝 三原色及 alpha 通道组成的颜色模型（RGBA颜色模型）

可以指定 RGB 三原色的程度来构造一个颜色：

```cpp
// 构造一个纯红色
// 因为它的 R 值为最大（1.0），GB值为最小（0.0）
Color red = Color(1.0, 0.0, 0.0);
```

可以指定 alpha 通道的程度来表示颜色的透明度，0.0表示全透明，1.0表示不透明：

```cpp
// 构造一个纯红色，且透明度为 0.7
Color red = Color(1.0, 0.0, 0.0, 0.7);
```

可以使用十六进制的RGB颜色值来表示一个颜色：

```cpp
// 构造一个纯红色
// 因为它的 R 值为最大（FF），GB值为最小（00）
Color red = Color(0xFF0000);
```

Color 类提供了常用颜色的枚举值，如下：

```cpp
Color::White        // 白色
Color::Black        // 黑色
Color::Blue         // 蓝色
Color::Brown        // 棕色
Color::Gray         // 灰色
Color::Green        // 绿色
Color::Red          // 红色
Color::Pink         // 粉色
Color::Orange       // 橘黄色
Color::OrangeRed    // 橘红色
Color::Purple       // 紫色
Color::Yellow       // 黄色

Color::Chocolate    // 巧克力色
Color::Gold         // 金色

Color::LightBlue    // 淡蓝色
Color::LightGray    // 淡灰色
Color::LightGreen   // 淡绿色

Color::DarkBlue     // 深蓝色
Color::DarkGray     // 深灰色
Color::DarkGreen    // 深绿色

// 还有更多，不再列出
```

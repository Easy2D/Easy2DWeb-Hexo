---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Point坐标点]
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

## Point 坐标点

Point 类表示一个二维坐标系中的点，具有 `x` 和 `y` 两个属性。

```cpp
// 创建一个坐标为 (10, 20) 的点
Point p = Point(10, 20);
```

Point 之间可以做加减乘除运算：

```cpp
Point p1 = Point(10, 20);
Point p2 = Point(0, -5);
// 将两坐标相加
Point p3 = p1 + p2;
// 输出 p3 的坐标
// 输出结果为 (10, 15)
Logger::messageln(L"(%f, %f)", p3.x, p3.y);
```

Point 提供了计算两点间距离的函数

```cpp
Point p1 = Point(10, 20);
Point p2 = Point(0, -5);
// 计算两点间距离
float distance = Point::distance(p1, p2);
```

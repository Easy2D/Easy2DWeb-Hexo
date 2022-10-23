---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Size大小]
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

## Size 大小

Size 类表示一个二维坐标系中的物体大小，具有 `width` 和 `height` 两个属性。

```cpp
// 创建一个宽度为 10，高度为 20 的大小
Size size = Size(10, 20);
```

Size 之间可以做加减乘除运算：

```cpp
Size size1 = Size(10, 20);
Size size2 = Size(0, -5);
// 将两大小相加
Size size3 = size1 + size2;
// 输出 size3 的宽高
// 输出结果为 (10, 15)
Logger::messageln("(%f, %f)", size3.width, size3.height);
```

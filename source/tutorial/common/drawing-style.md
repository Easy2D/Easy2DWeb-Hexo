---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], DrawingStyle绘图样式]
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

## DrawingStyle 绘图样式

`DrawingStyle` 结构体提供了填充颜色、描边颜色等绘图设置，可以被 [Text](/tutorial/node/text.html) 、[ShapeNode](/tutorial/node/shape.html) 等节点使用。

```cpp
// 创建绘图样式
DrawingStyle style;
style.mode = DrawingStyle::Mode::Solid; // 绘图模式为填充
style.fillColor = Color::White;         // 填充色
style.strokeColor = Color::Red;         // 描边色
style.strokeWidth = 2.0;                // 描边宽度
style.lineJoin = LineJoin::Miter;       // 线条相交样式
```

其中绘图模式 `DrawingStyle::Mode` 有以下几种

```cpp
enum class Mode
{
    Solid,  /* 填充 */
    Round,  /* 轮廓 */
    Fill,   /* 轮廓 + 填充 */
};
```

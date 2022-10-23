---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Canvas画布]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点,/tutorial/node/node.html],
        [Text 文本,/tutorial/node/text.html],
        [Sprite 精灵,/tutorial/node/sprite.html],
        [Button 按钮,/tutorial/node/button.html],
        [ToggleButton 开关按钮,/tutorial/node/togglebutton.html],
        [Menu 菜单,/tutorial/node/menu.html],
        [Shape 形状,/tutorial/node/shape.html],
        [Canvas 画布,/tutorial/node/canvas.html]
    ]
---

## Canvas 画布

画布 `Canvas` 是节点的一种，提供了基础图形库功能，可以手动绘制形状、图像、文本等。

一个简单示例：

```cpp
// 创建一张 (300, 200) 大小的画布
auto canvas = gcnew Canvas(Size(300, 200));
// 设置绘图函数为 MyDrawing 函数
canvas->draw(MyDrawing);
// 添加到场景中
scene->addChild(canvas);

// MyDrawing 的实现
void MyDrawing(CanvasBrush* brush)
{
    // brush 是画布的画笔，画笔同样有坐标、旋转角度、缩放等属性
    // 我们移动一下画笔
    brush->setPos(Point(20, 20));

    // 画一个绿色矩形
    // 画笔具有 DrawingStyle 绘图样式属性，我们设置画笔为绿色
    brush->setFillColor(Color::Green);
    // 设置画笔绘图模式为填充
    brush->setDrawingMode(DrawingStyle::Mode::Solid);
    // 画矩形
    brush->drawShape(Shape::createRect(Rect(Point(), Size(300, 200))));

    // 写一段文字
    // 移动一下画笔
    brush->setPos(Point(120, 20));
    // 旋转一下画笔
    brush->setRotation(-30);
    // 设置填充色为橘红色
    brush->setFillColor(Color::OrangeRed);
    // 写文字
    brush->drawText("Hello", Point(), Font("", 22, Font::Weight::Bold));

    // 画一张图片
    brush->drawImage(Image::load("image.png"));
}
```

`CanvasBrush` 支持设置 `DrawingStyle` 绘图样式，以设置填充颜色、描边颜色等，详情请参阅 [DrawingStyle](/tutorial/common/drawing-style.html)。

```cpp
// 创建绘图样式
DrawingStyle style;
style.mode = DrawingStyle::Mode::Solid; // 绘图模式为填充
style.fillColor = Color::White;         // 填充色
style.strokeColor = Color::Red;         // 描边色
style.strokeWidth = 2.0;                // 描边宽度为 2.0
style.lineJoin = LineJoin::Miter;       // 线条相交样式

// 设置绘图样式
brush->setDrawingStyle(style);
```

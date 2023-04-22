---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Shape形状]
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

## Shape 形状

Shape 是一个二维图形，例如矩形、圆形等，Easy2D 提供了几种简单图形的创建方式：

```cpp
// 创建一个从 (0,0) 到 (100,100) 的直线
auto line = Shape::createLine(Point(0, 0), Point(100, 100));
// 创建一个宽高为 (10,20) 的矩形
auto rect = Shape::createRect(Rect(Point(), Size(10, 20)));
// 创建一个宽高为 (10,20) ，圆角角度为 (40,20) 的圆角矩形
auto roundedRect = Shape::createRoundedRect(Rect(Point(), Size(10, 20)), Vector2(40, 20));
// 创建一个半径为 10 的圆形
auto circle = Shape::createCircle(Point(), 10);
// 创建一个半径为 (10,20) 的椭圆形
auto ellipse = Shape::createEllipse(Point(), Vector2(10, 20));
// 创建一个多边形
auto polygon = Shape::createPolygon({ Point(), Point(100, 100), Point(0, 100) });
```

形状具有周长、面积等属性：

```cpp
shape->getLength();     // 获取周长
shape->computeArea();   // 计算面积
```

形状还有一些辅助方法：

```cpp
shape->getBoundingBox();            // 获取形状外包围盒
shape->containsPoint(Point(5, 5));  // 判断点是否在形状内

// 计算形状长度为 1 时点的位置和切线向量
Point p;
Vector2 tangent;
shape->computePointAtLength(
    1,          // 长度，应 >= 0 && <= getLength()
    p,          // 返回点坐标
    tangent     // 返回切线向量
);
```

## ShapeMaker 形状生成器

复杂形状可以用 ShapeMaker 来构造，如创建一个三角形：

```cpp
// 等边三角形边长
float side = 45.f;

// 使用形状生成器创建三角形三条边
ShapeMaker maker;
// 从三角形第一个点开始描绘形状
maker.beginPath(Point(0, 0));
// 添加第一条边
maker.addLine(Point(side, 0));
// 添加第二条边
maker.addLine(Point(side / 2, side * math::Cos(30.0f)));
// 闭合路线，形成第三条边
maker.endPath(true);
// 获取形状
auto triangle = maker.getShape();
```

ShapeMaker 提供的形状生成方法有以下几种：

```cpp
// 添加一条边
maker.addLine(Point());
// 添加多条边
maker.addLines({ Point(), Point() });
// 添加贝塞尔曲线
maker.addLines(
    Point(),    // 贝塞尔曲线的第一个控制点
    Point(),    // 贝塞尔曲线的第二个控制点
    Point()     // 贝塞尔曲线的终点
);
// 添加弧线
maker.addLines(
    Point(),    // 弧线终点
    Size(),     // 椭圆半径
    120,        // 椭圆旋转角度
    true,       // 是否顺时针
    true        // 是否取小于 180° 的弧
);
```

<div class="ui info message"><div class="header">Tips </div>
形状生成必须在 `beginPath` 和 `endPath` 之间完成。
</div>

ShapeMaker 还可以合并两个形状

```cpp
// 创建两个形状
auto rect = Shape::createRect(Rect(Point(), Size(10, 20)));
auto circle = Shape::createCircle(Point(), 10);
// 用交集方式合并
auto shape = ShapeMaker::combine(rect, circle, ShapeMaker::CombineMode::Union);
```

ShapeMaker 支持的合并方式有以下几种

```cpp
// 形状合并方式
enum class CombineMode
{
    Union,      // 并集 (A + B)
    Intersect,  // 交集 (A + B)
    Xor,        // 对称差集 ((A - B) + (B - A))
    Exclude     // 差集 (A - B)
};
```

## ShapeNode 形状节点

`Shape 形状` 不是节点，所以不可以直接加入到场景中，需要添加到 ShapeNode 才可以具备节点的性质，例如移动

```cpp
// 创建一个宽高为 (10,20) 的矩形
auto rect = Shape::createRect(Rect(Point(), Size(10, 20)));
// 创建矩形节点
auto shapeNode = gcnew ShapeNode(rect);
// 移动矩形到 (100, 100) 坐标处
shapeNode->setPos(100, 100);
// 添加到场景中
scene->addChild(shapeNode);
```

### 填充与轮廓

`ShapeNode` 支持设置 `DrawingStyle` 绘图样式，以设置填充颜色、描边颜色等，详情请参阅 [DrawingStyle](/tutorial/common/drawing-style.html)。

```cpp
// 创建绘图样式
DrawingStyle style;
style.mode = DrawingStyle::Mode::Solid; // 绘图模式为填充
style.fillColor = Color::White;         // 填充色
style.strokeColor = Color::Red;         // 描边色
style.strokeWidth = 2.0;                // 描边宽度为 2.0
style.lineJoin = LineJoin::Miter;       // 线条相交样式

// 设置绘图样式
auto shapeNode = ShapeNode::createRect(Size(10, 10));
shapeNode->setDrawingStyle(style);
```

也可以单独设置某一项样式

```cpp
// 创建一个宽高为 (10,20) 的矩形
auto rect = gcnew ShapeNode(Shape::createRect(Rect(Point(), Size(10, 20))));
// 设置填充颜色为红色
rect->setFillColor(Color::Red);
// 设置轮廓颜色为白色
rect->setStrokeColor(Color::White);
// 设置轮廓线条宽度为 2
rect->setStrokeWidth(2.0);
```

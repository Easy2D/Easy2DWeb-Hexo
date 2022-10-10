---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Shape形状]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点类,/tutorial/node/node.html],
        [Text 文本类,/tutorial/node/text.html],
        [Sprite 精灵类,/tutorial/node/sprite.html],
        [Button 按钮类,/tutorial/node/button.html],
        [ToggleButton 开关按钮类,/tutorial/node/togglebutton.html],
        [Menu 菜单类,/tutorial/node/menu.html],
        [Shape 形状类,/tutorial/node/shape.html]
    ]
---

## Shape 形状

Shape 是节点的一种，它用于绘制一个简单的二维图形，例如矩形、圆形等。

Easy2D 提供了几种简单图形的创建方式：

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

ShapeMaker 提供的形状生成方法有一下几种：

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

所有的形状节点都可以设置样式，样式包括以下三种：

```cpp
enum Style
{
    Solid,  /* 填充 */
    Round,  /* 轮廓 */
    Fill,   /* 轮廓 + 填充 */
};
```

例如，设置一个形状仅显示轮廓，不显示填充颜色：

```cpp
// 设置形状样式为，轮廓
shapeNode->setStyle(Shape::Style::Round);
```

所有的形状都可以设置填充色和轮廓颜色

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

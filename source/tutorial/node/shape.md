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

### 形状分类

Easy2D 仅提供了四种简单图形，分别是

- RectShape 矩形
- RoundRectShape 圆角矩形
- MyCircle 圆形
- EllipseShape 椭圆形

创建四种形状的方式分别为：

```cpp
// 创建一个宽高为 (10,20) 的矩形
auto rect = gcnew RectShape(Size(10, 20));
// 创建一个宽高为 (10,20) ，圆角角度为 (40,20) 的圆角矩形
auto roundRect = gcnew RoundRectShape(Size(10, 20), 40, 20);
// 创建一个半径为 10 的圆形
auto circle = gcnew MyCircle(10);
// 创建一个半径为 (10,20) 的椭圆形
auto ellipse = gcnew EllipseShape(10, 20);
```

因为形状也是节点的一种，所以具备节点的所有性质，例如移动

```cpp
// 创建一个宽高为 (10,20) 的矩形
auto rect = gcnew RectShape(Size(10, 20));
// 移动矩形到 (100, 100) 坐标处
rect->setPos(100, 100);
```

### 填充与轮廓

所有的形状都可以设置样式，样式包括以下三种：

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
shape->setStyle(Shape::Style::Round);
```

所有的形状都可以设置填充色和轮廓颜色

```cpp
// 创建一个宽高为 (10,20) 的矩形
auto rect = gcnew RectShape(Size(10, 20));
// 设置填充颜色为红色
rect->setFillColor(Color::Red);
// 设置轮廓颜色为白色
rect->setLineColor(Color::White);
// 设置轮廓线条宽度为 2
rect->setStrokeWidth(2.0);
```

### 自定义形状

这部分是进阶知识，不建议初学者学习。

如果 Easy2D 提供的 4 种形状不能满足需求，需要更复杂的二维图形，那么你需要学习 Direct2D 的相关知识，然后仿照已有形状的代码，实现自己的形状。

例如，可以用如下代码实现一个简单的圆形：

```cpp
// 文件：MyCircle.h
// 自定义圆形
class MyCircle : public Shape
{
public:
    // 默认构造函数
    MyCircle();

    // 指定半径的圆形
    MyCircle(float radius);

    // 获取半径
    float getRadius() const;

    // 设置半径
    void setRadius(float radius);

protected:
    // 渲染轮廓
    virtual void _renderLine();

    // 渲染填充色
    virtual void _renderFill();

protected:
    float _radius;
};
```

在 cpp 文件中，写出自定义圆形的实现：

```cpp
// 文件：MyCircle.cpp
#include "MyCircle.h"

// 默认构造函数，半径为 0
MyCircle::MyCircle()
    : _radius(0)
{
    // 圆形的锚点应在中心
    this->setAnchor(0.5, 0.5);
}

// 指定圆形的半径
MyCircle::MyCircle(float radius)
{
    this->setRadius(radius);
    this->setAnchor(0.5, 0.5);
}

// 获取圆形半径
float MyCircle::getRadius() const
{
    return _radius;
}

// 设置圆形半径，注意需要同时修改父类（节点）的大小
void MyCircle::setRadius(float radius)
{
    _radius = float(radius);
    Node::setSize(radius * 2, radius * 2);
}

// 渲染轮廓，这部分需要调用 Direct2D 的原生函数 DrawEllipse
// 先通过 Renderer::getRenderTarget() 获取 Direct2D 的 ID2D1HwndRenderTarget 对象
// 有关该类的使用方法，请查阅微软官方文档
// https://docs.microsoft.com/en-us/windows/win32/api/d2d1/nn-d2d1-id2d1hwndrendertarget
void MyCircle::_renderLine()
{
    Renderer::getRenderTarget()->DrawEllipse(
        D2D1::Ellipse(D2D1::Point2F(_radius, _radius), _radius, _radius),
        Renderer::getSolidColorBrush(),
        _strokeWidth,
        _strokeStyle
    );
}

// 渲染填充色，这部分需要调用 Direct2D 的原生函数 FillEllipse
// 先通过 Renderer::getRenderTarget() 获取 Direct2D 的 ID2D1HwndRenderTarget 对象
// 有关该类的使用方法，请查阅微软官方文档
// https://docs.microsoft.com/en-us/windows/win32/api/d2d1/nn-d2d1-id2d1hwndrendertarget
void MyCircle::_renderFill()
{
    Renderer::getRenderTarget()->FillEllipse(
        D2D1::Ellipse(D2D1::Point2F(_radius, _radius), _radius, _radius),
        Renderer::getSolidColorBrush()
    );
}
```

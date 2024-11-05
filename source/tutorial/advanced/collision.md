---
title: 入门教程
subtitle: [ [进阶内容, /tutorial/advanced/], 节点碰撞]
icon: idea
type: "tutorial"
toclinker: 
    [
        [节点碰撞,/tutorial/advanced/collision.html],
        [垃圾回收,/tutorial/advanced/gc.html],
        [关于控制台,/tutorial/advanced/console.html],
        [更多,/tutorial/advanced/more.html]
    ]
---

## 通过外包围盒判断碰撞

`Node::getBoundingBox` 函数可以获取节点的外包围盒，它可以用来判断两个节点是否相交（碰撞）

```cpp
// 假设存在节点 node1 和 node2，判断两节点是否碰撞
// 先获取两节点的外包围盒
auto box1 = node1->getBoundingBox();
auto box2 = node2->getBoundingBox();

// 判断包围盒是否相交，相交即认为碰撞
if (box1.intersects(box2))
{
    // 两节点发生碰撞
}
```

## 通过 Body Shape 判断碰撞

节点可以为自己设置一个 Body 形状，支持任意多边形的碰撞体，并且可以判断两节点的具体相交关系，如 `包含`、`被包含`、`相交但不包含` 等。

```cpp
// 假设存在节点 node1 和 node2
// 为 node1 设置矩形碰撞体（长宽为 60）
node1->setBodyShape(gcnew Shape(Shape::Rect, Rect(Point(), Size(60, 60))));
// 为 node2 设置圆形碰撞体（半径为 10）
float radius = 10.f;
node2->setBodyShape(gcnew Shape(Shape::Circle, Point(radius, radius), radius));

// 判断两节点之间的关系
BodyRelation rel = node1->compareWithBody(node2);
switch (rel)
{
case BodyRelation::Disjoint:
    E2D_LOG("node1 和 node2 不相交");
    break;
case BodyRelation::IsContained:
    E2D_LOG("node1 被 node2 包含");
    break;
case BodyRelation::Contains:
    E2D_LOG("node1 包含 node2");
    break;
case BodyRelation::Overlap:
    E2D_LOG("node1 和 node2 相交，但不包含");
    break;
}
```

为了方便调试 Body 形状，可以打开 Body 渲染开关

```cpp
// 在 main 函数任意位置打开 Body 渲染开关
Renderer::showBodyShapes();

// 对指定节点显示 Body
node1->showBodyShape();
```

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

## 碰撞判断

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

## 外包围盒

:( 这个部分正在建设...

## 如何应用

:( 这个部分正在建设...

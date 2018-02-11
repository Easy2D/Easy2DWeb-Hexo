---
title: 入门教程
subtitle: [ [动画简介, /tutorial/action/], 位移动画]
icon: idea
type: "tutorial"
toclinker: 
    [[位移动画,/tutorial/action/move.html],
    [透明度渐变动画,/tutorial/action/opacity.html],
    [缩放动画,/tutorial/action/scale.html],
    [旋转动画,/tutorial/action/rotate.html],
    [帧动画,/tutorial/action/animation.html],
    [在动画中执行函数,/tutorial/action/callback.html],
    [动画中的延时,/tutorial/action/delay.html],
    [组合两个动画,/tutorial/action/two-actions.html],
    [顺序执行多个动画,/tutorial/action/sequence.html],
    [循环执行动画,/tutorial/action/loop.html],
    [动画的停止、暂停和继续,/tutorial/action/start-pause-resume.html],
    [动画的克隆,/tutorial/action/clone.html]]
---
## 位移动画

`ActionMoveTo` 动画可以使节点在一段时间内移动到另一个位置，你需要在它的构造函数中指定这个动画的持续时间和目的地。

```cpp
// 创建一个位移动画，2.5 秒后使节点移动到坐标 (100, 200) 处
auto moveTo = new ActionMoveTo(2.5f, Point(100, 200));
```

调用节点的 `runAction` 函数，可以让节点执行动画。如下面的代码执行后，无论精灵在什么位置，它都会在 2.5 秒内移动到坐标 (100, 200) 处。

```cpp
// 创建一个精灵
auto sprite = new Sprite();
// 让这个精灵执行位移动画
sprite->runAction(moveTo);
```

`ActionMoveBy` 动画也是位移动画，它使节点朝一个方向移动一定的距离，你需要在它的构造函数中指定这个动画的持续时间和位移的距离。

```cpp
// 创建一个位移动画，2.5 秒内使节点移动横向移动 100 像素
auto moveBy = new ActionMoveBy(2.5f, Vector(100, 0));
```

执行这个动画后，节点会从它的起始位置开始，在 2.5 秒内向正右方移动 100 像素。
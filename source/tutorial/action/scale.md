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
## 缩放动画

`ActionScaleTo` 动画可以使节点在一段时间内逐渐放大或缩小（大于 1 是放大，小于 1 大于 0 是缩小，小于 0 是反转），你需要在它的构造函数中指定这个动画的持续时间和缩放倍数。

```cpp
// 创建一个缩放动画，1 秒后缩放到原始大小的 0.5 倍
auto scaleTo = new ActionScaleTo(1, 0.5);
```

执行这个动画后，无论节点本来多大，它都会在 1 秒内逐渐变化成原始大小的 0.5 倍。

`ActionScaleBy` 动画也是缩放动画，它使节点的缩放倍数在一段时间内逐渐增加或减少，你需要在它的构造函数中指定这个动画的持续时间和缩放倍数的变化值。

```cpp
// 创建一个缩放动画，1 秒后缩放倍数减少 0.3
auto scaleBy = new ActionScaleBy(1, -0.3);
```

例如下面的精灵的起始缩放倍数是 0.5，执行这个动画后，它会在 1 秒内逐渐缩小至原始大小的 0.2 倍。

```cpp
// 创建一个精灵
auto sprite = new Sprite();
// 设置精灵的缩放为原来的 0.5 倍
sprite->setScale(0.5);
// 让这个精灵执行位移动画
sprite->runAction(scaleBy);
```
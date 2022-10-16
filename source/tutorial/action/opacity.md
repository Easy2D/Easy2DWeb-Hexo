---
title: 入门教程
subtitle: [ [节点动画, /tutorial/action/], 位移动画]
icon: idea
type: "tutorial"
toclinker: 
    [[位移动画,/tutorial/action/move.html],
    [透明度渐变动画,/tutorial/action/opacity.html],
    [缩放动画,/tutorial/action/scale.html],
    [旋转动画,/tutorial/action/rotate.html],
    [跳跃动画,/tutorial/action/jump.html],
    [帧动画,/tutorial/action/animation.html],
    [在动画中执行函数,/tutorial/action/callfunc.html],
    [动画中的延时,/tutorial/action/delay.html],
    [顺序执行多个动画,/tutorial/action/sequence.html],
    [同时执行多个动画,/tutorial/action/spawn.html],
    [循环执行动画,/tutorial/action/loop.html],
    [动画的停止、暂停和继续,/tutorial/action/start-pause-resume.html],
    [动画的克隆,/tutorial/action/clone.html]]
---
## 透明度渐变动画

`OpacityTo` 动画可以使节点的透明度在一段时间内变化到另一个值（必须在 0 ~ 1 范围内，0 是完全透明，1 是完全不透明），你需要在它的构造函数中指定这个动画的持续时间和透明度的值。

```cpp
// 创建一个透明度渐变动画，1 秒后透明度变为 0.2
auto opacityTo = gcnew OpacityTo(1, 0.2f);
```

执行这个动画后，无论节点本来的透明度如何，它的透明度都会在 1 秒内变成 0.2。

`OpacityBy` 动画也是透明度渐变动画，它使节点的透明度在一段时间内逐渐增加或减少，你需要在它的构造函数中指定这个动画的持续时间和透明度的变化值。

```cpp
// 创建一个透明度渐变动画，1 秒后透明度减少 0.5
auto opacityBy = gcnew OpacityBy(1, -0.5f);
```

例如下面的精灵的起始透明度是 0.5，执行这个动画后，它的透明度会在 1 秒内减少到 0。

```cpp
// 创建一个精灵
auto sprite = gcnew Sprite();
// 设置精灵的透明度为 0.5
sprite->setOpacity(0.5f);
// 让这个精灵执行位移动画
sprite->runAction(opacityBy);
```

`FadeIn` 和 `FadeOut` 是淡入和淡出动画，让节点浮现或消失，你只需要指定这个动画的时长。

```cpp
// 创建一个 1 秒的淡入动画
auto fadeIn = gcnew FadeIn(1);
// 创建一个 1 秒的淡出动画
auto fadeOut = gcnew FadeOut(1);
```
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
## 旋转动画

`ActionRotateTo` 动画可以使节点在一段时间内逐渐旋转至某个角度，你需要在它的构造函数中指定这个动画的持续时间和旋转后的度数。

```cpp
// 创建一个旋转动画，1 秒后缩放至 180 度
auto rotateTo = new ActionRotateTo(1, 180);
```

执行这个动画后，无论节点原本的角度是多少，它都会在 1 秒内逐渐旋转至 180 度。

`ActionRotateBy` 动画也是旋转动画，它使节点的旋转度数在一段时间内逐渐变化（正数表示顺时针旋转，负数表示逆时针旋转），你需要在它的构造函数中指定这个动画的持续时间和角度的变化值。

```cpp
// 创建一个旋转动画，1 秒内顺时针旋转 60 度
auto rotateBy = new ActionRotateBy(1, 60);
```

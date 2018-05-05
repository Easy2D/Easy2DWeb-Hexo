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
    [帧动画,/tutorial/action/animation.html],
    [在动画中执行函数,/tutorial/action/callback.html],
    [动画中的延时,/tutorial/action/delay.html],
    [组合两个动画,/tutorial/action/two-actions.html],
    [顺序执行多个动画,/tutorial/action/sequence.html],
    [循环执行动画,/tutorial/action/loop.html],
    [动画的停止、暂停和继续,/tutorial/action/start-pause-resume.html],
    [动画的克隆,/tutorial/action/clone.html]]
---
## 循环执行动画

`ActionLoop` 可以让一个动画循环执行，例如下面的代码，精灵执行动画后就会不断的消失，又浮现。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new ActionFadeOut(1.5);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new ActionFadeIn(0.5);
// 组合两个动画
auto two = new ActionTwo(fadeOut, fadeIn);
// 创建一个循环动画
auto loop = new ActionLoop(two);
// 让一个精灵执行
sprite->runAction(loop);
```

循环动画可以设置它的构造函数的第二个参数，指定它的循环次数。例如下面的代码中，循环动画只会循环 3 次。

```cpp
// 创建一个循环动画
auto loop = new ActionLoop(two, 3);
```
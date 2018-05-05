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
## 顺序执行多个动画

`ActionSequence` 可以将多个动画组合成一个顺序执行的动画，你需要在它的构造函数中指定动画的个数和它组合的所有动画。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new ActionFadeOut(1.5);
// 创建一个回调函数动画
auto callback = new ActionCallback([=]() {
    sprite->setRotation(45);    // 在回调函数中修改精灵的旋转角度
});
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new ActionFadeIn(0.5);
// 组合三个动画成顺序动画
auto sequence = new ActionSequence(3, fadeOut, callback, fadeIn);
// 执行顺序动画
sprite->runAction(sequence);
```

上面的代码将三个动画组合成一个顺序动画，精灵执行这个动画后，就会先慢慢消失，然后旋转 45 度，再慢慢浮现出来。
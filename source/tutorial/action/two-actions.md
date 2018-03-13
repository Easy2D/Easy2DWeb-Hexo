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
## 组合两个动画

`ActionTwo` 可以将两个动画组合在一起，第一个动画执行完后，开始执行第二个动画。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new ActionFadeOut(1.5);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new ActionFadeIn(0.5);
// 组合两个动画
auto two = new ActionTwo(fadeOut, fadeIn);
// 执行组合动画
sprite->runAction(two);
```

上面的代码将淡入和淡出动画组合成一个动画，精灵执行后就会先慢慢消失，又慢慢浮现出来。

如果想让两个动画同时进行，可以将第三个参数设置为 true，这样两个动画是同时进行的，当两个动画都结束时，这个动画才会结束。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new ActionFadeOut(1.5);
// 创建一个 1 秒的旋转动画
auto rotateBy = new ActionRotateBy(1, 60);
// 组合两个动画
auto two = new ActionTwo(fadeOut, rotateBy, true);
// 执行组合动画
sprite->runAction(two);
```

上面的精灵在执行动画后，就会一遍旋转，一遍慢慢消失。
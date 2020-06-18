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
    [在动画中执行函数,/tutorial/action/callfunc.html],
    [动画中的延时,/tutorial/action/delay.html],
    [顺序执行多个动画,/tutorial/action/sequence.html],
    [同时执行多个动画,/tutorial/action/spawn.html],
    [循环执行动画,/tutorial/action/loop.html],
    [动画的停止、暂停和继续,/tutorial/action/start-pause-resume.html],
    [动画的克隆,/tutorial/action/clone.html]]
---
## 循环执行动画

`Loop` 可以让一个动画循环执行，例如下面的代码，精灵执行动画后会持续不断的旋转

```cpp
// 创建一个旋转动画，1 秒内顺时针旋转 60 度
auto rotateBy = gcnew RotateBy(1, 60);
// 创建一个循环动画
auto loop = gcnew Loop(rotateBy);
// 让一个精灵执行
sprite->runAction(loop);
```

配合组合动画，可以实现更复杂的动画循环，例如下面的代码，精灵执行动画后就会不断的消失，又浮现

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = gcnew FadeOut(1.5f);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = gcnew FadeIn(0.5f);
// 组合两个动画
auto seq = gcnew Sequence({ fadeOut, fadeIn });
// 创建一个循环动画
auto loop = gcnew Loop(seq);
// 让一个精灵执行
sprite->runAction(loop);
```

循环动画可以设置它的构造函数的第二个参数，指定它的循环次数。例如下面的代码中，循环动画只会循环 3 次。

```cpp
// 创建一个循环动画
auto loop = gcnew Loop(action, 3);
```

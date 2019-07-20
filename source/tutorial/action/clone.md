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
## 动画的克隆

虽然一个精灵可以执行两个动画，但是两个精灵不能执行同一个动画，所以下面的代码是错误的

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = gcnew FadeOut(1.5f);
// 两个精灵执行同一个动画将出现错误
sprite->runAction(fadeOut);
sprite2->runAction(fadeOut);
```

这种情况应使用 `clone` 函数创建一个相同的动画，并让第二个精灵执行这个克隆后的动画

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = gcnew FadeOut(1.5f);
// 第一个精灵执行动画
sprite->runAction(fadeOut);
// 第二个精灵执行这个动画的克隆动画
sprite2->runAction(fadeOut->clone());
```
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

## 同时执行多个动画

`Spawn` 可以将多个动画组合在一起，并让它们同时开始运行。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = gcnew FadeOut(1.5f);
// 创建一个 0.5 秒的旋转动画
auto rotateBy = gcnew RotateBy(0.5f, 60);
// 组合两个动画
auto two = gcnew Spawn({ fadeOut, rotateBy });
// 执行组合动画
sprite->runAction(two);
```

上面的代码将淡入和旋转动画组合成一个动画，精灵执行后就会一边慢慢消失，一边旋转 60 度。

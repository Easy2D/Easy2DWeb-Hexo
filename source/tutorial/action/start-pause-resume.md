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
## 动画的停止、暂停和继续

节点执行动画后，可以在任何时候让这个动画停止、暂停或继续。

```cpp
// 假设存在动画 action 和精灵 sprite
sprite->runAction(action);
// 暂停动画
sprite->pauseAction(action);
// 继续动画
sprite->resumeAction(action);
// 停止动画
sprite->stopAction(action);
```

你也可以直接停止、暂停或继续一个节点的所有动画

```cpp
// 暂停 sprite 的所有动画
sprite->pauseAllActions();
// 继续 sprite 的所有动画
sprite->resumeAllActions();
// 停止 sprite 的所有动画
sprite->stopAllActions();
```
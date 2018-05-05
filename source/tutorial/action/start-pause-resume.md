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
## 动画的停止、暂停和继续

节点执行动画后，可以在任何时候让这个动画停止、暂停或继续。

```cpp
// 假设存在动画 action 和精灵 sprite
// 执行动画
sprite->runAction(action);
// 暂停动画
action->pause();
// 继续动画
action->resume();
// 停止动画
action->stop();
```

动作可以有自己的名称，然后你可以让所有相同名称的动画停止或继续

```cpp
// 假设存在动画 action 和精灵 sprite
// 设置动画的名称
action->setName("旋转动画");
// 执行动画
sprite->runAction(action);
// 停止 sprite 的“旋转动画”
sprite->stopAction("旋转动画");
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
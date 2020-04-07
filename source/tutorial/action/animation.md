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
## 帧动画

`Animation` 是帧动画，所谓帧动画就是每隔一个很短的时间，切换一次精灵的图片。当这个间隔非常短时，精灵就好像动了起来。

用 Image (图片类) 可以给精灵创建帧动画，下面是一段示例代码

```cpp
// 创建帧动画
auto animation = gcnew Animation;
// 加载多个精灵帧
animation->addFrame(gcnew Image(L"第一帧.png"));
animation->addFrame(gcnew Image(L"第二帧.png"));
animation->addFrame(gcnew Image(L"第三帧.png"));
// 精灵执行帧动画
sprite->runAction(animation);
```

<div class="ui info message"><div class="header">Tips </div>
这个动画只执行一次就结束了，如果想让它循环执行帧动画，需要用 Loop 实现

```cpp
// 把已建好的帧动画组合成循环动画
auto action = gcnew Loop(animation);
// 精灵执行循环的帧动画
sprite->runAction(action);
```
</div>
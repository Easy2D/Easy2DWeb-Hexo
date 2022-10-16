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
## 帧动画

`Animation` 是帧动画，所谓帧动画就是每隔一个很短的时间，切换一次精灵的图片。当这个间隔非常短时，精灵就好像动了起来。

用 Image (图片类) 可以给精灵创建帧动画，下面是一段示例代码

```cpp
// 创建帧动画的序列帧，每 0.1 秒切换一帧
auto seq = gcnew FrameSequence(0.1);
// 加载多个精灵帧
seq->add(Image::load(L"第一帧.png"));                                                // 无裁剪的添加一张图片
seq->add(gcnew KeyFrame(Image::load(L"第二帧.png")));                                // 无裁剪的指定图片为关键帧，和上一行写法没有区别
seq->add(gcnew KeyFrame(Image::load(L"第三帧.png"), Rect(Point(), Size(100, 50))));  // 指定图片为关键帧并进行裁剪

// 创建帧动画
auto animation = gcnew Animation(seq);
// 精灵执行帧动画
sprite->runAction(animation);
```

<div class="ui info warning"><div class="header">Warning </div>
注意，只能由精灵执行帧动画
</div>

这个动画只执行一次就结束了，如果想让它循环执行帧动画，需要用 Loop 动画组合实现

```cpp
// 把已建好的帧动画组合成循环动画
auto action = gcnew Loop(animation);
// 精灵执行循环的帧动画
sprite->runAction(action);
```

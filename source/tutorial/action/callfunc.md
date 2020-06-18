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
## 在动画中执行函数

`CallFunc` 在运行时立即执行一个函数，你需要为它指定一个可执行的回调函数

```cpp
void Test() { ... }
// 创建一个动画，这个动画立即执行 Test 函数
auto action = gcnew CallFunc(Test);
```

```cpp
// 另外一种方法，执行 lambda 函数
auto action = gcnew CallFunc([]() {});
```

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced.html#关于回调函数)。
</div>

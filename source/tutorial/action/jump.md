---
title: 入门教程
subtitle: [ [节点动画, /tutorial/action/], 跳跃动画]
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
## 跳跃动画

`JumpTo` 动画可以使节点在一段时间内跳跃到另一个位置，你需要在它的构造函数中指定这个动画的持续时间和目的地。

```cpp
// 创建一个跳跃动画，2.5 秒后使节点移动到坐标 (100, 200) 处，跳跃高度为250
auto jumpTo = gcnew JumpTo(2.5f, Point(100, 200), 250);

// 创建一个跳跃动画，但跳跃3次
auto jumpTo = gcnew JumpTo(2.5f, Point(100, 200), 250, 3);
```

`JumpBy` 动画也是跳跃动画，但它可以跳跃到相对于当前的某个位置，你需要在它的构造函数中指定这个动画的持续时间和位移的距离。

```cpp
// 创建一个相对跳跃动画，2.5 秒内使节点跳跃后移动到它右侧 100 像素位置，跳跃高度为250
auto jumpBy = gcnew JumpBy(2.5f, Vector2(100, 0), 250);
```

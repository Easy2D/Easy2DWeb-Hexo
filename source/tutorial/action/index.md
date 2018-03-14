---
title: 入门教程
subtitle: [动画简介]
icon: idea
type: "tutorial"
---

## 什么是动画

直接修改节点的属性会立即生效，体现不出时间的概念，也没有渐变的效果。想让一个精灵执行一段连贯的动画，需要用到 Action 动画类。

动画分为普通动画和组合动画。普通动画是执行一段时间，达到一种效果，组合动画是普通动画的组合。

目前普通动画有：

- `ActionMoveTo` （在一段时间内移动到指定位置）
- `ActionMoveBy` （在一段时间内移动到相对于当前位置的某个位置）
- `ActionScaleTo` （在一段时间内缩放到指定大小）
- `ActionScaleBy` （在一段时间内缩放到相对于当前大小的某个大小）
- `ActionOpacityTo` （在一段时间内透明度渐变到指定值）
- `ActionOpacityBy` （在一段时间内透明度渐变到相对于当前透明度的某个值）
- `ActionFadeIn` （在一段时间内透明度渐变到完全显示）
- `ActionFadeOut` （在一段时间内透明度渐变到完全消失）
- `ActionRotateTo` （在一段时间内旋转到到指定角度）
- `ActionRotateBy` （在一段时间内旋转到相对于当前角度的某个角度）
- `ActionDelay` （等待一段时间）
- `Animation` （帧动画，只有 Sprite 可以执行该动画）
- `ActionCallback` （立即执行指定的回调函数）

组合动画有：

- `ActionTwo` （组合两个动画）
- `ActionSequence` （组合多个动画，按顺序执行）
- `ActionLoop` （将一个动画循环执行，默认无限循环，也可以指定循环次数）

<div class="ui info message"><div class="header">Tips </div>
Action 不是节点，它只是描述了节点需要执行的动画的过程。
</div>

## 动画使用方法

- [位移动画](/tutorial/action/move.html)
- [透明度渐变动画](/tutorial/action/opacity.html)
- [缩放动画](/tutorial/action/scale.html)
- [旋转动画](/tutorial/action/rotate.html)
- [帧动画](/tutorial/action/animation.html)
- [在动画中执行函数](/tutorial/action/callback.html)
- [动画中的延时](/tutorial/action/delay.html)
- [组合两个动画](/tutorial/action/two-actions.html)
- [顺序执行多个动画](/tutorial/action/sequence.html)
- [循环执行动画](/tutorial/action/loop.html)
- [动画的停止、暂停和继续](/tutorial/action/start-pause-resume.html)
- [动画的克隆](/tutorial/action/clone.html)
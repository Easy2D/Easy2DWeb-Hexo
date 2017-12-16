---
title: 入门教程
subtitle: 动画简介
icon: idea
toc: true
type: "tutorial"
---
## 什么是动画

直接修改节点的属性会立即生效，体现不出时间的概念，也没有渐变的效果。想让一个精灵执行一段连贯的动画，需要用到 EAction 动画类。

动画分为即时动画、延时动画和组合动画三种。即时动画是立即执行然后结束的动画，延时动画是需要执行一段时间的动画，组合动画是前两种动画的组合。

目前延时动画有：

- `EActionMoveTo` （在一段时间内移动到指定位置）
- `EActionMoveBy` （在一段时间内移动到相对于当前位置的某个位置）
- `EActionScaleTo` （在一段时间内缩放到指定大小）
- `EActionScaleBy` （在一段时间内缩放到相对于当前大小的某个大小）
- `EActionOpacityTo` （在一段时间内透明度渐变到指定值）
- `EActionOpacityBy` （在一段时间内透明度渐变到相对于当前透明度的某个值）
- `EActionFadeIn` （在一段时间内透明度渐变到完全显示）
- `EActionFadeOut` （在一段时间内透明度渐变到完全消失）
- `EActionRotateTo` （在一段时间内旋转到到指定角度）
- `EActionRotateBy` （在一段时间内旋转到相对于当前角度的某个角度）
- `EActionDelay` （等待一段时间）
- `EAnimation` （帧动画，只有 ESprite 可以执行该动画）

即时动画有：

- `EActionCallback` （立即执行指定的回调函数）

组合动画有：

- `EActionTwo` （组合两个动画，第一个动画执行后开始指定第二个动画）
- `EActionTwoAtSameTime` （组合两个动画，两个动画同时执行）
- `EActionSequence` （组合多个动画，按顺序执行）
- `EActionLoop` （将一个动画循环执行，默认无限循环，也可以指定循环次数）

<div class="ui info message"><div class="header">Tips </div>
EAction 不是节点，它只是描述了节点需要执行的动画的过程。
</div>

<br />

## 位移动画

`EActionMoveTo` 动画可以使节点在一段时间内移动到另一个位置，你需要在它的构造函数中指定这个动画的持续时间和目的地。

```cpp
// 创建一个位移动画，2.5 秒后使节点移动到坐标 (100, 200) 处
auto moveTo = new EActionMoveTo(2.5f, EPoint(100, 200));
```

调用节点的 `runAction` 函数，可以让节点执行动画。如下面的代码执行后，无论精灵在什么位置，它都会在 2.5 秒内移动到坐标 (100, 200) 处。

```cpp
// 创建一个精灵
auto sprite = new ESprite();
// 让这个精灵执行位移动画
sprite->runAction(moveTo);
```

`EActionMoveBy` 动画也是位移动画，它使节点朝一个方向移动一定的距离，你需要在它的构造函数中指定这个动画的持续时间和位移的距离。

```cpp
// 创建一个位移动画，2.5 秒内使节点移动横向移动 100 像素
auto moveBy = new EActionMoveBy(2.5f, EVec(100, 0));
```

执行这个动画后，节点会从它的起始位置开始，在 2.5 秒内向正右方移动 100 像素。

<br />


## 透明度渐变动画

`EActionOpacityTo` 动画可以使节点的透明度在一段时间内变化到另一个值（必须在 0 ~ 1 范围内，0 是完全透明，1 是完全不透明），你需要在它的构造函数中指定这个动画的持续时间和透明度的值。

```cpp
// 创建一个透明度渐变动画，1 秒后透明度变为 0.2
auto opacityTo = new EActionOpacityTo(1, 0.2f);
```

执行这个动画后，无论节点本来的透明度如何，它的透明度都会在 1 秒内变成 0.2。

`EActionOpacityBy` 动画也是透明度渐变动画，它使节点的透明度在一段时间内逐渐增加或减少，你需要在它的构造函数中指定这个动画的持续时间和透明度的变化值。

```cpp
// 创建一个透明度渐变动画，1 秒后透明度减少 0.5
auto opacityBy = new EActionOpacityBy(1, -0.5f);
```

例如下面的精灵的起始透明度是 0.5，执行这个动画后，它的透明度会在 1 秒内减少到 0。

```cpp
// 创建一个精灵
auto sprite = new ESprite();
// 设置精灵的透明度为 0.5
sprite->setOpacity(0.5f);
// 让这个精灵执行位移动画
sprite->runAction(opacityBy);
```

`EActionFadeIn` 和 `EActionFadeOut` 是淡入和淡出动画，让节点浮现或消失，你只需要指定这个动画的时长。

```cpp
// 创建一个 1 秒的淡入动画
auto fadeIn = new EActionFadeIn(1);
// 创建一个 1 秒的淡出动画
auto fadeOut = new EActionFadeOut(1);
```

<br />

## 缩放动画

`EActionScaleTo` 动画可以使节点在一段时间内逐渐放大或缩小（大于 1 是放大，小于 1 大于 0 是缩小，小于 0 是反转），你需要在它的构造函数中指定这个动画的持续时间和缩放倍数。

```cpp
// 创建一个缩放动画，1 秒后缩放到原始大小的 0.5 倍
auto scaleTo = new EActionScaleTo(1, 0.5f);
```

执行这个动画后，无论节点本来多大，它都会在 1 秒内逐渐变化成原始大小的 0.5 倍。

`EActionScaleBy` 动画也是缩放动画，它使节点的缩放倍数在一段时间内逐渐增加或减少，你需要在它的构造函数中指定这个动画的持续时间和缩放倍数的变化值。

```cpp
// 创建一个缩放动画，1 秒后缩放倍数减少 0.3
auto scaleBy = new EActionScaleBy(1, -0.3f);
```

例如下面的精灵的起始缩放倍数是 0.5，执行这个动画后，它会在 1 秒内逐渐缩小至原始大小的 0.2 倍。

```cpp
// 创建一个精灵
auto sprite = new ESprite();
// 设置精灵的缩放为原来的 0.5 倍
sprite->setScale(0.5f);
// 让这个精灵执行位移动画
sprite->runAction(scaleBy);
```

<br />

## 旋转动画

`EActionRotateTo` 动画可以使节点在一段时间内逐渐旋转至某个角度，你需要在它的构造函数中指定这个动画的持续时间和旋转后的度数。

```cpp
// 创建一个旋转动画，1 秒后缩放至 180 度
auto rotateTo = new EActionRotateTo(1, 180);
```

执行这个动画后，无论节点原本的角度是多少，它都会在 1 秒内逐渐旋转至 180 度。

`EActionRotateBy` 动画也是旋转动画，它使节点的旋转度数在一段时间内逐渐变化（正数表示顺时针旋转，负数表示逆时针旋转），你需要在它的构造函数中指定这个动画的持续时间和角度的变化值。

```cpp
// 创建一个旋转动画，1 秒内顺时针旋转 60 度
auto rotateBy = new EActionRotateBy(1, 60);
```

<br />

## 在动画中执行函数

`EActionCallback` 在运行时立即执行一个函数，你需要为它指定一个可执行的函数

```cpp
// 创建一个动画，这个动画执行一个指定的函数
auto action = new EActionCallback([]() {});
```

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced.html#关于回调函数)。
</div>

<br />

## 动画中的延时

`EActionDelay` 是一段延时动画，它什么都不做，只是为了多个动画组合在一起时，起到间隔的作用。

```cpp
// 创建一个延时动画，它延时 1 秒
auto delay = new EActionDelay(1);
```

<br />

## 组合两个动画

`EActionTwo` 可以将两个动画组合在一起，第一个动画执行完后，开始执行第二个动画。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new EActionFadeIn(0.5f);
// 组合两个动画
auto two = new EActionTwo(fadeOut, fadeIn);
// 执行组合动画
sprite->runAction(two);
```

上面的代码将淡入和淡出动画组合成一个动画，精灵执行后就会先慢慢消失，又慢慢浮现出来。

`EActionTwoAtSameTime` 也是两个动画的组合，但两个动画是同时进行的，当两个动画都结束时，这个动画才会结束。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个 1 秒的旋转动画
auto rotateBy = new EActionRotateBy(1, 60);
// 组合两个动画
auto two = new EActionTwoAtSameTime(fadeOut, rotateBy);
// 执行组合动画
sprite->runAction(two);
```

上面的精灵在执行动画后，就会一遍旋转，一遍慢慢消失。

<br />

## 顺序执行多个动画

`EActionSequence` 可以将多个动画组合成一个顺序执行的动画，你需要在它的构造函数中指定动画的个数和它组合的所有动画。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个回调函数动画
auto callback = new EActionCallback([=]() {
    sprite->setRotation(45);    // 在回调函数中修改精灵的旋转角度
});
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new EActionFadeIn(0.5f);
// 组合三个动画成顺序动画
auto sequence = new EActionSequence(3, fadeOut, callback, fadeIn);
// 执行顺序动画
sprite->runAction(sequence);
```

上面的代码将三个动画组合成一个顺序动画，精灵执行这个动画后，就会先慢慢消失，然后旋转 45 度，再慢慢浮现出来。

<br />

## 循环执行动画

`EActionLoop` 可以让一个动画循环执行，例如下面的代码，精灵执行动画后就会不断的消失，又浮现。

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new EActionFadeIn(0.5f);
// 组合两个动画
auto two = new EActionTwo(fadeOut, fadeIn);
// 创建一个循环动画
auto loop = new EActionLoop(two);
// 让一个精灵执行
sprite->runAction(loop);
```

循环动画可以设置它的构造函数的第二个参数，指定它的循环次数。例如下面的代码中，循环动画只会循环 3 次。

```cpp
// 创建一个循环动画
auto loop = new EActionLoop(two, 3);
```

<br />

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

<br />

## 帧动画

`EAnimation` 是帧动画，所谓帧动画就是每隔一个很短的时间，切换一次精灵的图片。当这个间隔非常短时，精灵就好像动了起来。

用精灵帧 (ESpriteFrame) 可以给精灵创建帧动画，下面是一段示例代码

```cpp
// 创建帧动画
auto animation = new EAnimation();
// 加载多个精灵帧
animation->addFrame(new ESpriteFrame(L"第一帧.png"));
animation->addFrame(new ESpriteFrame(L"第二帧.png"));
animation->addFrame(new ESpriteFrame(L"第三帧.png"));
// 精灵执行帧动画
sprite->runAction(animation);
```

<div class="ui info message"><div class="header">Tips </div>
这个动画只执行一次就结束了，如果想让它循环执行帧动画，需要用 EActionLoop 实现

```cpp
// 把已建好的帧动画组合成循环动画
auto action = new EActionLoop(animation);
// 精灵执行循环的帧动画
sprite->runAction(action);
```
</div>

<br/>

## 动画的克隆

虽然一个精灵可以执行两个动画，但是两个精灵不能执行同一个动画，所以下面的代码是错误的

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 两个精灵执行同一个动画将出现错误
sprite->runAction(fadeOut);
sprite2->runAction(fadeOut);
```

这种情况应使用 `clone` 函数创建一个相同的动画，并让第二个精灵执行这个克隆后的动画

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 第一个精灵执行动画
sprite->runAction(fadeOut);
// 第二个精灵执行这个动画的克隆动画
sprite2->runAction(fadeOut->clone());
```

<br/>

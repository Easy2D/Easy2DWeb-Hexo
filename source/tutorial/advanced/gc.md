---
title: 入门教程
subtitle: [ [进阶内容, /tutorial/advanced/], 垃圾回收]
icon: idea
type: "tutorial"
toclinker: 
    [
        [节点碰撞,/tutorial/advanced/collision.html],
        [垃圾回收,/tutorial/advanced/gc.html],
        [关于控制台,/tutorial/advanced/console.html],
        [更多,/tutorial/advanced/more.html]
    ]
---

## 关于垃圾回收

C++ 中使用 `new` 运算符创建的对象需要使用 `delete` 释放，否则会造成内存泄漏。引擎中使用了大量的指针，如果不妥善处理它们，程序占用的内存将成倍的增长。

Easy2D 提供了 `gcnew` 来代替 `new`，使用 `gcnew` 创建的对象将被 `垃圾回收器(GC)` 跟踪，当这个对象不再被需要时，GC 会自动 delete 它。

<div class="ui info message"><div class="header">Tips </div>
gcnew 仅能创建继承自 easy2d::Object 的对象。
</div>

`GC` 判断一个对象是否需要被释放的方法如下：

- Object 基类对象保存了一个引用计数，这个计数表示它被 “使用” 的次数，初始的引用计数为 1
- 当引用计数 > 0 时，对象被保留，引用计数 <= 0 时，对象被 delete
- Object 的 `retain` 和 `release` 方法可以使引用计数加一或减一，这两个方法应成对使用
- Object 的 `autorelease` 方法会把对象放入对象池中，gcnew 会自动调用 autorelease()
- GC 会在画面下一帧调用对象池中所有对象的 `release` 方法，并清空对象池，以保证没有被引用的对象被及时删除

比如我们使用 `gcnew` 创建了一个 `Scene` ，下面的代码展示了引用计数的变化

```cpp
// 创建一个场景，此时引用计数为 1
auto scene = gcnew Scene;
// 进入场景，它的引用计数变为 2
SceneManager::enter(scene);
// 退出场景，它的引用计数变回 1，GC 会在下一帧将 scene 回收
SceneManager::back();
```

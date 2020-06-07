---
title: 入门教程
subtitle: [ [常用工具, /tutorial/utils/], Timer定时器]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Random 随机数,/tutorial/utils/random.html],
        [Timer 定时器,/tutorial/utils/timer.html],
        [MusicPlayer 音乐播放器,/tutorial/utils/musicplayer.html],
        [Data 数据存储,/tutorial/utils/data.html]
    ]
---

## Timer 定时器

引擎提供了高性能的定时器，可以每隔一段时间自动执行一次指定的函数。

使用定时器之前，应先写一个函数，让定时器去执行它。

```cpp
// 写一个移动精灵的函数
void MoveSprite()
{
    // 将精灵向右方移动 1 像素
    sprite->movePosX(1);
}
```

然后创建一个定时器，让它不断的执行 MoveSprite 函数，这样精灵就会不断向右方移动。

```cpp
// 创建定时器，它可以自动执行 MoveSprite 函数
Timer::add(MoveSprite);
```

这个定时器会在每帧画面渲染时执行，而且永远不会停下来，除非你在某个地方调用了它的`stop`函数。

`Timer::add()`函数的第二和第三个参数可以指定定时器的执行间隔和执行次数。

```cpp
Timer::add(MoveSprite, 0.5f, 5);   // 每 0.5 秒执行一次，且执行 5 次后结束
```

<div class="ui warning message"><div class="header">Warning </div>
如果你创建了一个不会停止的定时器，那么切换场景后它仍在运行，所以你需要注意何时停止定时器。
</div>

`Timer::add()` 的第四个参数可以指定创建的定时器是否是暂停状态，第五个参数可以给定时器命名，有了名称的定时器可以管理其启动和暂停。

```cpp
Timer::add(MoveSprite, 0.5f, 5, false, L"move_timer");   // 启动后不暂停，且定时器名称为 move_timer
```

<div class="ui info message"><div class="header">Tips </div>
`Timer` 可以控制全局的定时器，例如使用下面的代码停止一个指定的定时器
```cpp
Timer::stop(L"move_timer");   // 停止所有名称为 move_timer 的定时器
```
</div>

---
title: 入门教程
subtitle: [ [常用工具, /tutorial/utils/], Random随机数]
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

## Random 随机数

`Random` 类用于获取随机数，`Random::range`函数可以获取任意数值类型在任意范围内的随机数，如下所示

```cpp
// 获得一个 [1, 3] 范围内的整形随机数
int num1 = Random::range(1, 3);
// 获得一个 [1, 3] 范围内的浮点型随机数
float num2 = Random::range(1.0f, 3.0f);
```

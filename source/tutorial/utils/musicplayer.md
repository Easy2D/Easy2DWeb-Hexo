---
title: 入门教程
subtitle: [ [常用工具, /tutorial/utils/], MusicPlayer音乐播放器]
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

## MusicPlayer 音乐播放器

`MusicPlayer` 是音乐播放器，它可以方便地控制游戏中的音乐。

播放音乐前，需要用`MusicPlayer::preload`函数预加载音乐文件。对于每个音乐文件来说，这个函数只需要运行一次。

```cpp
// 预加载音乐文件
MusicPlayer::preload(L"音乐文件名.wav");
```

添加音乐文件后，可以用 `MusicPlayer::play` 函数播放这个音乐。

```cpp
// 播放音乐文件
MusicPlayer::play(L"音乐文件名.wav");
// 播放音乐文件，并循环 3 次
MusicPlayer::play(L"音乐文件名.wav", 3);
// 播放音乐文件，并循环播放
MusicPlayer::play(L"音乐文件名.wav", -1);
```

`MusicPlayer` 类的 `play`、`pause`、`resume`、`stop`这四个函数分别控制音乐的播放、暂停、继续、停止。


### 音乐对象的使用

另外，调用 `MusicPlayer::preload` 函数时，函数会返回一个音乐对象。

<div class="ui info message"><div class="header">Tips </div>
`MusicPlayer::preload` 函数可以多次调用
</div>

```cpp
// 获取音乐对象
auto music = MusicPlayer::preload(L"音乐文件名.wav");
```

music 是一个 `Music` 类型的指针，`Music::play` 函数用来播放这个音乐。

```cpp
music->play();
```

`Music::play` 函数可以指定循环播放次数（默认为 0），如果这个次数为 -1，它将循环播放。

```cpp
music->play(-1);    // 循环播放音乐
```

`Music` 类的 `play`、`pause`、`resume`、`stop`这四个函数分别控制音乐的播放、暂停、继续、停止。

需要注意的是，`MusicPlayer::preload` 函数可能返回空指针，所以使用它时应进行判断。

```cpp
// 获取音乐对象
auto music = MusicPlayer::preload(L"音乐文件名.wav");
// 判断指针是否为空
if (music)
{
    // 播放音乐
    music->play();
}
```

---
title: 入门教程
subtitle: [ [常用工具, /tutorial/utils/], Data数据存储]
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

## Data 数据存储

`Data` 可以方便地把数据保存到本地，它支持保存`int`、`float`、`String(字符串)`三种类型的数据。下面是一段示例代码

```cpp
// 保存数据到本地
void Data::saveInt("data1", 2);           // 保存 int 型的值
void Data::saveDouble("data2", 2.2f);      // 保存 float 型的值
void Data::saveString("data3", "test");  // 保存 字符串 型的值
```

<div class="ui warning message"><div class="header">Warning </div>
保存的数据并不是加密的。
</div>

函数的第一个参数表示这个数据的关键字，你可以根据关键字重新取出数据

```cpp
// 读取
int data1 = Data::getInt("data1", 1);             // 获取 int 型的值
float data2 = Data::getDouble("data2", 1);         // 获取 float 型的值
String data3 = Data::getString("data3", "");    // 获取 字符串 型的值
```

函数的第二个参数指定了关键字不存在时，函数默认的返回值。

<div class="ui info message"><div class="header">Tips </div>
保存的数据不是在程序目录下，而是保存在了系统的 Appdata\Local 目录下。<br>
为了保证你的数据不被其他游戏覆盖，你应该在保存数据前设置独一无二的 `AppName`。<br>
关于 AppName 的具体用法请参考 [[关于 AppName]](/tutorial/advanced/more.html#关于AppName)
</div>

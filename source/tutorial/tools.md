---
title: 入门教程
subtitle: [常用工具简介]
icon: idea
toc: true
type: "tutorial"
---

## Random 随机数类

`Random` 类用于获取随机数，`Random::range`函数可以获取任意数值类型在任意范围内的随机数，如下所示

```cpp
// 获得一个 [1, 3] 范围内的整形随机数
int num1 = Random::range(1, 3);
// 获得一个 [1, 3] 范围内的浮点型随机数
double num2 = Random::range(1.0, 3.0);
```

<br/>

## Timer 定时器类

引擎提供了高性能的定时器，可以每隔一段时间自动执行一次指定的函数。下面的代码将创建一个定时器，并将精灵不断的向右方移动。

```cpp
// 创建精灵
auto sprite = new Sprite();
// 创建定时器
auto timer = new Timer([=]() {
    // 定时器每执行一次，将精灵向右方移动 1 像素
    sprite->movePosX(1);
});
// 使用 TimerManager 类的 add 函数添加定时器
TimerManager::add(timer, sprite);
```

<div class="ui info message"><div class="header">Tips </div>
定时器的生命周期和绑定的节点相同。定时器也可以绑定在场景上，只要不切换场景，这个定时器将一直有效。
</div>

这个定时器永远不会停下来，除非你在某个地方调用了它的`stop`函数。

`Timer::setRepeatTimes`函数可以指定定时器的执行次数，它将在执行相应次数后自动停下来。

```cpp
timer->setRepeatTimes(2);   // 只执行两次
```

定时器的默认时间间隔为 0，也就是在画面的每一帧执行一次，`Timer::setInterval`函数可以指定它每次执行的时间间隔，以秒为单位。

```cpp
timer->setInterval(0.5);    // 每隔 0.5 秒执行一次
```

但是定时器并不会立即开始执行，而是在等待 500 毫秒后开始执行第一次。`Timer::setRunAtOnce`函数可以让定时器在创建后立即执行一次。

```cpp
timer->setRunAtOnce(true);
```

`Timer::setName`函数可以给定时器命名，有了名称的定时器可以通过`TimerManager`管理。

<div class="ui info message"><div class="header">Tips </div>
`TimerManager` 是定时器管理器，使用它可以控制全局的定时器
```cpp
TimerManager::stopTimers(L"move_timer");   // 停止所有名称为 move_timer 的定时器
```
</div>

<br/>

## 使用 MusicManager 播放音乐

`MusicManager` 是音乐管理器，它可以方便地控制游戏中的音乐。

播放音乐前，需要用`MusicManager::add`函数添加音乐文件。对于每个音乐文件来说，这个函数只需要运行一次。

```cpp
// 添加音乐文件
MusicManager::add(L"音乐文件名.wav");
```

<div class="ui warning message"><div class="header">Warning </div>
MusicManager只能播放 wav 格式的音乐。
</div>

添加音乐文件后，可以用 `MusicManager::get` 函数获取一个音乐对象。

```cpp
// 获取音乐对象
auto music = MusicManager::get(L"音乐文件名.wav");
```

music 是一个 `Music` 类型的指针，`Music::play` 函数用来播放这个音乐。

```cpp
music->play();
```

`Music::play` 函数可以指定循环播放次数（默认为 0），如果这个次数为 -1，它将循环播放。

```cpp
music->play(-1);    // 循环播放音乐
```

<br/>

## Data 数据保存工具

`Data`可以方便地把数据保存到本地，它支持保存`int`、`float`、`String(字符串)`三种类型的数据。下面是一段示例代码

```cpp
// 保存数据到本地
void Data::saveInt(L"data1", 2);           // 保存 int 型的值
void Data::saveFloat(L"data2", 2.2f);      // 保存 float 型的值
void Data::saveString(L"data3", L"test");  // 保存 字符串 型的值
```

<div class="ui warning message"><div class="header">Warning </div>
保存的数据并不是加密的。
</div>

函数的第一个参数表示这个数据的关键字，你可以根据关键字重新取出数据

```cpp
// 读取
int data1 = Data::getInt(L"data1", 1);             // 获取 int 型的值
float data2 = Data::getFloat(L"data2", 1);         // 获取 float 型的值
String data3 = Data::getString(L"data3", L"");    // 获取 字符串 型的值
```

函数的第二个参数指定了关键字不存在时，函数默认的返回值。

<div class="ui info message"><div class="header">Tips </div>
保存的数据不是在程序目录下，而是保存在了系统的 Appdata\Local 目录下。为了保证你的数据不被其他游戏覆盖，你应该在保存数据前设置独一无二的 `AppName`。关于 AppName 的具体用法请参考 [[关于 AppName]](/tutorial/advanced.html#关于-AppName)
</div>

<br/>
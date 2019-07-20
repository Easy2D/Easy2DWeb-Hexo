---
title: 入门教程
subtitle: [常用工具]
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
float num2 = Random::range(1.0f, 3.0f);
```

<br/>

## Timer 定时器类

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

<br/>

## 使用 Player 播放音乐

`Player` 是音乐管理器，它可以方便地控制游戏中的音乐。

播放音乐前，需要用`Player::preload`函数预加载音乐文件。对于每个音乐文件来说，这个函数只需要运行一次。

```cpp
// 预加载音乐文件
Player::preload(L"音乐文件名.wav");
```

<div class="ui warning message"><div class="header">Warning </div>
Player 只能播放 wav 格式的音乐。
</div>

添加音乐文件后，可以用 `Player::play` 函数播放这个音乐。

```cpp
// 播放音乐文件
Player::play(L"音乐文件名.wav");
```

`Player` 类的 `play`、`pause`、`resume`、`stop`这四个函数分别控制音乐的播放、暂停、继续、停止。

另外，可以用 `Player::get` 函数获取一个音乐对象。

```cpp
// 获取音乐对象
auto music = Player::get(L"音乐文件名.wav");
```

music 是一个 `Music` 类型的指针，`Music::play` 函数用来播放这个音乐。

```cpp
music->play();
```

`Music::play` 函数可以指定循环播放次数（默认为 0），如果这个次数为 -1，它将循环播放。

```cpp
music->play(-1);    // 循环播放音乐
```

`Player::get` 函数可能返回空指针，所以使用它时应进行判断。

```cpp
// 获取音乐对象
auto music = Player::get(L"音乐文件名.wav");
// 判断指针是否为空
if (music)
{
    // 播放音乐
    music->play();
}
```

<br/>

## Data 数据保存工具

`Data`可以方便地把数据保存到本地，它支持保存`int`、`float`、`String(字符串)`三种类型的数据。下面是一段示例代码

```cpp
// 保存数据到本地
void Data::saveInt(L"data1", 2);           // 保存 int 型的值
void Data::saveDouble(L"data2", 2.2f);      // 保存 float 型的值
void Data::saveString(L"data3", L"test");  // 保存 字符串 型的值
```

<div class="ui warning message"><div class="header">Warning </div>
保存的数据并不是加密的。
</div>

函数的第一个参数表示这个数据的关键字，你可以根据关键字重新取出数据

```cpp
// 读取
int data1 = Data::getInt(L"data1", 1);             // 获取 int 型的值
float data2 = Data::getDouble(L"data2", 1);         // 获取 float 型的值
String data3 = Data::getString(L"data3", L"");    // 获取 字符串 型的值
```

函数的第二个参数指定了关键字不存在时，函数默认的返回值。

<div class="ui info message"><div class="header">Tips </div>
保存的数据不是在程序目录下，而是保存在了系统的 Appdata\Local 目录下。为了保证你的数据不被其他游戏覆盖，你应该在保存数据前设置独一无二的 `AppName`。关于 AppName 的具体用法请参考 [[关于 AppName]](/tutorial/advanced.html#关于-AppName)
</div>

<br/>

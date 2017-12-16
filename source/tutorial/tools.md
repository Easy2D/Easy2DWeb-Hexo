---
title: 入门教程
subtitle: 常用工具简介
icon: idea
toc: true
type: "tutorial"
---

## ERandom 随机数类

`ERandom` 可以获取任意数值类型在任意范围内的随机数，他的使用方法很简单：

```cpp
// 获得一个 [1, 3] 范围内的整形随机数
int ret1 = ERandom::between(1, 3);
// 获得一个 [1, 3] 范围内的浮点型随机数
double ret2 = ERandom::between(1.0, 3.0);
```

<br/>

## ETimer 定时器类

引擎提供了高性能的定时器，可以每隔一段时间执行一次指定的回调函数。下面的代码将创建一个定时器，并将精灵不断的向右方移动。

```cpp
auto timer = new ETimer([=](int) {
    sprite->movePosX(1);    // 定时器每执行一次，将精灵向右方移动 1 像素
});
timer->bindWith(sprite);    // 将这个定时器与精灵绑定
```

<div class="ui info message"><div class="header">Tips </div>
定时器与节点绑定后才会开始执行，它的生命周期和绑定的节点相同。定时器也可以绑定在场景上，只要不切换场景，这个定时器将一直有效。
</div>

这个定时器永远不会停下来，除非你在某个地方调用了它的`stop`函数。除此之外，你也可以指定定时器的执行次数，它将在执行相应次数后自动停下来。

```cpp
timer->setRepeatTimes(2);   // 只执行两次
```

定时器的默认时间间隔为 0，也就是在画面的每一帧执行一次，你可以指定它每次执行的时间间隔，以毫秒为单位

```cpp
timer->setInterval(500);    // 每隔 500 毫秒执行一次
```

但是定时器并不会立即开始执行，而是在等待 500 毫秒后开始执行第一次。
你可以设置定时器的构造函数的第四个参数为 true，让它在创建后立即执行一次。它的构造函数可以同时指定执行次数、时间间隔和是否立即执行。

```cpp
auto timer = new ETimer([=](int) {
    sprite->movePosX(10);    // 定时器每执行一次，将精灵向右方移动 10 像素
}, 2, 500, true);           // 总共执行 2 次，每隔 500 毫秒执行一次，且创建后立即执行一次
timer->bindWith(sprite);    // 将这个定时器与精灵绑定
```

如果将定时器的执行次数设置为 -1，它将永远不会自动停止。定时器的回调函数提供了一个 int 变量，用来记录这个定时器的执行次数，第一次执行时，这个值是 0。

```cpp
auto timer = new ETimer([=](int times) {    // times 就是该定时器的执行次数
    sprite->setPosX(times * 10);            // 定时器每执行一次，将精灵的横坐标移动到 10 的倍数
});
```

<div class="ui info message"><div class="header">Tips </div>
你可以给定时器命名，以在代码的任何地方通过名称操纵这个定时器。

```cpp
auto timer = new ETimer(
    L"move_timer",  // 设置定时器的名称
    [=](int) { sprite->movePosX(10); }
);
```
`ETimerManager` 是定时器管理器，使用它可以控制全局的定时器

```cpp
ETimerManager::stopTimers(L"move_timer");   // 停止名称为 move_timer 的定时器
```
</div>

<br/>

## EListener 监听器类和其派生类

监听器和定时器类似，但它不是每隔一段时间执行一次，而是遇到指定情况时自动触发。

例如`EListenerMouse`类可以监听所有的鼠标消息，无论是鼠标移动还是按下鼠标左键，这个监听器都会自动触发，并执行设定好的回调函数。

可以监听鼠标消息的监听器有：

- `EListenerMouse` （监听所有的鼠标消息）
- `EListenerMouseClick` （监听鼠标左键点击消息）
- `EListenerMouseDoubleClick` （监听鼠标左键双击消息）
- `EListenerMousePress` （监听鼠标左键按下消息）
- `EListenerMouseDrag` （监听鼠标左键拖动消息）

可以监听键盘消息的监听器有：

- `EListenerKeyboard` （监听所有的键盘消息）
- `EListenerKeyboardPress` （监听所有的按键消息）

使用下面的代码，可以每按点击一次鼠标，将精灵旋转 15 度

```cpp
// 创建一个鼠标左键点击消息监听器
// 回调函数中传入的参数是鼠标点击的位置
auto listener = new EListenerMouseClick([=](EPoint p) {
    sprite->setRotation(sprite->getRotation() + 15);    // 每监听到一次点击消息，将精灵旋转 15 度
});
// 把监听器和场景绑定
listener->bindWith(scene);
```

<div class="ui info message"><div class="header">Tips </div>
监听器与节点绑定后才会开始执行，它的生命周期和绑定的节点相同。监听器也可以绑定在场景上，只要不切换场景，这个监听器将一直有效。
</div>

`EMouseMsg`(鼠标消息类) 可以获取当前的鼠标消息，例如下面的代码可以在点击鼠标后，把精灵移动到鼠标点击的位置

```cpp
// 创建一个鼠标左键点击消息监听器
auto listener = new EListenerMouseClick([=](EPoint) {
    EPoint p = EMouseMsg::getPos(); // 获取鼠标当前位置
    sprite->setPos(p);              // 修改精灵坐标
});
```

`EKeyboardMsg`(键盘消息类) 可以获取当前的键盘消息，例如下面的代码可以按上下左右键移动精灵

```cpp
// 创建一个按键消息监听器
auto listener = new EListenerKeyboardPress([=]() {
    // 获取当前的按键
    EKeyboardMsg::KEY key = EKeyboardMsg::getKeyValue();
    // 对不同的按键进行处理
    if (key == EKeyboardMsg::KEY::UP) {
        sprite->movePosY(-1);   // 按上键，向上移动精灵
    }
    else if (key == EKeyboardMsg::KEY::DOWN) {
        sprite->movePosY(1);   // 按下键，向下移动精灵
    }
    else if (key == EKeyboardMsg::KEY::RIGHT) {
        sprite->movePosX(1);   // 按右键，向右移动精灵
    }
    else if (key == EKeyboardMsg::KEY::LEFT) {
        sprite->movePosX(-1);   // 按左键，向左移动精灵
    }
});
```

<div class="ui info message"><div class="header">Tips </div>
`EMsgManager`是消息管理器，它可以操纵全局的消息监听器，例如用下面的代码停止所有的鼠标和键盘消息监听器

```cpp
EMsgManager::stopAllMouseListeners();   // 停止所有鼠标消息监听器
EMsgManager::stopAllKeyboardListeners();// 停止所有键盘消息监听器
```
</div>

<br/>

## EMusicUtils 音乐工具

`EMusicUtils` 可以方便地控制游戏中的音乐，调用它的 `playMusic` 函数就可以播放音乐。

```cpp
// 播放一个音乐
EMusicUtils::playMusic(L"音乐文件名.wav");
```

`playMusic` 函数的返回值是一个整形变量，标识了这个音乐的 ID，你可以通过这个 ID 暂停它的播放。

`pauseMusic` 、 `resumeMusic` 和 `stopMusic` 分别控制音乐的暂停、继续和停止。

```cpp
// 获取播放音乐的 ID
UINT id = EMusicUtils::playMusic(L"音乐文件名.wav");
// 通过 ID 暂停这个音乐
EMusicUtils::pauseMusic(id);
```

你也可以通过传入文件名的方式暂停音乐，它们的效果是一样的

```cpp
// 暂停这个音乐
EMusicUtils::pauseMusic(L"音乐文件名.wav");
```

调用 `preloadMusic` 函数可以预加载音乐文件，在游戏开始前调用它，可以防止游戏中播放音乐时卡顿。

```cpp
// 预加载音乐
EMusicUtils::preloadMusic(L"音乐文件名.wav");
```

<br/>

## EFileUtils 文件工具

`EFileUtils`可以方便地把数据保存到本地，它支持保存`int`、`float`、`EString(字符串)`三种类型的数据。下面是一段示例代码

```cpp
// 保存数据到本地
void FileUtils::saveInt(L"data1", 2);           // 保存 int 型的值
void FileUtils::saveFloat(L"data2", 2.2f);      // 保存 float 型的值
void FileUtils::saveString(L"data3", L"test");  // 保存 字符串 型的值
```

<div class="ui warning message"><div class="header">Warning </div>
保存的数据并不是加密的。
</div>

函数的第一个参数表示这个数据的关键字，你可以根据关键字重新取出数据

```cpp
// 读取
int data1 = FileUtils::getInt(L"data1", 1);             // 获取 int 型的值
float data2 = FileUtils::getFloat(L"data2", 1);         // 获取 float 型的值
EString data3 = FileUtils::getString(L"data3", L"");    // 获取 字符串 型的值
```

函数的第二个参数指定了关键字不存在时，函数默认的返回值。

<div class="ui info message"><div class="header">Tips </div>
保存的数据不是在程序目录下，而是保存在了系统的 Appdata\Local 目录下。为了保证你的数据不被其他游戏覆盖，你应该在保存数据前设置独一无二的 `AppName`。关于 AppName 的具体用法请参考 [[关于 AppName]](/tutorial/advanced.html#关于-AppName)
</div>

<br/>
---
title: v2.0.0-beta5 更新内容简介
tags: 版本发布
button: 立即下载
button_url: '/download'
date: 2018-03-06 15:47:08
---

此次更新主要针对以下几个点：

- MusicManager（音乐播放器）存在隐患，且新手不易察觉
- 有些人 Unicode 和 ANSI 傻傻分不清楚
- 对于新手来说 Timer（定时器）的用法过于复杂
- 没有判断节点碰撞的简单方法

<!-- more -->

### 命名上的一些变化

首先要说明的是函数命名上发生了一些变化

例如，进入场景函数 `SceneManager::enterScene` 改为了 `SceneManager::enter`，改名的原因是太啰嗦，场景管理器的 enter 函数必然是进入场景，不用再加一个 Scene 后缀。

更名的函数有

- `SceneManager::enterScene` => `SceneManager::enter`
- `SceneManager::backScene` => `SceneManager::back`
- `MusicManager::add` => `MusicManager::preload`
- `Image::loadFrom` => `Image::open`
- `Text::setWordWrapping` => `Text::setWordWrappingEnable`
- `Timer::setRepeatTimes` => `Timer::setUpdateTimes`


### 音乐播放器更新

曾经的 `MusicManager` 需要用 `get` 函数获取一个 `Music` 对象的指针，这个指针可能为空指针（如果找不到那个音乐文件），这是个新手可能忽略的安全隐患。

新的 `MusicManager` 可以直接使用 `play`、`pause`、`resume`、`stop`这四个函数控制音乐的播放、暂停、继续、停止，而不需要考虑空指针的问题。如果你播放了一个不存在的音乐文件，游戏不会崩溃也不会暂停，而是在控制台输出一条警告信息。

另外，`Music` 类现在可以手动创建（上一个版本不能创建 Music 对象），不过不建议这样使用。


### 判断两节点是否碰撞的简单方法

一直以来我都忘了 1.x 中一个非常好用的函数，现在我把它重新添加了进来

`Node::isIntersectWith` 函数用来判断两个节点是否相交，也就是碰撞，这个函数返回 true 说明发生了碰撞。

```cpp
// 假设存在节点 node1 和 node2
// 判断两节点是否碰撞
if (node1->isIntersectWith(node2))
{
    // 两节点发生碰撞
}
```


### 字符串操作更新

对于现在的 String 来说，Unicode 和 ANSI 没有任何区别，这是 `String` 类的新功能~

所以下面的写法都是对的

```cpp
// ANSI 版
String str = "你好";
// Unicode 版
String str = L"你好";
String str = _T("你好");
String str = TEXT("你好");
```

如果你不考虑性能问题的话，直接使用 ANSI 字符串会非常方便（其实不会影响多少性能）

另外新的 String 可以方便地转换成整数、浮点数，例如下面的代码

```cpp
String str = "123";
int x = str.toInt();    // x 的值为 123
```

`String::toInt`、`String::toDouble`、`String::toBool`函数用于将字符串转化成不同的类型。

其他类型的值也可以使用`String::toString`非常方便地转化成字符串

```cpp
int x = 123;
String str = String::toString(x);   // 字符串的值为 "123"
```

使用 `<<` 运算符可以将任意类型的值存入字符串，如下所示

```cpp
String str;
str << "Hello " << 2017 << "!";
// 在控制台输出 str 的值，显示 "Hello 2017!"
std::cout << str;
```

上面的代码中，在将内容存入 str 的同时，自动将整型2017的值转化为了字符串。


### 定时器更新

新版本的定时器可谓是重焕新生 (>▽<)，再也不用使用什么烦人的 std::bind 函数了！例如我们想在游戏启动一段时间后在控制台输出一个 Hello，可以用下面的代码做到

```cpp
#include <easy2d.h>
#include <iostream>
using namespace std;

void Test()
{
    // 控制台输出 Hello
    cout << "Hello!" << endl;
}

int main()
{
    Game::init("Test", 300, 300);

    // 打开控制台
    Window::showConsole();
    // 2 秒后自动一次执行 Test 函数
    TimerManager::start(2, Test);

    Game::run();
    Game::uninit();
    return 0;
}
```

上面的代码运行后，程序运行后的第 2 秒会输出一个 Hello。

上面的代码中，Test函数只管输出，让 TimerManager 控制何时执行 Test 函数。`TimerManager::start` 函数需要两个参数，第一个表示等待时长，第二个表示执行的函数，比如 TimerManager::start(2, Test) 的意思就是 2 秒后自动执行一次 Test 函数。

`Timer` 定时器类可以更灵活地使用定时功能，首先你得创建一个定时器

```cpp
// 创建一个定时器，它与 Test 函数绑定了
auto timer = new Timer(Test);
```

然后该怎么做，绑定在节点上吗？还是添加到 TimerManager 中？

这都是曾经的用法了，现在的 Timer 只需要 start（启动）

```cpp
// 启动定时器
timer->start();
```

然后这个定时器将会疯狂输出 "Hello"。

如果 Test 函数是类的成员函数，那么定时器需要函数名和对象指针。

```cpp
class Test
{
public:
    void test()
    {
        cout << "Hello!" << endl;
    }
};

/* 如果想让定时器执行 Test::test 函数，应使用下面的写法 */
// 创建一个 Test 对象
auto t = new Test();
// 创建定时器的函数（回调函数）
TimerCallback tcb = CreateCallback(t, Test::test);
// 创建定时器
auto timer = new Timer();
// 启动定时器
timer->start();
```

其中 CreateCallback(t, Test::test) 的意思是，创建一个定时器的执行函数，它让 t 对象执行 test 函数。

有关定时器的更多用法请看 [入门教程-定时器](/tutorial/tools.html#Timer-定时器类)

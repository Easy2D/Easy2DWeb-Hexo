---
title: 入门教程
subtitle: [进阶内容]
icon: idea
toc: true
type: "tutorial"
---

## 在 Win32 程序下使用 Easy2D

引擎在 Win32 应用程序和 Win32 控制台程序下的代码是一样的，只是两种模式下主函数的写法不同。

写控制台程序时，只需声明 main 函数就可以：

```cpp
int main()
{
	return 0;
}
```

写 Win32 程序时，主函数变得有些复杂，但我们可以把它和控制台下的 main 函数一样使用：

```cpp
int WINAPI WinMain(
	HINSTANCE hInstance, 
	HINSTANCE hPrevInstance, 
	LPSTR lpCmdLine, 
	int nCmdShow
)
{
	return 0;
}
```

虽然引擎支持在控制台程序下工作，但是**不推荐**这样使用，因为游戏并不需要控制台。

<br />

## 关于控制台的使用

控制台可以帮助你更轻松地进行 DEBUG，无论是 Win32 应用程序还是 Win32 控制台程序，你都可以调用`Logger::showConsole`函数来开启或关闭控制台。

```cpp
// 开启控制台
Logger::showConsole(true);
```

有些时候，你的错误代码导致游戏异常崩溃，就可以在 Debug 模式下开启控制台，查看引擎给出的提示和建议。Debug 下引擎会把大部分错误给出提示。

比如，当你写下了如下代码时

```cpp
auto node1 = gcnew Node;
auto node2 = gcnew Node;
node1->addChild(node2);
node2->addChild(node1);
```

一个节点不可能同时是另一个节点的子节点和父节点，所以这段代码有一个隐蔽的逻辑错误，这时引擎将自动触发断点

![触发了断点](/assets/images/tutorial/console1.png)

同时控制台中会给出具体的提示

![控制台中的提示](/assets/images/tutorial/console2.png)

有些时候错误并不导致程序崩溃，引擎可以自动处理这些错误，然后在控制台中给出警告。比如当你给精灵设置了一张不存在的图片时，游戏仍然能正常开始，但是控制台中显示了警告

![控制台中的警告](/assets/images/tutorial/console3.png)

<br />

## 关于回调函数

引擎中许多地方都要用到`回调函数(CallFunc)`，按下按钮要调用回调函数，定时器每过一段时间也会调用一次回调函数。请自行查阅相关资料了解回调函数、std::function 和 std::bind。

引擎推荐使用 `Lambda` 函数作为回调函数。Lambda 是一种匿名函数，你可以像创建一个对象一样创建它

```cpp
// 创建一个 Lambda 函数
auto callback = []() {};
```

虽然这个写法看起来很奇怪，但是使用后就会发现它特别灵活。例如，你可以创建一个回调函数，在函数中停止游戏：

```cpp
// 创建一个 Lambda 函数，执行函数后退出游戏
auto callback = []() { Game::quit(); };
```

然后把这个回调函数传给按钮，就可以实现点击按钮退出游戏

```cpp
// 创建一个按钮
auto button = gcnew Button;
// 把回调函数传给按钮，实现点击按钮退出游戏
button->setCallback(callback);
```

善用 Lambda 函数可以降低代码的阅读难度，提高编码速度。关于 Lambda 更多的内容请自行查阅相关资料。

<br/>

## 关于AppName

`AppName` 是你游戏的唯一标识，它的默认值和你的窗口名称相同，用于区别其他人做的同类游戏。

比如，你做了 “推箱子” 这个游戏而没有设置 AppName 的话，其他人的推箱子游戏就有可能覆盖你保存的游戏数据。

`Game::init` 函数的第一个参数用于设置游戏的 AppName（所以它只能被设置一次），推荐使用 作者名 + 游戏名 的方式命名

```cpp
// 设置游戏的 AppName 为 my-pushbox
Game::init(L"my-pushbox", 640, 480);
// 此时窗口名也为 my-pushbox，需要手动修改窗口标题
Window::setTitle(L"My Game");
```

<div class="ui warning message"><div class="header">Warning </div>
不要在 AppName 中设置特殊字符，也尽量不使用中文，防止字符集问题导致错误。
</div>

<br/>

## 关于垃圾回收

C++ 中使用 `new` 运算符创建的对象需要使用 `delete` 释放，否则会造成内存泄漏。引擎中使用了大量的指针，如果不妥善处理它们，程序占用的内存将成倍的增长。

Easy2D 提供了 `gcnew` 来代替 `new`，使用 `gcnew` 创建的对象将被 `垃圾回收器(GC)` 跟踪，当这个对象不再被需要时，GC 会自动 delete 它。

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

<br/>


## 关于场景

Easy2D 可以灵活使用，但是建议你为每个场景都新建一个类，并继承`Scene`。

例如下面的 Test 场景：

```cpp
// TestScene.h
#pragma once
#include <easy2d/easy2d.h>

using namespace easy2d;

class TestScene : public Scene
{
public:
	TestScene();
}
```

```cpp
// TestScene.cpp
#include "TestScene.h"

TestScene::TestScene()
{
	// 在构造函数中初始化场景
}
```

需要使用这个场景时，在代码开头引入 `TestScene.h` 头文件

```cpp
#include "TestScene.h"

// 在合适的地方调用下面的代码进入 TestScene
auto scene = gcnew TestScene;
SceneManager::enter(scene);
```

这样使每个场景相对独立，不仅让代码更清晰，而且可以方便进行场景之间的切换。

<br/>

## 关于游戏暂停

调用 `Game::pause` 和 `Game::resume` 函数可以控制游戏的暂停和继续，暂停后动画、定时器将全部停止工作，只有按钮正常运行，所以你可以在按钮的回调函数中控制游戏暂停。

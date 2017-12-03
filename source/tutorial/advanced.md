---
title: 入门教程
subtitle: 进阶内容
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

## 自定义窗口样式

`EWindowStyle` 结构体保存了窗口的相关属性，在初始化 EApp 时传入它可以自定义窗口样式。

EWindowStyle 结构体的完整定义为

```cpp
struct EWindowStyle
{
	LPCTSTR m_pIconID;	/* 程序图标 ID */
	bool m_bNoClose;	/* 禁用关闭按钮 */
	bool m_bNoMiniSize;	/* 禁用最小化按钮 */
	bool m_bTopMost;	/* 窗口置顶 */
}
```

例如，你可以用下面的代码设置程序的图标

```cpp
EApp app;

// 创建一个窗口样式结构体
EWindowStyle wStyle;
// 设置程序图标
wStyle.m_pIconID = MAKEINTRESOURCE(IDR_PNG);

// 初始化 EApp
if (!app.init(L"Test", 640, 480, wStyle)) {
	return -1;
}
```

<div class="ui info message"><div class="header">Tips </div>
`MAKEINTRESOURCE` 是一个资源名转换的宏，它在 `winuser.h` 头文件中声明，具体使用方法请查阅相关资料。
</div>

<br />

## EApp 和管理器的使用方法

`EApp` 类在每个程序中只能被创建一次，它在调用 `init` 函数后被初始化，并在程序结束时销毁。

EApp 的大部分函数都是静态函数，初始化 EApp 后，你可以在程序的任意地方获取和修改它的属性。例如，下面的代码可以在点击按钮后切换到一个新场景

```cpp
// 创建一个精灵
auto btnNormal = new ESprite(L"按钮图片.png");
// 创建一个按钮
auto button = new EButton(btnNormal, []() {
	// 创建一个场景
	auto scene = new EScene();
	// 调用 EApp 的静态函数，切换场景
	EApp::enterScene(scene);
});
```

EApp 还可以完成更多的事情，比如让游戏暂停或者退出游戏

```cpp
// 创建一个文本
auto btnNormal = new EText(L"退出");
// 创建一个按钮
auto button = new EButton(btnNormal, []() {
	// 调用 EApp 的静态函数，结束游戏
	EApp::quit();
});
```

另一个例子，在定时器的回调函数中获取游戏运行的时长，并显示出来

```cpp
// 创建一个文本，用来显示时长
auto timeText = new EText();
// 创建一个定时器
auto timer = new ETimer([=](int) {
	// 获取游戏运行了多久，单位是毫秒
	int duration = EApp::getTotalDurationFromStart();
	// 显示时长
	timeText->setText(std::to_wstring(duration));
});
```

另外，为了方便管理定时器、监听器和动画，引擎设计了相应的管理器：`ETimerManager`(定时器管理器)、`EMsgManager`(消息管理器)、`EActionManager`(动画管理器)、`EPhysicsManager`(物理消息管理器)，它们可以直接控制定时器、监听器的启动和暂停

下面是几个例子

```cpp
// 使用 EMsgManager 停止所有鼠标消息监听器
EMsgManager::stopAllMouseListeners();
// 使用 ETimerManager 停止所有名称为 "timer" 的定时器
ETimerManager::stopTimers(L"timer");
// 使用 EActionManager 停止所有绑定在 sprite 上的动画
EActionManager::stopAllActionsBindedWith(sprite);
```

<br />

## 关于控制台的使用

控制台可以帮助你更轻松地进行 DEBUG，无论是 Win32 应用程序还是 Win32 控制台程序，你都可以调用`EApp::showConsole`函数来开启或关闭控制台。

```cpp
EApp app;
// 开启控制台
app.showConsole(true);
```

它是一个静态函数，所以你可以在任何时候，比如按下某个按钮时，打开控制台

```cpp
// 点击按钮回调函数
auto callback = []() {
	EApp::showConsole(true);
};
// 设置按钮回调函数
button->setCallback(callback);
```

有些时候，如果你错误地使用了引擎导致游戏异常崩溃，就可以在 Debug 下开启控制台，查看引擎给出的提示和建议。Debug 下引擎会把大部分错误给出提示。

比如，当你写下了如下代码时

```cpp
auto node1 = new ENode();
auto node2 = new ENode();
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

引擎中许多地方都要用到`回调函数(Callback)`，按下按钮要调用回调函数，定时器每过一段时间也会调用一次回调函数。请自行查阅相关资料了解回调函数的具体含义。

引擎推荐使用 `Lambda` 函数作为回调函数。Lambda 是一种匿名函数，你可以像创建一个对象一样创建它

```cpp
// 创建一个 Lambda 函数
auto callback = []() {};
```

虽然这个写法看起来很奇怪，但是使用后就会发现它特别灵活。例如，你可以创建一个回调函数，在函数中停止游戏：

```cpp
// 创建一个 Lambda 函数，执行函数后退出游戏
auto callback = []() { EApp::quit(); };
```

然后把这个回调函数传给按钮，就可以实现点击按钮退出游戏

```cpp
// 创建一个按钮
auto button = new EButton();
// 把回调函数传给按钮，实现点击按钮退出游戏
button->setCallback(callback);
```

不同的地方需要的回调函数类型也不一样，例如，定时器需要回调函数中有一个 int 型参数，这个参数表示定时器执行的次数（关于定时器的使用方法请参考 [ETimer 定时器类](/tutorial/tools.html#ETimer-定时器类)）

```cpp
// 创建一个定时器回调函数
auto timerCallback = [](int times) {};
```

另一个常见的例子是，鼠标左键的点击监听器的回调函数需要一个 EPoint 类型的参数，这个参数表示鼠标点击位置的坐标

```cpp
// 创建一个鼠标左键的点击监听器的回调函数
auto listenerCallback = [](EPoint p) {};
```

善用 Lambda 函数可以降低代码的阅读难度，提高编码速度。关于 Lambda 更多的内容请自行查阅相关资料。

<br/>

## 关于对象释放池

C++ 中使用 `new` 操作符创建的对象需要使用 `delete` 释放，否则会造成内存泄漏。引擎中使用了大量的指针，如果不妥善处理它们，程序占用的内存将成倍的增长。

引擎中所有的对象都会被自动加入到`EObjectManager`(对象释放池) 中进行统一管理，它的实现方式类似于智能指针。每个对象都有引用计数，当一个对象被使用时，它的引用计数加一，不再使用时，它的引用计数减一。对象释放池会自动释放引用计数小于等于 0 的对象，所以你不需要考虑内存泄漏的问题。

这也将导致一个问题，如果你想提前创建一个对象，在未来的某个时候使用，也许它已经被自动释放了。要避免这种情况发生，你可以手动调用`retain`函数，把它的引用计数加一，这样对象释放池就会保留这个对象。然后在你确认不再需要这个对象时，调用`release`函数，把它的引用计数减一。

<br/>

## 关于 AppName

`AppName` 是你游戏的唯一标识，它的默认值和你的窗口名称相同，用于区别其他人做的同类游戏。比如，你做了 “推箱子” 这个游戏而没有设置 AppName 的话，其他人的推箱子游戏就有可能覆盖你保存的游戏数据。

调用 `EApp::setAppName` 函数可以设置游戏的 AppName，你可以使用 作者名 + 游戏名 的方式命名

```cpp
// 设置游戏的 AppName
EApp::setAppName(L"easy2d-game");
```

<div class="ui warning message"><div class="header">Warning </div>
不要在 AppName 中设置特殊字符，也尽量不使用中文，防止字符集问题导致错误。
</div>

<br/>

## 关于几何体和物体冲突

`EGeometry`类表示几何图形，常用的形状有`ECircle(圆形)`、`ERectangle(矩形)`、`EEllipse(椭圆)`，为节点添加形状后，可以接收到节点之间的冲突消息。

例如，用下面的代码为精灵添加矩形形状。形状会自动跟随精灵一起进行移动、旋转、缩放等操作。

```cpp
// 创建一个矩形
auto rect = new ERectangle(0, 0, 10, 10);
// 为精灵添加形状
sprite->setGeometry(rect);
```

也可以直接为精灵量身创建一个形状

```cpp
// 为 sprite 量身创建一个矩形形状
auto rect = new ERectangle(sprite);
// 为 sprite 量身创建一个圆形形状
auto circle = new ECircle(sprite);
```

<div class="ui info message"><div class="header">Tips </div>
EGeometry 只是描述了节点的形状，一般情况下它是不可见的。调试时，你可以调用 EScene 的 `setGeometryVisiable` 函数让这个场景中的形状可见，同时使用 EGeometry 的 `setColor` 函数修改它的显示颜色。
</div>

节点之间冲突消息的产生由形状的`CategoryBitmask(类别掩码)`和`CollisionBitmask(冲突掩码)`控制，这两个掩码都是 32 位的无符号整形数。一个物体的冲突掩码和另一个物体的类别掩码做逻辑 **与** 运算，结果不为 0，说明第一个物体与第二个物体是冲突物体，它们产生碰撞时，第一个物体为主动方，第二个物体为被动方。

例如下面两个形状是相互冲突的

```cpp
// 假设已存在 rect1 和 rect2 两个矩形
rect1->setCategoryBitmask(0x0001);	// 设置 rect1 的类别掩码
rect1->setContactBitmask(0x0010);	// 设置 rect1 的冲突掩码

rect2->setCategoryBitmask(0x0010);	// 设置 rect2 的类别掩码
rect2->setContactBitmask(0x0001);	// 设置 rect2 的冲突掩码
```

如果只设置 rect1 的类别掩码和 rect2 的冲突掩码，那么 rect2 可以主动碰撞 rect1，但 rect1 不会主动碰撞 rect2。

<div class="ui info message"><div class="header">Tips </div>
如果一个形状的类别掩码设置为 0xffff，则它可以被所有形状碰撞。如果一个形状的冲突掩码设置为 0xffff，则它可以主动碰撞所有图形。
</div>

`EListenerPhysicsCollision`(冲突消息监听器) 可以监听冲突消息的产生，使用`EPhysicsMsg`类可以获取到当前冲突消息的详细信息，比如主动方、被动方、和冲突类型。

```cpp
// 创建冲突消息监听器的回调函数
auto callback = []() {
	// 获取被动方的节点
	auto passive = EPhysicsMsg::getPassiveGeometry()->getParentNode();
	// 让被动方消失
	passive->setVisiable(false);
};
// 创建冲突消息监听器
auto listener = new EListenerPhysicsCollision(callback);
// 把监听器绑定在场景上
listener->bindWith(scene);
```

<br/>


## 关于场景

Easy2D 建议为每个场景都新建一个类，并继承`EScene`。

例如下面的测试场景：

```cpp
// TestScene.h
#pragma once
#include <easy2d.h>

class TestScene : public EScene
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
auto scene = new TestScene();
EApp::enterScene(scene);
```

这样使每个场景相对独立，不仅让代码更清晰，而且可以方便进行场景之间的切换。

<br/>

## 关于游戏暂停

调用 EApp 的 `pause` 和 `resume` 函数可以控制游戏的暂停和继续，暂停后动画、定时器、监听器将全部停止工作，只有按钮正常运行，所以你可以在按钮的回调函数中控制游戏暂停。

实现按键控制游戏暂停也很简单，只需要创建一个游戏暂停时仍继续工作的按键监听器。下面的代码将实现按 P 键暂停和继续。

```cpp
// 创建按键后的回调函数
auto callback = []() {
	// 判断按键是否是 P 键
	if (EKeyboardMsg::getKeyValue() == EKeyboardMsg::KEY::P) {
		// 判断游戏是否暂停
		if (EApp::isPaused()) {
			EApp::resume();	// 游戏暂停时，继续游戏
		}
		else {
			EApp::pause();	// 游戏未暂停时，暂停游戏
		}
	}
};
// 创建按键监听器
auto listener = new EListenerKeyboardPress();
// 设置监听器的回调函数
listener->setCallback(callback);
// 设置监听器在游戏暂停时继续工作
listener->setAlwaysWorking(true);
// 把监听器绑定在场景上
listener->bindWith(scene);
```

另外，窗口失去焦点时，游戏会自动暂停，窗口获取焦点时，游戏会自动继续。

你可以重写 EScene 的 `onActivate` 和 `onInactive` 函数，控制引擎是否执行自动暂停功能。

```cpp
// TestScene.h
#pragma once
#include <easy2d.h>

class TestScene : public EScene
{
public:
	TestScene();
	// 重写下面这两个函数
	bool onActivate() override;
	bool onInactive() override;
}
```

```cpp
// TestScene.cpp
#include "TestScene.h"

TestScene::TestScene()
{
}

bool TestScene::onActivate()
{
	// 直接返回 false，游戏将不会在窗口获取焦点时自动继续游戏
	// 你可以在这里设置窗口获取焦点时应该怎么做
	return false;
}

bool TestScene::onInactive()
{
	// 直接返回 false，游戏将不会在窗口失去焦点时自动暂停
	// 你可以在这里设置窗口失去焦点时应该怎么做
	return false;
}
```

<br/>

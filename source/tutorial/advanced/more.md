---
title: 入门教程
subtitle: [ [进阶内容, /tutorial/advanced/], 更多]
icon: idea
type: "tutorial"
toclinker: 
    [
        [节点碰撞,/tutorial/advanced/collision.html],
        [垃圾回收,/tutorial/advanced/gc.html],
        [关于控制台,/tutorial/advanced/console.html],
        [更多,/tutorial/advanced/more.html]
    ]
---

## 关于命名

Easy2D 按照以下规律命名函数：

- 小驼峰式命名法则，第一个单词小写，后面的单词首字母大写，如`Window::setTitle`
- 所有函数均按照`动词`+`名语`形式命名，如`Logger::showConsole`
- 获取对象的属性值：`get`+`属性名`，如`Node::getWidth`
- 修改对象的属性值：`set`+`属性名`，如`Node::setPos`
- 获取对象的状态(bool值)：`is`+`状态名`，如`Node::isVisiable`

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

## 关于游戏暂停

调用 `Game::pause` 和 `Game::resume` 函数可以控制游戏的暂停和继续，暂停后动画、定时器将全部停止工作，只有按钮正常运行，所以你可以在按钮的回调函数中控制游戏暂停。
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

## 关于VS资源

:( 这个部分正在建设...

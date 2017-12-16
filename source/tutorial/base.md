---
title: 入门教程
subtitle: 基础内容
icon: idea
toc: true
type: "tutorial"
---

## 第一个程序

设计游戏前，我们需要在代码的开头初始化 Easy2D 的工作环境，并创建一个窗口。

`EApp` 是 Easy2D 的核心类，它可以控制和获取游戏窗口的许多属性。例如，你可以新建一个 Win32 控制台程序，然后用下面的代码进行初始化。

```cpp
#include <easy2d.h>

int main()
{
	// 初始化一个标题为 Hello，大小为 640*480 的窗口
	EApp::init(_T("Hello"), 640, 480);

	return 0;
}
```
<div class="ui warning message"><div class="header">Warning </div>
初始化的过程有可能失败，比如当你传入了不适当的参数时，这个函数将返回 false。
只有当这个函数调用成功时才能进行下一步动作，所以一般来说，你应该这样使用 init 函数
```cpp
if (!EApp::init(_T("Hello"), 640, 480)) 
	return -1;	// 初始化失败时，退出游戏
```
</div>

但是即使初始化成功，这个窗口也不会显示，因为游戏还**没有开始**，游戏的开始是建立在`场景(EScene)`上的，一个场景代表游戏中的一个界面。你可以像下面的代码一样，直接用 new 运算符去创建一个场景

```cpp
// 创建一个空场景
auto scene = new EScene();
```

`EApp`类通过`enterScene`(进入新场景) 和`backScene`(返回上一场景) 函数控制场景之间的切换。它们和`init`函数一样都是静态函数，所以你可以直接调用它们。进入刚刚创建的场景，我们就可以开始游戏了！

```cpp
// 进入刚刚创建的场景
EApp::enterScene(scene);
// 开始游戏
EApp::run();
```

一般的，程序都应该以 `EApp::init` 开始，并以 `EApp::run` 函数结束。

下面是最简单的 Demo 代码：

```cpp
#include <easy2d.h>

int main()
{
	/* 初始化 */
	if (!EApp::init(_T("Hello"), 640, 480)) return -1;

	/* 设计游戏 */
	auto scene = new EScene();	// 创建一个空场景
	EApp::enterScene(scene);	// 进入刚刚创建的场景

	/* 开始游戏 */
	return EApp::run();		// 开始游戏
}
```

<br/>

## 场景和节点

`EScene(场景)`代表游戏中的一个界面，你的游戏可以有类似主菜单、游戏界面、结束界面等多个场景。你可以直接用 new 运算符创建场景：

```cpp
auto scene = new EScene();	// 创建一个空场景
```

场景中所有的元素都被称为`ENode(节点)`，比如场景中的一个按钮，或者一张图片，它们都是节点的一种。Easy2D 提供了许多游戏之中常用的节点，比如`EText(文本)`、`ESprite(精灵)`、`EButton(按钮)`等等，你可以像创建场景一样，直接用 new 运算符创建它们：

```cpp
auto text = new EText();     // 创建一个文本节点
auto sprite = new ESprite(); // 创建一个精灵节点
```

节点被创建后不会直接显示在屏幕上，你需要将它们加入到场景中，然后进入这个场景，它们才会出现在屏幕上。

```cpp
scene->add(text);         // 将节点加入到场景中
scene->add(sprite);       // 将节点加入到场景中
EApp::enterScene(scene);  // 进入场景
```

<br/>

## 坐标系和节点坐标

Easy2D 使用左手坐标空间，坐标系原点在屏幕的左上角，x轴向右为正，y轴向下为正。

为了研究 Easy2D 的坐标系，我们将一张图片复制到工程目录下，并把它转化为`精灵(ESprite)`。

<div class="ui info message"><div class="header">Tips </div>
精灵代表了一张图片，你可以随意的对它进行位移、缩放、旋转等操作。
</div>

```cpp
// 创建一个场景
auto scene = new EScene();
// 创建一个精灵
auto sprite = new ESprite(L"图片名.png");
// 把精灵添加到场景中
scene->add(sprite);
```

我们可以看到屏幕上显示了这张图片，如下图所示

![场景示例](/assets/images/tutorial/pivot3.png)

节点的`Pivot`(中心点) 是一个重要属性，它相当于节点的 “把手”，有了中心点，你就可以 “抓着” 它移动这个节点，或者旋转它。

中心点一定在节点的内部，它的取值范围是 [0, 1]，中心点设置为（0, 0）代表节点的中心点在它的左上角，（1, 1）代表原点在它的右下角，（0.5, 1）代表原点在它的底部的中心位置。

例如，下图是一个精灵在中心点分别为 (0.5, 0.5) 和 (0, 0) 时进行旋转得到的结果：

![旋转示意图](/assets/images/tutorial/pivot2.png)

<div class="ui info message"><div class="header">Tips </div>
节点的默认中心点位置为（0, 0），也就是它的左上角。
</div>

我们用下面的代码把刚才创建的精灵中心点设为 (0.5, 0.5) 进行测试

```cpp
sprite->setPivot(0.5f, 0.5f);
```

运行结果如下图所示，可以看到精灵的一部分被遮住了

![修改了中心点后的精灵](/assets/images/tutorial/pivot1.png)

这是因为引擎以 “精灵中心点的坐标为(0, 0)” 的方式显示了它。

节点的`Position`(坐标) 表示**它的中心点**与它的**父节点的中心点**之间的距离。

<div class="ui info message"><div class="header">Tips </div>
例如，父节点坐标为 (10, 10)，中心点为 (0.5, 0.5)，其子节点坐标为 (15, 15)，中心点为 (0, 0)。则实际显示时，子节点的**左上角**在屏幕上的位置是 (20, 20)。
</div>

现在我们想看到精灵的全貌，可以把精灵向右下方移动宽度和高度的一半，这样整个精灵就显示在屏幕中了

```cpp
// 获取精灵的宽度
float width = sprite->getWidth();
// 获取精灵高度
float height = sprite->getHeight();
// 移动精灵的位置
sprite->setPos(width / 2, height / 2);
```

节点的中心点为它的正中心时，可以方便把它在屏幕居中，下面我们把精灵在屏幕中居中试试看：

```cpp
// 获取窗口宽度
float width = EApp::getWidth();
// 获取窗口高度
float height = EApp::getHeight();
// 设置精灵的中心点为正中心
sprite->setPivot(0.5f, 0.5f);
// 移动精灵到屏幕中央
sprite->setPos(width / 2, height / 2);
```

运行后的效果如下图：

![精灵居中显示](/assets/images/tutorial/pivot4.png)

<br/>

## 关于命名

Easy2D 按照以下规律命名类：

- 所有类名都以字母`E`开头。如`EApp`和`EScene`
- 相关的派生类都以基类的类名开头。如`EListener`的派生类`EListenerMouseClick`

<br/>

Easy2D 按照以下规律命名函数：

- 所有函数都以小写字母开头，用大写字母区分后面的单词。如`EApp::showConsole`
- 所有函数均按照`动词`+`名语`形式命名。如`ENode::addChild`和`EMusicUtils::playMusic`
- 获取对象的属性值：`get`+`属性名`。如`ESprite::getWidth`
- 修改对象的属性值：`set`+`属性名`。如`EText::setText`
- 获取对象的状态(bool值)：`is`+`状态名`。如`EApp::isPaused`

<br/>

---
title: 入门教程
subtitle: 基础内容
icon: idea
toc: true
type: "tutorial"
---

## 第一个程序

设计游戏前，我们需要在代码的开头初始化引擎，然后创建一个窗口。

`EApp`是引擎的基础类，它在一个程序中只能被创建一次，用于控制和获取窗口的所有属性。例如，你可以新建一个 Win32 控制台程序，然后用下面的代码对 EApp 进行初始化。

```cpp
#include <easy2d.h>

int main()
{
	EApp app;

	// 初始化一个标题为 Hello，大小为 640*480 的窗口
	if (!app.init(_T("Hello"), 640, 480)) {
		// 初始化失败时，退出游戏
		return 0;
	}

	return 0;
}
```
<div class="ui warning message"><div class="header">Warning </div>
初始化的过程有可能失败，如果你传入了不适当的参数，这个函数将返回 false。
只有当这个函数调用成功时，才能进行下一步动作。
</div>

但是即使初始化成功，这个窗口也不会显示，因为游戏还**没有开始**。

游戏的开始是建立在`场景(EScene)`上的，一个场景代表游戏中的一个界面，你的游戏可以有类似主菜单、游戏界面、结束界面等多个场景。

```cpp
// 创建一个空场景
auto scene = new EScene();
```

`EApp`类通过`enterScene`(进入新场景) 和`backScene`(返回上一场景) 函数控制场景之间的切换。进入刚刚创建的场景，我们就可以开始游戏了！

```cpp
// 进入刚刚创建的场景
app.enterScene(scene);
// 开始游戏
app.run();
```

此时主函数中的代码看起来应是这样的：

```cpp
EApp app;

// 初始化一个标题为 Hello，大小为 640*480 的窗口
if (!app.init(_T("Hello"), 640, 480)) {
	// 初始化失败时，退出游戏
	return 0;
}

// 创建一个空场景
auto scene = new EScene();

// 进入刚刚创建的场景
app.enterScene(scene);
// 开始游戏
app.run();

return 0;
```

<br/>

## 场景和节点

Easy2D 使用树状模型，游戏中所有可以显示出来的元素都被称之为`ENode(节点)`。
每个节点有自己特定的属性，并允许向其中添加任意数量的子节点。Easy2D 提供了许多游戏之中常用的元素，比如`EText(文本)`、`ESprite(精灵)`、`EButton(按钮)`等等，它们都是节点的一种。

控制根节点的类被称为`EScene(场景)`，它有一个默认的根节点，使用它的`add`函数可以给场景添加子节点，添加到场景下的节点将被显示在屏幕上。

下面的示意图解释了场景和节点的关系：

![场景和节点的关系](/assets/images/tutorial/scene.png)

<div class="ui info message"><div class="header">Tips </div>
子节点的所有属性都是相对于父节点的。例如，父节点的旋转角度为 15 度，其子节点的旋转角度也为 15 度，则实际显示时，父节点旋转了 15 度，而子节点先围绕父节点旋转 15 度后，再自身旋转 15 度。
</div>

<br/>

## 坐标系

Easy2D 使用左手坐标空间，坐标系原点在屏幕的左上角，x轴向右为正，y轴向下为正。

为了研究 Easy2D 的坐标系，我们将一张图片复制到工程目录下，并把它转化为`精灵(ESprite)`。

<div class="ui info message"><div class="header">Tips </div>
精灵是引擎中最常用的类之一，你可以随意的让它进行位移、缩放、透明度渐变等动画。
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

![运行后截图](/assets/images/tutorial/pivot3.png)

## 节点中心点和坐标

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

![运行后截图](/assets/images/tutorial/pivot1.png)

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

![精灵居中](/assets/images/tutorial/pivot4.png)

<br/>

## 关于命名

Easy2D 按照以下规律命名类：

- 所有类名都以字母`E`开头。如`EApp`和`EScene`
- 相关的派生类都以基类的类名开头。如`EListener`的派生类`EListenerMouseClick`

<br/>

Easy2D 按照以下规律命名函数：

- 所有函数都以小写字母开头，用大写字母区分后面的单词。如`EApp::showConsole`
- 所有函数均按照`动词`+`名语`形式命名。如`ENode::addChild`和`MusicUtils::playMusic`
- 获取对象的属性值：`get`+`属性名`。如`ESprite::getWidth`
- 修改对象的属性值：`set`+`属性名`。如`EText::setText`
- 获取对象的状态(bool值)：`is`+`状态名`。如`EApp::isPaused`

<br/>

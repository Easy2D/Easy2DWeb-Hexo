---
title: 入门教程
subtitle: [ [快速上手篇,/tutorial/demo/], 移动的小人]
icon: idea
toc: true
type: "tutorial"
---

## 准备

学会了 Easy2D 的基本操作之后，我们来制作一个简单的小程序，按上下左右键移动画面中的小人。

先准备一张人物的图片，将它拷贝到工程目录下，重命名为 man.png。

![准备图片](/assets/images/tutorial/demo/moving-man/1.png)

在 VS 中写好我们基础篇里学习的基本代码，运行后显示一个 640*480 大小的窗口。

```cpp
#include <easy2d.h>

int main()
{
	if (Game::init(L"Demo:Moving Man", 640, 480))
	{
		/* 设计游戏内容 */

		Game::run();
	}
	Game::uninit();
	return 0;
}
```

## 创建 Man 类

在代码第 2 行插入一个新的类，取名为 Man，继承 Sprite 类。

```cpp
class Man : public Sprite
{
public:
    Man() {}
};
```

在 Man 的构造函数中调用父类的构造函数，将图片的文件名 “man.png” 传给 Sprite。

```cpp
class Man : public Sprite
{
public:
    Man() : Sprite(L"man.png")
    {
        // Man 的构造函数
    }
};
```

在**设计游戏内容**的部分，创建一个场景和一个 Man 对象，然后将 Man 的对象添加到场景中。

添加后的完整代码如下所示

```cpp
#include <easy2d.h>

class Man : public Sprite
{
public:
    Man() : Sprite(L"man.png")
    {
        // Man 的构造函数
    }
};

int main()
{
	if (Game::init(L"Demo:Moving Man", 640, 480))
	{
		// 创建场景
		auto scene = new Scene();
		// 进入该场景
		SceneManager::enterScene(scene);

		// 创建一个 Man 对象
		auto hero = new Man();
		// 将 Man 添加到场景中
		scene->add(hero);

		Game::run();
	}
	Game::uninit();
	return 0;
}
```

运行后，程序将显示一个人物图片。

我们用基础篇学过的方法，把居中的代码写在 Man 的构造函数中，让 Man 在屏幕上居中显示。

```cpp
class Man : public Sprite
{
public:
    Man() : Sprite(L"man.png")
    {
        // 居中显示在屏幕上
        this->setPivot(0.5, 0.5);
        this->setPos(Window::getWidth() / 2, Window::getHeight() / 2);
    }
};
```

运行后的效果如下图所示

![准备图片](/assets/images/tutorial/demo/moving-man/2.png)

## 实现移动

给 Man 类添加一个名称为 `onUpdate` 的函数，返回值类型为 void，参数为空

```cpp
class Man : public Sprite
{
public:
    Man() : Sprite(L"man.png")
    {
        // 居中显示在屏幕上
        this->setPivot(0.5, 0.5);
        this->setPos(Window::getWidth() / 2, Window::getHeight() / 2);
    }

    void onUpdate()
    {
        // onUpdate 函数
    }
};
```

onUpdate 是一个特殊的函数，它在每一帧画面刷新前被 Easy2D 自动调用，所以这个函数在一秒钟里会被调用 60 次左右。我们可以在这个函数里判断有没有按键按下。

`Input` 类用来获取用户的输入，`Input::isKeyDown` 函数用来判断一个键是否正被按下，这个函数需要一个 int 类型的参数，这个参数代表键盘上的一个键。

`KeyCode` 类枚举了常用按键的键值，例如 `KeyCode::UP` 代表上键。你可以用下面的代码判断上键是否被按下：

```cpp
void onUpdate()
{
    if (Input::isKeyDown(KeyCode::UP))
    {
        // 上键被按下
    }
    else
    {
        // 上键没被按下
    }
}
```

上键被按下时，我们先获取 Man 当前的 Y 坐标，然后重新设置它的 Y 坐标为当前值减 2，这样就实现了按上键向上移动的功能。

```cpp
void onUpdate()
{
    if (Input::isKeyDown(KeyCode::UP))
    {
        // 获取当前 Y 坐标
        float y = this->getPosY();
        // 重新设置它的坐标
        this->setPosY(y - 2);
    }
}
```

Node 类的 `Node::movePos` 函数可以直接移动节点，所以上面的代码可以简写成

```cpp
void onUpdate()
{
    if (Input::isKeyDown(KeyCode::UP))
    {
        // Man 的 Y 坐标减少 2
        this->movePosY(-2);
    }
}
```

同理，可以将其他三个按键的判断也加入到 onUpdate 函数中

```cpp
void onUpdate()
{
    if (Input::isKeyDown(KeyCode::UP))
    {
        // Man 的 Y 坐标减少 2
        this->movePosY(-2);
    }

    if (Input::isKeyDown(KeyCode::DOWN))
    {
        // Man 的 Y 坐标增加 2
        this->movePosY(2);
    }

    if (Input::isKeyDown(KeyCode::LEFT))
    {
        // Man 的 X 坐标减少 2
        this->movePosX(-2);
    }

    if (Input::isKeyDown(KeyCode::RIGHT))
    {
        // Man 的 X 坐标增加 2
        this->movePosX(2);
    }
}
```

一般的游戏中，上键和下键，左键和右键，是不能同时生效的，否则的话同时按住上键和下键人物就不动了，所以我们修改代码如下：

```cpp
void onUpdate()
{
    if (Input::isKeyDown(KeyCode::UP))
    {
        // Man 的 Y 坐标减少 2
        this->movePosY(-2);
    }
    else if (Input::isKeyDown(KeyCode::DOWN))
    {
        // Man 的 Y 坐标增加 2
        this->movePosY(2);
    }

    if (Input::isKeyDown(KeyCode::LEFT))
    {
        // Man 的 X 坐标减少 2
        this->movePosX(-2);
    }
    else if (Input::isKeyDown(KeyCode::RIGHT))
    {
        // Man 的 X 坐标增加 2
        this->movePosX(2);
    }
}
```

运行游戏，一个按上下左右移动的小人就完成了！
---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Button按钮]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点,/tutorial/node/node.html],
        [Text 文本,/tutorial/node/text.html],
        [Sprite 精灵,/tutorial/node/sprite.html],
        [Button 按钮,/tutorial/node/button.html],
        [ToggleButton 开关按钮,/tutorial/node/togglebutton.html],
        [Menu 菜单,/tutorial/node/menu.html],
        [Shape 形状,/tutorial/node/shape.html],
        [Canvas 画布,/tutorial/node/canvas.html]
    ]
---
## Button 按钮

原 `Button` 类已弃用，下面介绍按钮功能的实现方法。

`ButtonListener` 按钮事件监听器提供了按钮基础功能，它可以添加到任何一个节点上，所以它可以让一段文字或者一个精灵变成按钮。

例如，下面的代码创建了一个点击后退出游戏的按钮

```cpp
// 假设有一个精灵 sprite，把它变成退出游戏的按钮
// 创建点击按钮后的回调函数
auto callback = [](ButtonEvent evt)
{
    if (evt == ButtonEvent::Clicked)
    {
        // 点击了按钮，退出游戏
        Game::quit();
    }
};

// 给 sprite 添加监听器
auto lis = gcnew ButtonListener(callback);
sprite->addListener(lis);

// 游戏暂停时，让这个按钮继续工作
lis->ignoreGamePaused();
```

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced/more.html#关于回调函数)。
</div>

`ButtonEvent` 是按钮相关事件，它的定义如下

```cpp
// 按钮事件
enum class ButtonEvent
{
	MouseEntered,  // 鼠标浮于按钮上
	MouseExited,   // 鼠标从按钮上移出
	Pressed,       // 鼠标按下
	Clicked,       // 鼠标点击
};
```

### 旧版 Button

Button 表示一个按钮，你可以把一段文字或者一个精灵变成按钮，它的使用方式很简单

```cpp
// 创建一个精灵
auto btnSprite = gcnew Sprite("按钮图片.png");
// 创建点击按钮后的回调函数
auto callback = []() 
{
    // 点击按钮，进入一个新场景
    SceneManager::enter(gcnew Scene);
};
// 把精灵变成一个按钮，并设置点击按钮后的回调函数
auto button = gcnew Button(btnSprite, callback);
// 把按钮加入场景
scene->addChild(button);
```

普通的按钮有四个状态：正常、鼠标移入、按下、禁用，你可以设置按钮在四种状态下显示不同的精灵或文本

```cpp
// 创建一个精灵，按钮普通状态显示
auto btnNormal = gcnew Sprite("按钮图片.png");
// 创建一个精灵，按钮按下状态显示
auto btnSelect = gcnew Sprite("按下时图片.png");
// 创建点击按钮后的回调函数
auto callback = []() 
{
    // 点击按钮，进入一个新场景
    SceneManager::enter(gcnew Scene);
};
// 创建按钮
auto button = gcnew Button;
button->setNormal(btnNormal);
button->setSelected(btnSelect);
button->setClickFunc(callback);
// 把按钮加入场景
scene->addChild(button);
```

如果你想让一个按钮停止工作，可以把它设为禁用状态

```cpp
// 禁用按钮
button->setEnable(false);
```

<div class="ui warning message"><div class="header">Warning </div>
把精灵变为按钮后，不需要再将精灵加入到场景中，否则将产生错误。Debug 状态下引擎可以检测这种错误，在错误产生时中断程序，并在控制台中给出提示。关于控制台的使用方法请参考 [[关于控制台]](/tutorial/advanced/console.html#控制台的使用)。
</div>
---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Button按钮]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点类,/tutorial/node/node.html],
        [Text 文本类,/tutorial/node/text.html],
        [Sprite 精灵类,/tutorial/node/sprite.html],
        [Button 按钮类,/tutorial/node/button.html],
        [ButtonToggle 开关按钮类,/tutorial/node/buttontoggle.html],
        [Menu 菜单类,/tutorial/node/menu.html],
        [Shape 形状类,/tutorial/node/shape.html]
    ]
---
## Button 按钮类

Button 表示一个按钮，你可以把一段文字或者一个精灵变成按钮，它的使用方式很简单

```cpp
// 创建一个精灵
auto btnSprite = gcnew Sprite(L"按钮图片.png");
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

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced.html#关于回调函数)。
</div>

普通的按钮有四个状态：正常、鼠标移入、按下、禁用，你可以设置按钮在四种状态下显示不同的精灵或文本

```cpp
// 创建一个精灵，按钮普通状态显示
auto btnNormal = gcnew Sprite(L"按钮图片.png");
// 创建一个精灵，按钮按下状态显示
auto btnSelect = gcnew Sprite(L"按下时图片.png");
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
button->setCallback(callback);
// 把按钮加入场景
scene->addChild(button);
```

如果你想让一个按钮停止工作，可以把它设为禁用状态

```cpp
// 禁用按钮
button->setnable(false);
```

<div class="ui warning message"><div class="header">Warning </div>
把精灵变为按钮后，不需要再将精灵加入到场景中，否则将产生错误。Debug 状态下引擎可以检测这种错误，在错误产生时中断程序，并在控制台中给出提示。关于控制台的使用方法请参考 [[关于控制台的使用]](/tutorial/advanced.html#关于控制台的使用)。
</div>
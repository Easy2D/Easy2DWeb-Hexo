---
title: 入门教程
subtitle: [ [常用元素简介, /tutorial/common/], Menu菜单]
icon: idea
type: "tutorial"
toclinker: 
    [[Node 节点类,/tutorial/common/node.html],
    [Text 文本类,/tutorial/common/text.html],
    [Font 字体类,/tutorial/common/font.html],
    [Sprite 精灵类,/tutorial/common/sprite.html],
    [Image 图片类,/tutorial/common/image.html],
    [Button 按钮类,/tutorial/common/button.html],
    [ButtonToggle 开关按钮类,/tutorial/common/buttontoggle.html],
    [Menu 菜单类,/tutorial/common/menu.html]]
---
## Menu 菜单类

按钮可以独立工作，也可以通过 `Menu` 菜单类来统一管理多个按钮。

例如，你的游戏暂停时弹出了一个菜单，上面有继续游戏和回主菜单两个按钮，但是你会发现，除了这两个按钮，游戏界面的其他按钮仍然可以点击，也就是这个弹出菜单没有将游戏界面的其他按钮屏蔽掉。

使用 Menu 可以解决此类问题，它可以直接控制多个按钮的状态，上述情况就可以将游戏界面的按钮全部放到一个 Menu 里，然后把 Menu 禁用。

```cpp
// 创建一个菜单
auto menu = new Menu();
// 添加按钮
menu->addButton(button1);
menu->addButton(button2);
// 禁用这个菜单，上面两个按钮将停止工作
menu->setnable(false);
```

<div class="ui info message"><div class="header">Tips </div>
Menu 的禁用和 Button 的禁用是两个不同的概念，按钮的禁用可以表示出来，比如你可以用一张灰色的按钮图片表示这个按钮被禁用了，而 Menu 的禁用更像是 “屏蔽”，即使按钮没有被禁用，它也无法响应。
</div>

<br/>

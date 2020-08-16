---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], ToggleButton开关按钮]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点类,/tutorial/node/node.html],
        [Text 文本类,/tutorial/node/text.html],
        [Sprite 精灵类,/tutorial/node/sprite.html],
        [Button 按钮类,/tutorial/node/button.html],
        [ToggleButton 开关按钮类,/tutorial/node/togglebutton.html],
        [Menu 菜单类,/tutorial/node/menu.html],
        [Shape 形状类,/tutorial/node/shape.html]
    ]
---

## ToggleButton 开关按钮类

开关按钮用来实现有 “开” 和 “关” 两种状态的按钮，所以它比普通按钮的状态更多，它可以有 “开” 状态的正常、鼠标移入、按下、禁用，以及 “关” 状态的正常、鼠标移入、按下、禁用。

使用`ToggleButton::setState`函数可以切换开关的 “开” 和 “关” 状态。

```cpp
// 把按钮的状态设为关闭
button->setState(false);
```

使用`ToggleButton::getState`函数可以获取开关的 “开” 和 “关” 状态。

```cpp
bool state = button->getState();
```

例如，下面的代码创建了一个可以控制音乐的播放与停止的按钮

```cpp
auto btnTextOn = gcnew Text(L"开");   // 创建开状态文字
auto btnTextOff = gcnew Text(L"关");  // 创建关状态文字
auto button = gcnew ToggleButton(btnTextOn, btnTextOff); // 创建开关按钮
/* 设置点击按钮的回调函数 */
button->setClickFunc([=]() {
    if (button->getState()) {               // 获取按钮是打开还是关闭
        MusicPlayer::resume(L"music.wav");  // 打开状态下，继续播放音乐
    }
    else {
        MusicPlayer::pause(L"music.wav");   // 关闭状态下，暂停音乐
    }
});
```

<div class="ui info message"><div class="header">Tips </div>
关于音乐的播放方法请参考 [[使用 Player 播放音乐]](/tutorial/tools.html#使用-Player-播放音乐)。
</div>

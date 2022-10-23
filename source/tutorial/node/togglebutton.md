---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], ToggleButton开关按钮]
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

## ToggleButton 开关按钮

原 `ToggleButton` 类已弃用，下面介绍开关按钮功能的实现方法。

开关按钮用来实现有 “开” 和 “关” 两种状态的按钮，例如背景音乐的开关等，`ToggleButtonListener` 开关按钮事件监听器提供了开关按钮功能，它可以添加到任何一个节点上。

例如，下面的代码创建了一个可以控制音乐的播放与停止的按钮

```cpp
// 假设有一个精灵 sprite，把它变成控制音乐播放的按钮
// 创建点击按钮后的回调函数
auto callback = [](ButtonEvent evt, bool state)
{
    if (evt == ButtonEvent::Clicked)
    {
        // 点击了按钮
        if (state)
        {
            // 按钮现在是打开状态，播放音乐
            MusicPlayer::resume("music.wav");
        }
        else
        {
            // 按钮现在是关闭状态，停止音乐
            MusicPlayer::pause("music.wav");
        }
    }
};

// 给 sprite 添加监听器
auto lis = gcnew ToggleButtonListener(true /* 默认是打开状态 */, callback);
sprite->addListener(lis);

// 游戏暂停时，让这个按钮继续工作
lis->ignoreGamePaused();
```

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced/more.html#关于回调函数)。
</div>

### 旧版 ToggleButton

下面的代码创建了一个可以控制音乐的播放与停止的按钮

```cpp
auto btnTextOn = gcnew Text("开");   // 创建开状态文字
auto btnTextOff = gcnew Text("关");  // 创建关状态文字
auto button = gcnew ToggleButton(btnTextOn, btnTextOff); // 创建开关按钮
/* 设置点击按钮的回调函数 */
button->setClickFunc([=]() {
    if (button->getState()) {               // 获取按钮是打开还是关闭
        MusicPlayer::resume("music.wav");  // 打开状态下，继续播放音乐
    }
    else {
        MusicPlayer::pause("music.wav");   // 关闭状态下，暂停音乐
    }
});
```

使用`ToggleButton::setState`函数可以切换开关的 “开” 和 “关” 状态。

```cpp
// 把按钮的状态设为关闭
button->setState(false);
```

使用`ToggleButton::getState`函数可以获取开关的 “开” 和 “关” 状态。

```cpp
bool state = button->getState();
```

<div class="ui info message"><div class="header">Tips </div>
关于音乐的播放方法请参考 [[使用 Player 播放音乐]](/tutorial/tools.html#使用-Player-播放音乐)。
</div>

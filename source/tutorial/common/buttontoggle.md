---
title: 入门教程
subtitle: [ [常用元素简介, /tutorial/common/], ButtonToggle开关按钮]
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
## ButtonToggle 开关按钮类

开关按钮用来实现有 “开” 和 “关” 两种状态的按钮，所以它比普通按钮的状态更多，它可以有 “开” 状态的正常、鼠标移入、按下、禁用，以及 “关” 状态的正常、鼠标移入、按下、禁用。

例如，下面的代码创建了一个可以控制音乐的播放与停止的按钮

```cpp
auto btnTextOn = new Text("开");   // 创建开状态文字
auto btnTextOff = new Text("关");  // 创建关状态文字
auto button = new ButtonToggle(btnTextOn, btnTextOff); // 创建开关按钮
/* 设置点击按钮的回调函数 */
button->setCallback([=]() {
    if (button->isToggleOn()) {                 // 获取按钮是打开还是关闭
        MusicUtils::resumeMusic("music.wav");  // 打开状态下，继续播放音乐
    }
    else {
        MusicUtils::pauseMusic("music.wav");   // 关闭状态下，暂停音乐
    }
});
```

<div class="ui info message"><div class="header">Tips </div>
关于音乐的播放方法请参考 [[MusicUtils 音乐工具]](/tutorial/tools.html#MusicUtils-音乐工具)。
</div>

使用`toggle`函数可以切换开关的状态，切换后会自动执行按钮的回调函数。
使用`setToggle`可以直接设置按钮的状态为开或者关，这个函数仅仅设置状态，不会执行回调函数。

```cpp
button->setToggle(false);   // 把按钮的状态设为关闭
button->toggle();           // 切换按钮的状态为打开，并执行回调函数
```
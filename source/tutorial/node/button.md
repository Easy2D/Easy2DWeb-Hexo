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
        [Shape 形状,/tutorial/node/shape.html],
        [Canvas 画布,/tutorial/node/canvas.html]
    ]
---
## Button 按钮

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

### 开关按钮

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

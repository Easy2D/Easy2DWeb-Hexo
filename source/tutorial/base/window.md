---
title: 入门教程
subtitle: [ [基础功能, /tutorial/base/], Window窗口类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/base/game.html],
        [Window 窗口类,/tutorial/base/window.html],
        [Input 输入类,/tutorial/base/input.html],
        [Time 时间类,/tutorial/base/time.html],
        [Renderer 渲染器,/tutorial/base/renderer.html],
        [Logger 日志,/tutorial/base/logger.html]
    ]
---

## Window 窗口类

Window 类封装了有关窗口操作的一些函数，例如修改窗口大小等等。

Window 类的常用函数如下：

```cpp
// 修改窗口大小为 1000x800
Window::setSize(1000, 800);
// 修改窗口标题为 Hello
Window::setTitle("Hello");
// 设置鼠标样式为“手指针”
Window::setCursor(Window::Cursor::Hand);
// 获取窗口宽度
float width = Window::getWidth();
// 获取窗口高度
float height = Window::getHeight();
// 获取窗口大小
Size size = Window::getSize();
// 获取窗口标题
String title = Window::getTitle();
```

Window 类除了可以设置窗口大小、标题外，还可以设置窗口图标，需要先将 ico 格式图标加入到 VS 资源中，然后调用下面的代码：

```cpp
// 设置窗口图标为资源 IDR_ICON1 所在的图标
Window::setIcon(IDR_ICON1);
```

Window 类还封装了弹窗提示的函数，类似于 MessageBox：

```cpp
// 弹出一个提示窗口
Window::info("这是一条提示", "提示标题");
// 弹出一个警告窗口
Window::warning("这是一条警告", "警告标题");
// 弹出一个错误窗口
Window::error("这是一条错误", "错误标题");
```

Window 类还可以设置自定义鼠标指针，例如将一个 Sprite 精灵作为指针渲染

```cpp
// 假设有 sprite 对象，把它作为指针
Window::setCustomCursor(sprite);

// 可以根据不同的指针类型渲染不同内容
Window::setCustomCursor([](Window::Cursor cursor) -> Node* {
    if (cursor == Window::Cursor::Normal) {
        // 普通指针
        return gcnew Sprite("cursor_normal.png");
    }
    if (cursor == Window::Cursor::Hand) {
        // 手掌指针
        return gcnew Sprite("cursor_hand.png");
    }
    // 其他情况使用系统默认指针
    return nullptr;
});
```

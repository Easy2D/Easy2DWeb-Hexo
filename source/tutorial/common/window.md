---
title: 入门教程
subtitle: [ [基础功能, /tutorial/common/], Window窗口类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/common/game.html],
        [Window 窗口类,/tutorial/common/window.html],
        [Input 输入类,/tutorial/common/input.html],
        [Time 时间类,/tutorial/common/time.html],
        [Renderer 渲染器,/tutorial/common/renderer.html],
        [Logger 日志,/tutorial/common/logger.html],
        [Point 坐标点,/tutorial/common/point.html],
        [Size 大小,/tutorial/common/size.html],
        [String 字符串,/tutorial/common/string.html],
        [Color 颜色,/tutorial/common/color.html],
        [KeyCode 键值,/tutorial/common/keycode.html],
        [Image 图片类,/tutorial/common/image.html],
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数封装器,/tutorial/common/function.html]
    ]
---

## Window 窗口类

Window 类封装了有关窗口操作的一些函数，例如修改窗口大小等等。

Window 类的常用函数如下：

```cpp
// 修改窗口大小为 1000x800
Window::setSize(1000, 800);
// 修改窗口标题为 Hello
Window::setTitle(L"Hello");
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
Window::info(L"这是一条提示", L"提示标题");
// 弹出一个警告窗口
Window::warning(L"这是一条警告", L"警告标题");
// 弹出一个错误窗口
Window::error(L"这是一条错误", L"错误标题");
```

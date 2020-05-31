---
title: 入门教程
subtitle: [ [基础功能, /tutorial/common/], Renderer渲染器]
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

## Renderer 渲染器

Renderer 封装了有关渲染的所有函数，当然大部分函数都不需要开发者手动调用。

Renderer 类建议开发者的使用函数如下：

```cpp
// 将游戏画面背景色设为白色
Renderer::setBackgroundColor(Color::White);
// 显示画面 FPS
Renderer::showFps(true);
```

如果你确实需要实现自定义的渲染行为，例如当你需要渲染非常多的物体（一个巨大的地图或其他东西），直接使用 Sprite 会导致游戏卡顿时，可以实现一个自定义的 Sprite 类，直接调用原生函数来提升渲染速度：

```cpp
// 获取 Direct2D 的 ID2D1HwndRenderTarget 对象
// 有关该类的使用方法，请查阅微软官方文档
// https://docs.microsoft.com/en-us/windows/win32/api/d2d1/nn-d2d1-id2d1hwndrendertarget
auto renderTarget = Renderer::getRenderTarget();
```

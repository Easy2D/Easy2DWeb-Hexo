---
title: 入门教程
subtitle: [ [基础功能, /tutorial/common/], Image图片类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/common/game.html],
        [Window 窗口类,/tutorial/common/window.html],
        [Input 输入类,/tutorial/common/input.html],
        [Time 时间类,/tutorial/common/time.html],
        [Renderer 渲染器,/tutorial/common/renderer.html],
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

## Image 图片类和图片预加载

`Image` 表示图片，程序中使用的每一张图片都对应一个 Image 对象。

每个 Sprite 都包含一个 Image 对象，例如当你创建很多个像下图一样的 Sprite 时，它们包含的 Image 对象其实是同一个。这样做的好处就是节省内存。

![一大堆Sprite使用了同一张图片](/assets/images/tutorial/texture.png)

Image 的另一个作用就是创建`Animation(帧动画)`，这个部分在动画教程中讲解。

将图片资源复制到内存中需要耗费一定的时间，为了避免在游戏过程中因为加载图片产生卡顿，你可以在游戏开始前调用 `Image::preload` 函数来提前将游戏中用到的图片加载到内存中。

```cpp
Image::preload(L"图片1.png");
Image::preload(L"图片2.png");
Image::preload(L"图片3.png");
```

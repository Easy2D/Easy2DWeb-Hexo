---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Image图片类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Point 坐标点,/tutorial/common/point.html],
        [Size 大小,/tutorial/common/size.html],
        [String 字符串,/tutorial/common/string.html],
        [Color 颜色,/tutorial/common/color.html],
        [KeyCode 键值,/tutorial/common/keycode.html],
        [MouseCode 鼠标键值,/tutorial/common/mousecode.html],
        [Image 图片类,/tutorial/common/image.html],
        [Font 字体,/tutorial/common/font.html],
        [DrawingStyle 绘图样式,/tutorial/common/drawing-style.html],
        [Listener 监听器,/tutorial/common/listener.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## Image 图片类和图片预加载

`Image` 表示图片，程序中使用的每一张图片都对应一个 Image 对象。

每个 Sprite 都包含一个 Image 对象，例如当你创建很多个像下图一样的 Sprite 时，它们包含的 Image 对象其实是同一个。这样做的好处就是节省内存。

![一大堆Sprite使用了同一张图片](/assets/images/tutorial/texture.png)

Image 的另一个作用就是创建`Animation(帧动画)`，这个部分在动画教程中讲解。

将图片资源复制到内存中需要耗费一定的时间，为了避免在游戏过程中因为加载图片产生卡顿，你可以在游戏开始前调用 `Image::load` 函数来提前将游戏中用到的图片加载到内存中。

```cpp
Image::load(L"图片1.png");
Image::load(L"图片2.png");
Image::load(L"图片3.png");
```

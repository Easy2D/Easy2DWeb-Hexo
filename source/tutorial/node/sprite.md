---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Sprite精灵]
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
## Sprite 精灵类

Sprite 可以说是引擎中最常见的类，它通常是一张图片，用来表示游戏中的一个物体。

你可以用 `open` 函数打开本地文件的一张图片。

```cpp
auto sprite = gcnew Sprite;
sprite->open(L"本地图片.png"); // 从本地图片加载
```

![Sprite示意图](/assets/images/tutorial/sprite1.png)

如果你只需要图片中的一部分，可以使用 `crop` 函数对它进行裁剪

```cpp
// 从原图片的像素坐标 (20, 10) 处开始裁剪
// 裁剪宽度为 60 像素，高度为 80 像素
sprite->crop(Rect(20, 10, 60, 80));
```

![裁剪后的精灵](/assets/images/tutorial/sprite2.png)

上面的内容都可以在 Sprite 的构造函数中进行

```cpp
// 从本地图片加载精灵，并对图片进行裁剪
auto sprite = gcnew Sprite(L"本地图片.png", Rect(20, 10, 60, 80));
```

你可以更灵活的运用 `crop` 函数，比如下面的代码把精灵裁剪成了原来的一半

```cpp
sprite->crop(Rect(0, 0, sprite->getWidth(), sprite->getHeight() / 2));
```

![裁剪后的精灵](/assets/images/tutorial/sprite3.png)

Sprite 具有节点的通用属性，你可以对它进行移动、旋转、缩放等操作

<div class="jg-box">
![Sprite旋转](/assets/images/tutorial/sprite5.png)
![Sprite放大](/assets/images/tutorial/sprite6.png)
![Sprite半透明](/assets/images/tutorial/sprite7.png)
</div>

```cpp
// 顺时针旋转 30 度
sprite->setRotation(30);
// 放到至原来的两倍
sprite->setScale(2);
// 不透明度设为 0.5
sprite->setOpacity(0.5f);
```

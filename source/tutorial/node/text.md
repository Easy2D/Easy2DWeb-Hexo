---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Text文本]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Node 节点类,/tutorial/node/node.html],
        [Text 文本类,/tutorial/node/text.html],
        [Sprite 精灵类,/tutorial/node/sprite.html],
        [Button 按钮类,/tutorial/node/button.html],
        [ButtonToggle 开关按钮类,/tutorial/node/buttontoggle.html],
        [Menu 菜单类,/tutorial/node/menu.html],
        [Shape 形状类,/tutorial/node/shape.html]
    ]
---

## Text 文本类

Text 是节点的一种，它包含了一段文字。你可以把每段文字都当做一个对象进行处理，使用 gcnew 运算符创建它。

```cpp
auto text = gcnew Text(L"Hello Easy2D!");
```

![Text示意图](/assets/images/tutorial/text1.png)

Text 支持节点的所有通用属性，例如坐标、缩放、旋转角度、不透明度等

<div class="jg-box">
![Text旋转](/assets/images/tutorial/text3.png)
![Text放大](/assets/images/tutorial/text4.png)
![Text半透明](/assets/images/tutorial/text5.png)
</div>

```cpp
// 顺时针旋转 30 度
text->setRotation(30);
// 放到至原来的两倍
text->setScale(2);
// 不透明度设为 0.5
text->setOpacity(0.5f);
```

<div class="ui info message"><div class="header">Tips </div>
**注意**：坐标、宽高、缩放、旋转角度、不透明度等是所有节点都具有的属性，并不是 Text 特有的。
</div>

如果文字比较多，你可以设置它自动换行：

```cpp
auto text = gcnew Text(L"Hello Easy2D!");
text->setWordWrappingEnable(true);  // 开启自动换行
text->setWordWrappingWidth(70);     // 设置文字自动换行的宽度
```

![Text自动换行](/assets/images/tutorial/text6.png)

### 文字的字体

如果你想设置文字的字体、颜色、字号等等属性，就需要为它创建一个 Font（字体）。

有关 Font 的使用说明，请参阅 [Font 字体](/tutorial/common/font.html)。

### 丰富的文字样式

`Text::Style` 结构体中提供了丰富的文字样式设定，例如下面的代码为文字设置了文字颜色、描边等样式

```cpp
// 创建文字样式
auto style = Text::Style();
style.color = Color::Blue;          // 颜色为蓝色
style.hasOutline = true;            // 开启文字描边
style.outlineColor = Color::Red;    // 文字描边颜色为红色
style.outlineWidth = 2.0;           // 文字描边宽度为 2.0
style.wrapping = true;              // 开启自动换行
style.wrappingWidth = 70;           // 文字自动换行的宽度为 70（像素）
// 更多样式不再列出

// 设置文字样式
auto text = gcnew Text(L"Hello Easy2D!");
text->setStyle(style);
```

<div class="ui info message"><div class="header">Tips </div>
没有设置 Text 的样式时，它会自动创建一个默认样式并使用。
</div>

多个 Text 可以使用一个 Text::Style，例如下面的代码中 text1 和 text2 使用了同一个 Text::Style 对象。

text1 和 text2 在内部会各自拷贝一份 Text::Style，所以创建文字后再修改 style 不会影响 text1 和 text2。

```cpp
auto style = Text::Style();
auto text1 = gcnew Text(L"Hello", Font(), style);    // text1 使用 style
auto text2 = gcnew Text(L"Easy2D", Font(), style);   // text2 也使用 style
```

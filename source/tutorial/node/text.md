---
title: 入门教程
subtitle: [ [常用元素, /tutorial/node/], Text文本]
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

## Text 文本

Text 是节点的一种，它包含了一段文字，这样可以把每段文字都当做一个对象进行处理。

```cpp
auto text = gcnew Text("Hello Easy2D!");
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

### 文字样式

`TextStyle` 结构体提供了字体、对齐方式等文字样式设定。

```cpp
// 创建文字样式
TextStyle style;
style.font = Font("宋体");         // 设置字体
style.alignment = TextAlign::Left;  // 左对齐
style.wrapping = true;              // 开启自动换行
style.wrappingWidth = 70;           // 文字自动换行的宽度
style.lineSpacing = 10;             // 行间距
style.hasUnderline = true;          // 下划线
style.hasStrikethrough = true;      // 删除线

// 设置文字样式
auto text = gcnew Text("Hello Easy2D!");
text->setTextStyle(style);
```

<div class="ui info message"><div class="header">Tips </div>
Font 文字控制文字的字体、字号、粗细等等，详情请参阅 [Font 字体](/tutorial/common/font.html)。
</div>

可以单独设置某一项样式，例如文字比较多，你可以设置它自动换行：

```cpp
auto text = gcnew Text("Hello Easy2D!");
text->setWordWrappingEnable(true);  // 开启自动换行
text->setWordWrappingWidth(70);     // 设置文字自动换行的宽度
```

![Text自动换行](/assets/images/tutorial/text6.png)

### 绘图样式

`Text` 支持设置 `DrawingStyle` 绘图样式，以设置文字填充颜色、描边颜色等，详情请参阅 [DrawingStyle](/tutorial/common/drawing-style.html)。

```cpp
// 创建文字绘图样式
DrawingStyle style;
style.mode = DrawingStyle::Mode::Solid; // 绘图模式为填充
style.fillColor = Color::White;         // 文字填充色
style.strokeColor = Color::Red;         // 文字描边色
style.strokeWidth = 2.0;                // 文字描边宽度为 2.0
style.lineJoin = LineJoin::Miter;       // 线条相交样式

// 设置绘图样式
auto text = gcnew Text("Hello Easy2D!");
text->setDrawingStyle(style);
```

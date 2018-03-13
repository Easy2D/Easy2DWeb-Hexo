---
title: 入门教程
subtitle: [ [常用元素简介, /tutorial/common/], Text文本]
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
## Text 文本类

Text 是节点的一种，它包含了一段文字。你可以把每段文字都当做一个对象进行处理，使用 new 运算符创建它。

```cpp
auto text = new Text("Hello Easy2D!");
```

![Text示意图](/assets/images/tutorial/text1.png)

Text 支持节点的所有通用属性，例如坐标、缩放、旋转角度、不透明度等

<div class="jg-box">
![Text移动到屏幕中央](/assets/images/tutorial/text2.png)
![Text旋转](/assets/images/tutorial/text3.png)
![Text放大](/assets/images/tutorial/text4.png)
![Text半透明](/assets/images/tutorial/text5.png)
</div>

```cpp
/* 移动到屏幕中央 */
text->setPivot(0.5, 0.5);
text->setPos(App::getWidth() / 2, App::getHeight() / 2);
/* 顺时针旋转 30 度 */
text->setRotation(30);
/* 放到至原来的两倍 */
text->setScale(2);
/* 不透明度设为 0.5 */
text->setOpacity(0.5);
```

<div class="ui info message"><div class="header">Tips </div>
**注意**：坐标、宽高、缩放、旋转角度、不透明度等是所有节点都具有的属性，并不是 Text 特有的。
</div>

如果文字比较多，你可以设置它自动换行：

```cpp
auto text = new Text("Hello Easy2D!");
text->setWordWrapping(true);    // 开启自动换行
text->setWordWrappingWidth(70); // 设置文字自动换行的宽度
```

![Text自动换行](/assets/images/tutorial/text6.png)

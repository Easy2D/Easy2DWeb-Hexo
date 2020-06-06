---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Font字体]
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
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## Font 字体类

如果你想设置 [Text](/tutorial/node/text.html) 的字体、颜色、字号等等属性，就需要为它创建一个 Font 。

<div class="ui info message"><div class="header">Tips </div>
Font 不是节点，因为它仅仅描述了文本的样式。Font 不能显示在屏幕上，也不能进行旋转之类的操作。
</div>

```cpp
auto text = gcnew Text(L"Hello Easy2D!");
auto font = gcnew Font(L"宋体", 40, Color::BLUE); // 创建一个Font，宋体、字号40、蓝色
text->setFont(font);
```

![设置了字体后的Text](/assets/images/tutorial/font1.png)

分步骤进行上面的操作虽然简洁明了，但是熟悉了相关操作后，上面的代码难免显得有些啰嗦。你可以直接在 Text 的构造函数中传入更多的参数来指定它的字体样式：

```cpp
// 在创建文本的同时指定它的字体样式
auto text = gcnew Text(L"Hello Easy2D!", L"宋体", 40, Color::BLUE);
```

<div class="ui info message"><div class="header">Tips </div>
没有设置 Text 的字体时，它会自动创建一个默认字体并使用。
</div>

多个 Text 可以共用一个 Font，例如下面的代码中 text1 和 text2 使用了同一个 Font 对象，这时如果你修改 font 的颜色，text1和 text2 会同时变色。

```cpp
auto font = gcnew Font(L"", 40);           // 系统默认字体、字号40
auto text1 = gcnew Text(L"Hello", font);   // text1 使用 font
auto text2 = gcnew Text(L"Easy2D", font);  // text2 也使用 font
```

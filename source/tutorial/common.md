---
title: 入门教程
subtitle: 常用元素简介
icon: idea
toc: true
type: "tutorial"
---
## EText 文本类

EText 是节点的一种，它包含了一段文字。你可以把每段文字都当做一个对象进行处理，使用 new 运算符创建它。

```cpp
auto text = new EText(L"Hello Easy2D!");
```

![EText示意图](/assets/images/tutorial/text1.png)

<div class="ui info message"><div class="header">Tips </div>
Easy2D 使用 Unicode 字符集，所以必须在字符串前加字母 L 标识它，比如 `L"Unicode String"`。
</div>

EText 支持节点的所有通用属性，例如坐标、缩放、旋转角度、不透明度等

<div class="jg-box">
![EText移动到屏幕中央](/assets/images/tutorial/text2.png)
![EText旋转](/assets/images/tutorial/text3.png)
![EText放大](/assets/images/tutorial/text4.png)
![EText半透明](/assets/images/tutorial/text5.png)
</div>

```cpp
/* 移动到屏幕中央 */
text->setPivot(0.5f, 0.5f);
text->setPos(EApp::getWidth() / 2, EApp::getHeight() / 2);
/* 顺时针旋转 30 度 */
text->setRotation(30);
/* 放到至原来的两倍 */
text->setScale(2);
/* 不透明度设为 0.5 */
text->setOpacity(0.5f);
```

<div class="ui info message"><div class="header">Tips </div>
**注意**：坐标、宽高、缩放、旋转角度、不透明度等是所有节点都具有的属性，并不是 EText 特有的。父节点的属性都将传递给子节点，例如父节点的不透明度为 0 (完全透明)，那么即使它的子节点不透明度为 1 ，看起来也是透明的。
</div>

如果文字比较多，你可以设置它自动换行：

```cpp
auto text = new EText(L"Hello Easy2D!");
text->setWordWrapping(true);    // 开启自动换行
text->setWordWrappingWidth(70); // 设置文字自动换行的宽度
```

![EText自动换行](/assets/images/tutorial/text6.png)

<br/>

## EFont 字体类

如果你想设置 EText 的字体、颜色、字号等等属性，就需要为它创建一个 EFont 。

<div class="ui info message"><div class="header">Tips </div>
EFont 不是节点，因为它仅仅描述了文本的样式，不能显示在屏幕上，也不能进行旋转之类的操作。
</div>

```cpp
auto text = new EText(L"Hello Easy2D!");
auto font = new EFont(L"宋体", 40, EColor::BLUE); // 创建一个EFont，宋体、字号40、蓝色
text->setFont(font);
```

![设置了字体后的EText](/assets/images/tutorial/font1.png)

分步骤进行上面的操作虽然简洁明了，但是熟悉了相关操作后，上面的代码难免显得有些啰嗦。你可以直接在 EText 的构造函数中传入更多的参数来指定它的字体样式：

```cpp
// 在创建文本的同时指定它的字体样式
auto text = new EText(L"Hello Easy2D!", L"宋体", 40, EColor::BLUE);
```

<div class="ui info message"><div class="header">Tips </div>
没有设置 EText 的字体时，它会自动创建一个默认字体并使用。
</div>

多个 EText 可以共用一个 EFont，例如下面的代码中 text1 和 text2 使用了同一个 EFont 对象，这时如果你修改 font 的颜色，text1和 text2 会同时变色。

```cpp
auto font = new EFont(L"", 40);           // 系统默认字体、字号40
auto text1 = new EText(L"Hello", font);   // text1 使用 font
auto text2 = new EText(L"Easy2D", font);  // text2 也使用 font
```

<br/>

## ESprite 精灵类

ESprite 可以说是引擎中最常见的类，它通常是一张图片，用来表示游戏中的一个物体。

你可以用 `loadFrom` 函数选择本地文件的一张图片加载它。

```cpp
auto sprite = new ESprite();
sprite->loadFrom(L"本地图片.png"); // 从本地图片加载
```

![ESprite示意图](/assets/images/tutorial/sprite1.png)

如果你只需要图片中的一部分，可以使用 `clip` 函数对它进行裁剪

```cpp
// 从原图片的像素坐标 (20, 10) 处开始裁剪
// 裁剪宽度为 60 像素，高度为 80 像素
sprite->clip(20, 10, 60, 80);
```

![裁剪后的精灵](/assets/images/tutorial/sprite2.png)

上面的内容都可以在 ESprite 的构造函数中进行

```cpp
// 从本地图片加载精灵，并对图片进行裁剪
auto sprite = new ESprite(L"本地图片.png", 20, 10, 60, 80);
```

你可以更灵活的运用 `clip` 函数，比如下面的代码把精灵裁剪成了原来的一半

```cpp
sprite->clip(0, 0, sprite->getWidth(), sprite->getHeight() / 2);
```

![裁剪后的精灵](/assets/images/tutorial/sprite3.png)

ESprite 具有节点的通用属性，你可以对它进行移动、旋转、缩放等操作

<div class="jg-box">
![ESprite移动到屏幕中央](/assets/images/tutorial/sprite4.png)
![ESprite旋转](/assets/images/tutorial/sprite5.png)
![ESprite放大](/assets/images/tutorial/sprite6.png)
![ESprite半透明](/assets/images/tutorial/sprite7.png)
</div>

```cpp
/* 移动到屏幕中央 */
sprite->setPivot(0.5f, 0.5f);
sprite->setPos(EApp::getWidth() / 2, EApp::getHeight() / 2);
/* 顺时针旋转 30 度 */
sprite->setRotation(30);
/* 放到至原来的两倍 */
sprite->setScale(2);
/* 不透明度设为 0.5 */
sprite->setOpacity(0.5f);
```

<br/>

## ETexture 纹理类和图片预加载

`ETexture` 表示纹理，程序中使用的每一张图片都对应一个纹理。

如果你创建了很多个一模一样的精灵，它们会各自占据一块内存，但是它们使用的都是同一个纹理。所以一般来说，你不需要考虑300个精灵是否会占用过多的内存。

![一大堆ESprite使用了同一个纹理](/assets/images/tutorial/texture.png)

将图片资源复制到内存中需要耗费一定的时间，为了避免在游戏过程中因为加载图片产生卡顿，你可以在游戏开始前调用它的 `preload` 函数来提前将游戏中用到的图片加载到内存中。

```cpp
ETexture::preload(L"图片1.png");
ETexture::preload(L"图片2.png");
ETexture::preload(L"图片3.png");
```

<br/>

## ESpriteFrame 精灵帧

`ESpriteFrame` 表示精灵的一帧，它其实是保存了 ETexture 和一个裁剪矩形。

精灵可以直接加载已经创建的精灵帧：

```cpp
// 创建精灵帧，同时指定了它的裁剪位置和大小
auto spriteFrame = new ESpriteFrame(L"本地图片.png", 20, 10, 60, 80);
// 创建一个精灵
auto sprite = new ESprite();
// 加载精灵帧
sprite->loadFrom(spriteFrame);
```

精灵帧可以用来给精灵创建帧动画，关于帧动画的内容请查看 [[动画简介 - 帧动画]](/tutorial/actions.html#帧动画)

<br/>

## ENode 节点类

ENode 是一个抽象的含义，它表示场景中的一个元素。ESprite 和 EText 都是节点的**具体化**。

```cpp
auto node = new ENode();    // 创建一个空节点
```

每个节点都可以有任意数量的子节点，而子节点又可以有它自己的子节点，这样就构成了一个树状模型。例如，下面的代码将 node2 作为了 node1 的子节点：

```cpp
auto node1 = new ENode();
auto node2 = new ENode();
node1->addChild(node2);    // 给 node1 添加子节点
```

node1 和 node2 互为父子关系，node1 是 node2 的父节点，node2 是 node1 的子节点。当父节点被加入到场景时，子节点也会一起进入场景。

另外，添加子节点时，先被添加的节点会被后添加的节点遮挡。你可以在添加节点时指定它的顺序。例如下面的代码，虽然 node3 在 node2 后面添加，但是 node2 的顺序为 2，比 node3 大，所以屏幕上 node2 将遮挡 node3。

```cpp
node1->addChild(node2, 2);
node1->addChild(node3, 1);
```

场景实质上控制了**根节点**，屏幕上所有的节点都是它的子节点，构成了一个**树状模型**。将一个精灵添加入场景，其实是把精灵加入了场景的树中。Easy2D 会遍历场景的树，对树上的所有节点做出处理。

![场景和节点的关系](/assets/images/tutorial/scene.png)

<div class="ui info message"><div class="header">Tips </div>
节点的属性是向下传递的。例如，父节点的旋转角度为 15 度，其子节点的旋转角度也为 15 度，则实际显示时，父节点旋转了 15 度，而子节点先围绕父节点旋转 15 度后，再自身旋转 15 度。
</div>

因为节点的属性是向下传递的，移动父节点的位置所有的子节点都会跟着一起动，旋转父节点所有的子节点会跟着一起旋转，所以你可以用 ENode 实现任意形式的层次结构。

节点的常用属性有`名称(name)`、`坐标(pos)`、`宽度(width)`、`高度(height)`、`缩放程度(scale)`、`旋转角度(rotation)`、`不透明度(opacity)`、`中心点(pivot)`等。
`get`+`属性名`可以获取它的属性，`set`+`属性名`可以修改它的属性。

```cpp
// 设置节点坐标
node->setPos(posX, posY);
// 可以单独设置横坐标和纵坐标
node->setPosX(posX);
node->setPosY(posY);
// 将 set 改为 get 可以获取节点坐标
EPoint pos = node->getPos();
float posX = node->getPosX();
float posY = node->getPosY();
```

<div class="ui info message"><div class="header">Tips </div>
`EPoint`表示一个坐标，它有 x 和 y 两个成员变量。
```cpp
EPoint p1;          // 创建一个 (0, 0) 坐标
EPoint p2(10, 10);  // 创建一个 (10, 10) 坐标
```
</div>

有时也许你需要区分不同的节点，那么可以设置它的名称

```cpp
node->setName(L"name_test");     // 设置节点名称
EString name = node->getName();  // 获取节点名称
```

<div class="ui info message"><div class="header">Tips </div>
`EString`表示一个字符串。
```cpp
EString str = L"this is a string";
```
</div>

节点的其他常用方法有：

```cpp
// 添加子节点
node->addChild(node2);
// 移除子节点
node->removeChild(node2);
// 删除有相同名称的子节点
node->removeChild(node2->getName());
// 获取相同名称的子节点（如果有多个，返回第一个）
auto node2 = node->getChild(L"bird");
// 获取子节点的数量
int num = node->getChildrenCount();
```

<br/>

## EButton 按钮类

EButton 表示一个按钮，你可以把一段文字或者一个精灵变成按钮，它的使用方式很简单

```cpp
// 创建一个精灵
auto btnSprite = new ESprite(L"按钮图片.png");
// 创建点击按钮后的回调函数
auto callback = []() {
    // 点击按钮，进入一个新场景
    EApp::enterScene(new EScene());
};
// 把精灵变成一个按钮，并设置点击按钮后的回调函数
auto button = new EButton(btnSprite, callback);
// 把按钮加入场景
scene->add(button);
```

<div class="ui info message"><div class="header">Tips </div>
回调函数的使用方法请参考 [[关于回调函数]](/tutorial/advanced.html#关于回调函数)。
</div>

普通的按钮有四个状态：正常、鼠标移入、按下、禁用，你可以设置按钮在四种状态下显示不同的精灵或文本

```cpp
// 创建一个精灵，按钮普通状态显示
auto btnNormal = new ESprite(L"按钮图片.png");
// 创建一个精灵，按钮按下状态显示
auto btnSelect = new ESprite(L"按下时图片.png");
// 创建点击按钮后的回调函数
auto callback = []() {
    // 点击按钮，进入一个新场景
    EApp::enterScene(new EScene());
};
// 创建按钮
auto button = new EButton();
button->setNormal(btnNormal);
button->setSelected(btnSelect);
button->setCallback(callback);
// 把按钮加入场景
scene->add(button);
```

如果你想让一个按钮停止工作，可以把它设为禁用状态

```cpp
// 禁用按钮
button->setEnable(false);
```

<div class="ui warning message"><div class="header">Warning </div>
把精灵变为按钮后，不需要再将精灵加入到场景中，否则将产生错误。Debug 状态下引擎可以检测这种错误，在错误产生时中断程序，并在控制台中给出提示。关于控制台的使用方法请参考 [[关于控制台的使用]](/tutorial/advanced.html#关于控制台的使用)。
</div>

<br/>

## EButtonToggle 开关按钮类

开关按钮用来实现有 “开” 和 “关” 两种状态的按钮，所以它比普通按钮的状态更多，它可以有 “开” 状态的正常、鼠标移入、按下、禁用，以及 “关” 状态的正常、鼠标移入、按下、禁用。

例如，下面的代码创建了一个可以控制音乐的播放与停止的按钮

```cpp
auto btnTextOn = new EText(L"开");   // 创建开状态文字
auto btnTextOff = new EText(L"关");  // 创建关状态文字
auto button = new EButtonToggle(btnTextOn, btnTextOff); // 创建开关按钮
/* 设置点击按钮的回调函数 */
button->setCallback([=]() {
    if (button->isToggleOn()) {                 // 获取按钮是打开还是关闭
        EMusicUtils::resumeMusic("music.wav");  // 打开状态下，继续播放音乐
    }
    else {
        EMusicUtils::pauseMusic("music.wav");   // 关闭状态下，暂停音乐
    }
});
```

<div class="ui info message"><div class="header">Tips </div>
关于音乐的播放方法请参考 [[EMusicUtils 音乐工具]](/tutorial/tools.html#EMusicUtils-音乐工具)。
</div>

使用`toggle`函数可以切换开关的状态，切换后会自动执行按钮的回调函数。
使用`setToggle`可以直接设置按钮的状态为开或者关，这个函数仅仅设置状态，不会执行回调函数。

```cpp
button->setToggle(false);   // 把按钮的状态设为关闭
button->toggle();           // 切换按钮的状态为打开，并执行回调函数
```

<br/>

## EMenu 菜单类

按钮可以独立工作，也可以通过 `EMenu` 菜单类来统一管理多个按钮。

例如，你的游戏暂停时弹出了一个菜单，上面有继续游戏和回主菜单两个按钮，但是你会发现，除了这两个按钮，游戏界面的其他按钮仍然可以点击，也就是这个弹出菜单没有将游戏界面的其他按钮屏蔽掉。

使用 EMenu 可以解决此类问题，它可以直接控制多个按钮的状态，上述情况就可以将游戏界面的按钮全部放到一个 EMenu 里，然后把 EMenu 禁用。

```cpp
// 创建一个菜单
auto menu = new EMenu();
// 添加按钮
menu->addButton(button1);
menu->addButton(button2);
// 禁用这个菜单，上面两个按钮将停止工作
menu->setEnable(false);
```

<div class="ui info message"><div class="header">Tips </div>
EMenu 的禁用和 EButton 的禁用是两个不同的概念，按钮的禁用可以表示出来，比如你可以用一张灰色的按钮图片表示这个按钮被禁用了，而 EMenu 的禁用更像是 “屏蔽”，即使按钮没有被禁用，它也无法响应。
</div>

<br/>

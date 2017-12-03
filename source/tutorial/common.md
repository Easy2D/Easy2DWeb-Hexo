---
title: 入门教程
subtitle: 常用元素简介
icon: idea
toc: true
type: "tutorial"
---

## ESprite 精灵类

ESprite 是引擎中最常见的类之一，它通常是一张图片，用来表示游戏中的一个物体，哪怕仅仅是一张静止的背景图。

你可以选择本地文件的一张图片加载它。如果你只需要图片中的一部分，还可以对它进行裁剪

```cpp
auto sprite = new ESprite();
// 从本地图片加载
sprite->loadFrom(L"本地文件名");
// 对图片进行裁剪，从原图片的(5, 5)处开始裁剪，裁剪的宽高为15像素
sprite->clip(5, 5, 15, 15);
```

分步骤进行上面的操作虽然简洁明了，但是熟悉了相关操作后，上面的代码难免显得有些啰嗦。我们可以一句代码将上面的内容概括：

```cpp
// 从本地图片加载精灵，并对图片进行裁剪
auto sprite = new ESprite(L"本地文件名", 5, 5, 15, 15);
```

通常，如果我们有一张 320\*240 像素大小的背景图，但是窗口大小为 640\*480，为了适应窗口的大小，我们需要对它进行放大而不是裁剪，那么可以使用下面的代码：

```cpp
// 加载一张背景图
auto background = new ESprite(L"背景图");
// 整体放大为原来的两倍
background->setScale(2);
```

<div class="ui info message"><div class="header">Tips </div>
位移、缩放、旋转、倾斜、执行动画是所有节点都可以进行的操作，坐标、宽高、锚点、透明度是所有节点共有的属性，只有加载图片和裁剪图片是精灵特有的操作。
</div>

<br/>

## ETexture 纹理类和图片预加载

`ETexture` 表示一张纹理，程序中使用的每一张图片都对应一个纹理。

如果你创建了很多个一模一样的精灵，或者很多个图片相同只是裁剪位置不同的精灵，它们不应该各自拷贝一份图片到内存中，而应该对同一张图片资源进行不同采样。引擎会自动将程序中使用到的图片加载为 ETexture 并保存在内存中，以重复使用。所以上述情况下，它们的图片资源在内存中只有一份。

将图片资源复制到内存中需要耗费一定的时间，为了避免在游戏过程中因为加载图片产生卡顿，ETexture 提供了预加载功能。你可以在游戏开始前调用它的静态函数`preload`来提前将游戏时用到的图片加载到内存中。

下面是一段示例代码

```cpp
ETexture::preload(L"图片1.png");
ETexture::preload(L"图片2.png");
ETexture::preload(L"图片3.png");
```

<br/>

## EText 文本类和 EFont 字体类

EText 是节点的一种，它包含了一段文字，你可以把每一段文字都当做一个对象进行处理。

```cpp
// 创建一个默认字体的文本
auto text = new EText(L"这是一段文本");
```

如果文字比较多，你可以设置它进行自动换行：

```cpp
// 创建一个默认字体的文本
auto text = new EText(L"balabalabalabalabala");
// 开启自动换行
text->setWordWrapping(true);
// 设置文字自动换行的宽度
text->setWordWrappingWidth(50);
```

如果你想设置它的字体、颜色、字号等等属性，则需要为它创建一个 EFont 字体。

<div class="ui info message"><div class="header">Tips </div>
EFont 不是节点，因为它并不能显示在屏幕上，也不能进行旋转之类的操作，它仅仅描述了文本的样式。
</div>

```cpp
// 创建一个字体，样式为宋体、字号80、蓝色
auto font = new EFont(L"宋体", 80, EColor::BLUE);
// 设置文本的字体
text->setFont(font);
```

这一操作同样可以简化，在 EText 的构造函数中实现：

```cpp
// 创建文本的同时，指定它的字体样式
auto text = new EText(L"balabalabalabalabala", L"宋体", 80, EColor::BLUE);
```

<div class="ui warning message"><div class="header">Warning </div>
其实 EText 的构造函数只是隐藏了 EFont 的创建过程而已，如果你需要同时显示多段样式相同的文本，最好的方式仍然是先创建字体，然后所有的文本共用它，这样可以节省内存。
</div>

<br/>

## ENode 节点类

了解了精灵和文本，再来学习 ENode 就不是难事了。

精灵和文本无非是**节点的具体化**，具有各自鲜明的特征。你完全可以自定义一个类继承 ESprite，让精灵的特征更加明显，比如定义一个 Bird 类继承 ESprite，然后设置 Bird 的属性，让它变成一只鸟。

ENode 作为一个抽象的对象，虽然不会在屏幕上产生任何画面，但是它仍然有巨大的作用。
假设这样一个画面，300 只小鸟在屏幕上飞过，如何实现？如果对每只小鸟都执行一次动画，那岂不是太麻烦了。

使用 ENode 类，我们可以把 300 只小鸟加入一个相同的节点中，移动这个节点，所有的小鸟就会跟着一起移动了。伪代码如下：

```cpp
// 创建一个父节点
auto node = new ENode();
// 用循环添加小鸟
for (int i = 0; i < num; i++)
{
    node->addChild(birds[i]);
}
// 让所有小鸟一起执行相同的动作
// 比如设置所有小鸟的透明度为 0.5
node->setOpacity(0.5f);
```

<div class="ui info message"><div class="header">Tips </div>
场景的实现机制也类似，每个场景中都有一个根节点，向场景中添加一个精灵，其实是将这个精灵添加到了根节点下面。用 EScene 的`getRoot`函数可以获取这个根节点，所以如果你有需要，只要修改根节点的属性，就可以将场景中的所有元素一起变化。
</div>

节点的常用属性有坐标、宽高、透明度等，获取和设置这些属性的方法大同小异

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

节点的其他常用方法有：

```cpp
// 设置节点的名称
node->setName(L"bird");
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

另外，添加子节点时，最后被添加的节点将显示在画面的最前面。但你也可以在添加节点时设置它的顺序，数字最大的节点将显示在最前面。

```cpp
node->addChild(node2);
node->addChild(node3, -1);
```

例如上面的代码，虽然 node3 在 node2 后面添加，但是它的顺序为负数，比默认的 0 要小，所以绘制时 node2 将遮挡 node3。

<br/>

## EButton 按钮类

按钮是游戏中的常见元素，你可以把一段文字或者一个精灵变成按钮，它的使用方式很简单

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
关于回调函数的使用方法请参考 [关于回调函数](/tutorial/advanced.html#关于回调函数)。
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
把精灵变为按钮后，不需要再将精灵加入到场景中，否则将产生错误。Debug 状态下引擎将检测这种错误，在错误产生时中断程序，并在控制台中给出提示。关于控制台的使用方法请参考 [关于控制台的使用](/tutorial/advanced.html#关于控制台的使用)。
</div>

<br/>

## EButtonToggle 开关按钮类

开关按钮用来实现有 “开” 和 “关” 两种状态的按钮，所以它比普通按钮的状态更多，它可以有 “开” 状态的正常、鼠标移入、按下、禁用，以及 “关” 状态的正常、鼠标移入、按下、禁用。

例如，下面的代码创建了一个可以控制背景音乐的播放与停止的按钮

```cpp
// 创建开状态文字
auto btnTextOn = new EText(L"开");
// 创建关状态文字
auto btnTextOff = new EText(L"关");
// 创建开关按钮
auto button = new EButtonToggle(btnTextOn, btnTextOff);
// 设置点击按钮的回调函数
button->setCallback([=]() {
    // 获取按钮是打开还是关闭
    if (button->isToggleOn()) {
        // 打开状态下，继续播放背景音乐
        EMusicUtils::resumeBackgroundMusic();
    }
    else {
        // 关闭状态下，暂停背景音乐
        EMusicUtils::pauseBackgroundMusic();
    }
});
```

使用`toggle`函数可以切换开关的状态，切换后会自动执行按钮的回调函数。使用`setToggle`可以直接设置按钮的状态为开或者关，这个函数仅仅设置状态，不会执行回调函数。

以刚才创建的按钮为例，下面的代码解释了两个函数的区别

```cpp
// 把按钮的状态设为关闭，此时按钮显示 “关” 文字
button->setToggle(false);
// 切换按钮的状态为打开，并继续播放背景音乐
button->toggle();
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

## EAction 动画类和其派生类

直接修改节点的属性会立即生效，体现不出时间的概念，也没有渐变的效果。想让一个精灵执行一段连贯的动画，需要用到 EAction 动画类。

动画分为`即时动画`、`延时动画`和`组合动画`三种。顾名思义，即时动画是执行后立即结束的动画，延时动画是需要执行一段时间的动画，组合动画是前两种动画的组合。

<div class="ui info message"><div class="header">Tips </div>
EAction 不是节点，它只是描述了节点需要执行的动画的过程。
</div>

目前延时动画有：

- `EActionMoveTo` （在一段时间内移动到指定位置）
- `EActionMoveBy` （在一段时间内移动到相对于当前位置的某个位置）
- `EActionScaleTo` （在一段时间内缩放到指定大小）
- `EActionScaleBy` （在一段时间内缩放到相对于当前大小的某个大小）
- `EActionOpacityTo` （在一段时间内透明度渐变到指定值）
- `EActionOpacityBy` （在一段时间内透明度渐变到相对于当前透明度的某个值）
- `EActionFadeIn` （在一段时间内透明度渐变到完全显示）
- `EActionFadeOut` （在一段时间内透明度渐变到完全消失）
- `EActionRotateTo` （在一段时间内旋转到到指定角度）
- `EActionRotateBy` （在一段时间内旋转到相对于当前角度的某个角度）
- `EActionDelay` （等待一段时间）
- `EAnimation` （帧动画，只有 ESprite 可以执行该动画）

即时动画有：

- `EActionCallback` （立即执行指定的回调函数）

组合动画有：

- `EActionTwo` （组合两个动画，第一个动画执行后开始指定第二个动画）
- `EActionTwoAtSameTime` （组合两个动画，两个动画同时执行）
- `EActionSequence` （组合多个动画，按顺序执行）
- `EActionLoop` （将一个动画循环执行，默认无限循环，也可以指定循环次数）

所有的节点都可以执行动画，用下面的代码让一个精灵在场景中渐渐消失

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 让一个精灵执行
sprite->runAction(fadeOut);
```

你可以用组合动画让一个精灵在消失后自动浮现出来

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new EActionFadeIn(0.5f);
// 组合两个动画
auto two = new EActionTwo(fadeOut, fadeIn);
// 让一个精灵执行
sprite->runAction(two);
```

如果你想让精灵在消失后，旋转 45 度，再浮现出来，可以在两个动画中间加入一个即时动画实现

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个回调函数动画
auto callback = new EActionCallback([=]() {
    sprite->setRotation(45);    // 在回调函数中修改精灵的旋转角度
});
// 创建一个 0.5 秒的淡入动画
auto fadeIn = new EActionFadeIn(0.5f);
// 组合三个动画成顺序动画
auto sequence = new EActionSequence(3, fadeOut, callback, fadeIn);
// 让一个精灵执行
sprite->runAction(sequence);
```

如果你想让精灵淡出的同时向右移动，只需要让它运行两个动画

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 创建一个 1.5 秒的位移动画
// 第二个参数的意思是位移向量，横坐标移动 50 像素，纵向不移动
auto moveBy = new EActionMoveBy(1.5f, EVec(50, 0));
// 让一个精灵执行两个动画
sprite->runAction(fadeOut);
sprite->runAction(moveBy);
```

如果你想让一个精灵停下来，可以调用`stopAllActions`函数

```cpp
// 停止这个精灵的所有动画
sprite->stopAllActions();
```

<div class="ui warning message"><div class="header">Warning </div>
虽然一个精灵可以执行两个动画，但是两个精灵不能执行同一个动画，所以下面的代码是错误的

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 两个精灵执行同一个动画将出现错误
sprite->runAction(fadeOut);
sprite2->runAction(fadeOut);
```

这种情况，应使用 EAction 的 `clone` 函数创建一个相同的动画，并让第二个精灵执行这个克隆后的动画

```cpp
// 创建一个 1.5 秒的淡出动画
auto fadeOut = new EActionFadeOut(1.5f);
// 第一个精灵执行动画
sprite->runAction(fadeOut);
// 第二个精灵执行这个动画的克隆动画
sprite2->runAction(fadeOut->clone());
```
</div>

<br/>

## ESpriteFrame 精灵帧

`ESpriteFrame` 表示精灵的一个画面，它其实是保存了 ETexture 和一个裁剪矩形。

精灵可以直接加载已经创建的精灵帧：

```cpp
// 从本地文件的一张图片创建精灵帧
auto spriteFrame = new ESpriteFrame(L"精灵图片.png");
// 从精灵帧加载一个精灵
auto sprite = new ESprite();
sprite->loadFrom(spriteFrame);
```

精灵帧可以用来给精灵创建帧动画，下面是一段示例代码

```cpp
// 创建帧动画
auto animation = new EAnimation();
// 加载多个精灵帧
animation->addFrame(new ESpriteFrame(L"第一帧.png"));
animation->addFrame(new ESpriteFrame(L"第二帧.png"));
animation->addFrame(new ESpriteFrame(L"第三帧.png"));
// 精灵执行帧动画
sprite->runAction(animation);
```

<div class="ui info message"><div class="header">Tips </div>
这个动画只执行一次就结束了，如果想让它循环执行帧动画，需要用组合动画实现

```cpp
// 把已建好的帧动画组合成循环动画
auto action = new EActionLoop(animation);
// 精灵执行循环的帧动画
sprite->runAction(action);
```
</div>

<br/>
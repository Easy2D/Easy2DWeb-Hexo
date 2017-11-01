---
title: 简单示例
type: "examples"
page: "simple"
---

## Hello World 示例

```cpp
#include <easy2d.h>

int main()
{
    // 创建 App 实例
    App app;
    // 通过 App 创建窗口
    // 可以指定窗口的名称、宽度和高度
    app.createWindow(_T("Hello"), 240, 100);

    // 创建一个场景
    // 注意：必须使用 new 创建场景
    Scene * scene = new Scene();
    // 进入该场景
    app.enterScene(scene);

    // 创建一个文本（必须使用 new 创建对象）
    Text * text = new Text(_T("Hello World"));
    // 设置文本居中显示
    text->setPos((app.getWidth() - text->getWidth()) / 2, 
        (app.getHeight() - text->getHeight()) / 2);
    // 将文本添加到场景中
    scene->add(text);

    // 开始游戏
    app.run();
    return 0;
}
```

<br/>

## Image 示例

```cpp
#include <easy2d.h>

int main()
{
    App app;
    app.createWindow(_T("Hello Image"), 640, 480);

    // 创建图片对象
    // 将图片放在项目目录中即可
    Image * image = new Image(_T("img.png"));
    // 设置图片位置
    image->setPos(0, 0);
    Scene * scene = new Scene();
    // 将图片添加到场景中
    scene->add(image);

    // 进入场景
    // 先添加图片或先进入场景都是允许的，没有必须的顺序
    app.enterScene(scene);
    app.run();
    return 0;
}
```

<br/>

## Text 示例

```cpp
#include <easy2d.h>

int main()
{
    App app;
    app.createWindow(_T("Hello Text"), 640, 360);

    // 创建字体样式
    // auto 指针可以自动判断指针类型
    auto font = new FontStyle(_T("Microsoft Yahei"), 40);
    // 创建文本
    auto text = new Text(250, 150, _T("Easy2d"));
    // 设置文本的字体
    text->setFontStyle(font);
    // 设置文本的颜色
    text->setColor(Color::blue);

    auto scene = new Scene();
    scene->add(text);

    app.enterScene(scene);
    return app.run();
}
```

<br/>

## 按键示例

```cpp
#include <easy2d.h>

// 文本指针
Text * text;

// 按键回调函数
void onKeyDown(VK_KEY key);

int main()
{
    App app;
    app.createWindow(_T("Hello Keyboard"), 480, 360);

    // 创建文本
    text = new Text(_T("Easy2D"));
    // 添加键盘按键监听
    KeyMsg::addListener(_T("TextMove"), onKeyDown);

    auto scene = new Scene();
    scene->add(text);
    app.enterScene(scene);

    return app.run();
}

void onKeyDown(VK_KEY key)
{
    // 按上下左右键移动文字位置
    // 形参表示当前的按键
    if (key == KeyMsg::Up) {
        text->move(0, -2);
    }
    else if (key == KeyMsg::Down) {
        text->move(0, 2);
    }
    if (key == KeyMsg::Left) {
        text->move(-2, 0);
    }
    else if (key == KeyMsg::Right) {
        text->move(2, 0);
    }
}
```
<br/>

## 定时器示例

```cpp
#include <easy2d.h>

int main()
{
    App app;
    app.createWindow(_T("Hello Timer"), 480, 360);

    auto text = new Text(_T("Easy2D"));
    text->setPos(250, 150);

    // 添加一个定时器
    // 这里使用了方便的 Lambda 函数
    Timer::addTimer(
        _T("TextMove"), // 定时器名称
        500,            // 每隔 500ms 运行一次
        [=]() {         // Lambda 函数
            if (text->getX() < 350) {
                // 若文本横坐标小于 350，向右移动文本
                text->move(10, 0);
            }
            else {
                // 否则移除该定时器
                Timer::delTimer(_T("TextMove"));
            }
    });

    auto scene = new Scene();
    scene->add(text);

    app.enterScene(scene);
    return app.run();
}
```
<br/>

## Button 示例

```cpp
#include <easy2d.h>

void onButtonClicked();

int main()
{
    App app;
    app.createWindow(_T("Hello Button"), 360, 360);

    // 创建文字按钮
    auto btn = new TextButton(new Text(_T("退出"), Color::white));
    // 鼠标放在按钮上时文字变绿
    btn->setMouseIn(new Text(_T("退出"), Color::green));
    // 鼠标按下按钮时文字变蓝
    btn->setSelected(new Text(_T("退出"), Color::blue));
    // 设置按钮位置
    btn->setPos(160, 180);
    // 设置点击按钮回调函数
    btn->setClickedCallback(onButtonClicked);

    auto scene = new Scene();
    scene->add(btn);
    app.enterScene(scene);

    return app.run();
}

void onButtonClicked()
{
    // 按下按钮，退出程序
    // 使用 App::get() 获取 main 函数中创建的 App 对象
    App::get()->quit();
}
```

<br/>

## 音乐播放示例

```cpp
#include <easy2d.h>

int main()
{
    App app;
    app.createWindow(_T("Hello Button"), 360, 360);

    auto btn = new TextButton(new Text(_T("播放"), Color::white));
    btn->setPos(160, 180);
    btn->setOnMouseClicked([]() {
        // 点击按钮时播放一段音乐
        MusicUtils::playMusic(_T("your_music.wav"));
    });

    auto scene = new Scene();
    scene->add(btn);
    app.enterScene(scene);

    return app.run();
}
```

<br/>

## 场景切换示例

```cpp
#include <easy2d.h>

void onBtn1Clicked();
void onBtn2Clicked();

int main()
{
    App app;
    app.createWindow(_T("Hello Scene"), 640, 360);

    // 创建文字按钮
    auto btn = new TextButton(new Text(_T("切换场景"), Color::white));
    btn->setPos(450, 250);
    // 设置按下按钮时的回调函数
    btn->setOnMouseClicked(onBtn1Clicked);

    auto scene = new Scene();
    scene->add(btn);
    app.enterScene(scene);
    
    return app.run();
}

void onBtn1Clicked()
{
    // 点击按钮时创建新的场景
    auto scene2 = new Scene();
    // 为新场景添加按钮 2
    auto btn2 = new TextButton(new Text(_T("返回"), Color::white));
    // 设置鼠标移入按钮时的文字
    btn2->setMouseInText(new Text(_T("返回"), Color::green));
    // 设置鼠标按下按钮时的文字
    btn2->setSelectedText(new Text(_T("返回"), Color::lightred));
    btn2->setPos(450, 250);
    // 设置回调函数
    btn2->setOnMouseClicked(onBtn2Clicked);
    // 添加按钮
    scene2->add(btn2);
    // 使用 get 函数在 Lambda 函数中获取 Application 的实例
    Application::get()->enterScene(scene2);
}

void onBtn2Clicked()
{
    // 点击按钮 2，退回到上一个场景
    Application::get()->backScene();
}
```

<br/>

<div class="ui center page-buttons"><a class="ui button page-left-btn" href="index.html"><i class="ui angle left icon"></i>上一篇：基础教程</a><a class="ui button page-right-btn" href="advanced.html">下一篇：进阶教程<i class="ui angle right icon"></i></a></div>

<br/>
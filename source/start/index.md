---
title: 开始使用
icon: flag checkered
type: "start"
---

## Easy2D 是什么 ?

许多初学 `C` 和 `C++` 编程的同学都喜欢试着制作小游戏，但是 Windows 的图形操作晦涩难懂，初学者往往还没开始做游戏就被绘图函数搞得晕头转向了。

有没有这样一种库，让初学者可以专注游戏逻辑本身进行开发呢？

`Easy2D` 就是为此而生游戏引擎，它可以帮助你快速开发高质量的 2D 小游戏，而无需你了解底层的技术。

<br/>

## 如何安装 Easy2D ?

[[点击下载]](/download) Easy2D 的安装包，打开后跟随提示安装即可。

安装程序会检测您已经安装的 `Visual Studio` 版本（目前仅支持2015和2017两个版本），并根据您的选择将对应的引擎库文件安装至 VS 的 include 和 lib 文件夹内。

Easy2D 采用静态链接方式，不会给程序增加任何额外的 DLL 依赖。

> **安装环境**：
> 操作系统版本：Windows 7 及以上操作系统。
> 编译环境版本：Visual Studio 2015 和 2017 (x86 & x64)。

<br/>

<div class="ui info message"><div class="header">Tips </div>
如果需要手动安装，请将安装程序的扩展名改为 `.zip` 后解压缩，然后将安装包里的相关文件分别拷贝到 VS 对应的 include 和 lib 文件夹内。
</div>


<br/>

## 开始使用！

使用 VS 新建一个空的 Win32 控制台程序，在源文件开头引入`easy2d.h`头文件，即可开始使用。

复制下面的代码以创建一个`Hello World`程序。

```cpp
#include <easy2d.h>

int main()
{
    // 创建 EApp 实例
    EApp app;
    
    // 初始化程序，可以指定窗口的名称、宽高等属性
    if (!app.init(L"Hello", 240, 100)) {
        // 初始化失败时，退出游戏
        return 0;
    }
    
    // 创建一个场景
    auto scene = new EScene();
    // 进入该场景
    app.enterScene(scene);

    // 创建一个文本
    auto text = new EText(L"Hello World");
    // 设置文本在窗口上居中
    text->setPos(app.getWidth() / 2, app.getHeight() / 2);
    // 将这个文本添加到场景中
    scene->add(text);

    // 开始游戏
    app.run();

    return 0;
}
```

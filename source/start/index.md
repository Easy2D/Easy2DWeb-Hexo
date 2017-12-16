---
title: 开始使用
icon: flag checkered
type: "start"
---

## Easy2D 是什么 ?

对于编程而言，初学者最需要的不是技能，而是成就感。

很多朋友都喜欢用 C 语言编写自己的小游戏，然而脱离了那个“小黑框框”，前方完全是一片未知的领域。Win32、GUI、消息队列……，到处都是陌生的名词，真的是让人头大。

不过头疼之余，何不来试试 Easy2D 这个神器呢？

Easy2D 大大简化了游戏流程，可以帮助你快速制作 Windows 上的 2D 小游戏。它的特点和它的名字一样，Everything is Easy！

<br/>

## 如何安装 Easy2D ?

下载安装包，打开后跟随提示安装即可。

安装程序会检测您已经安装的 `Visual Studio` 版本，并根据您的选择将对应文件安装至 VS 的 include 和 lib 文件夹内。

Easy2D 不支持 VC6.0，如果你使用的是这个版本，那你需要尝试一下新版的 [Visual Studio](https://www.visualstudio.com/) 了。

> **安装环境**：
> 操作系统：Windows 7 及以上操作系统。
> 编译环境：Visual Studio 2010 (x86) 及以上版本。

<br/>

<div class="ui info message"><div class="header">Tips </div>
如果需要手动安装，可以下载 `.zip` 格式的压缩包，解压后将相关文件分别拷贝到 VS 对应的 include 和 lib 文件夹内，或者你的工程路径下即可。
</div>


<br/>

## 开始使用！

使用 VS 新建一个空的 Win32 控制台程序，在源文件开头引入`easy2d.h`头文件，即可开始使用。

复制下面的代码以创建一个`Hello World`程序。

```cpp
#include <easy2d.h>

int main()
{
    // 初始化游戏，可以指定窗口的名称、宽高等属性
    EApp::init(L"Hello", 240, 100);
    
    // 创建一个场景
    auto scene = new EScene();
    // 进入该场景
    EApp::enterScene(scene);

    // 创建一个文本
    auto text = new EText(L"Hello Easy2D!");
    // 将这个文本添加到场景中
    scene->add(text);

    // 开始游戏
    return EApp::run();
}
```

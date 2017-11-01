---
title: 开始使用
type: "start"
---

# 简介

许多初学 `C` 和 `C++` 编程的同学都喜欢研究一下游戏制作，但往往被基础的图形操作难住，或者苦于没有制作思路，挣扎许久最终放弃。有没有这样一种库，方便初学者编写游戏，而不需要学习底层的绘图函数呢？

`Easy2D`就是这样一款开源的游戏引擎，为C++初学者提供`Windows`桌面游戏的开发方案。Easy2D 所有的类名和函数名都很精简，对初学者非常友好。

<br/>

# 安装

> **运行环境**：
> 操作系统版本：Windows 2000 及以上操作系统。
> 编译环境版本：Visual Studio 2015 和 2017 (x86 & x64)。

<br/>
在首页下载引擎安装包，直接打开安装程序，并跟随提示安装即可。安装程序会检测您已经安装的 `Visual Studio` 版本，并根据您的选择将对应的 `.h` 和 `.lib` 文件安装至 VS 的 include 和 lib 文件夹内。安装程序不会修改注册表或损害你电脑上的任何文件。 

如果需要手动安装，请将安装程序的扩展名改为 `.zip` 后解压缩，然后根据下面的文件列表将安装包里的相关文件分别拷贝到 VS 对应的 include 和 lib 文件夹内。

<br/>

# 文件列表

安装包内的文件列表及对应说明如下：

```cpp
压缩包
  ├ include <文件夹>
  │  └ easy2d.h           // Easy2D 头文件
  ├ lib <文件夹>
  │  ├ x86 <文件夹>
  │  │  ├ Easy2Dd.lib     // Easy2D Debug MBCS 库文件
  │  │  ├ Easy2Ddw.lib    // Easy2D Debug Unicode 库文件
  │  │  ├ Easy2D.lib      // Easy2D Release MBCS 库文件
  │  │  └ Easy2Dw.lib     // Easy2D Releas Unicode 库文件
  │  └ x64 <文件夹>
  │     ├ Easy2Dd.lib     // Easy2D Debug MBCS 库文件(x64)
  │     ├ Easy2Ddw.lib    // Easy2D Debug Unicode 库文件(x64)
  │     ├ Easy2D.lib      // Easy2D Release MBCS 库文件(x64)
  │     └ Easy2Dw.lib     // Easy2D Releas Unicode 库文件(x64)
  └ Setup.hta             // 安装程序
```

<br/>

# 开始使用

使用 VS 新建一个 Win32 控制台程序，在源文件开头引入`easy2d.h`头文件，即可开始使用。

复制下面的代码以创建一个`Hello World`程序。

```cpp
#include <easy2d.h>

void main()
{
    // 创建 App 实例
    App app;
    // 指定窗口的名称、宽度和高度
    app.createWindow(_T("Hello"), 240, 100);

    // 创建一个场景
    Scene * scene = new Scene();
    // 进入该场景
    app.enterScene(scene);

    // 创建一个文本
    Text * text = new Text(_T("Hello World"));
    // 将文本添加到场景中
    scene->add(text);

    // 开始游戏
    app.run();
}
```

<br/>

# 项目依赖

Easy2D 采用静态链接方式，不会给程序增加任何额外的 DLL 依赖。

---
title: 开始使用
icon: flag checkered
type: "start"
---

## Easy2D 是什么 ?

对于编程而言，初学者最需要的不是技能，而是成就感。

如果你喜欢用 C/C++ 编写自己的小游戏，那么 Easy2D 将是个不错的选择，它大大简化了游戏制作过程，可以帮助你快速开发 Windows 上的 2D 小游戏。

它的特点和它的名字一样，Everything is Easy！

## 安装 Easy2D

#### 使用简易安装器

在 [下载](/download) 页面下载安装包，打开后跟随提示安装即可。

安装程序会检测您已经安装的 `Visual Studio` 版本，并根据您的选择将对应库文件解压至 VS 库目录下。

Easy2D 不支持 VS2012 及以下的版本（包括 VC6.0），如果你使用的是低版本的 VS，那你需要尝试一下新版的 [Visual Studio](https://www.visualstudio.com/) 了。

> **安装环境**：
> 操作系统：Windows 7 及以上操作系统。
> 编译环境：Visual Studio 2013 (x86 & x64) 及以上版本。

<br/>

<div class="ui info message"><div class="header">Tips </div>
如果需要手动安装，可以下载 `.7z` 格式的压缩包，解压后将相关文件分别拷贝到 VS 对应的 include 和 lib 文件夹内，或者你的工程路径下即可。
</div>

#### 使用源码编译

1. 打开 [Github 地址](https://github.com/easy2d/easy2d)，点击页面右上角的 `Clone or download`，克隆本仓库或者下载 zip 源码
2. 使用 Visual Studio 2013 或更高版本，打开目录下的 sln 文件
3. 选择合适的编译平台（x86 或 x64）和编译配置（Debug 或 Release），编译 Easy2D 项目
4. 创建你的新项目，并在解决方案管理器右键打开项目属性
5. 把 `C/C++` ==> `附加包含目录` 设置为 Easy2D 项目的 `/Easy2D/include/` 目录
6. 把 `链接器` ==> `附加库目录` 设置为 Easy2D 项目的 `/Easy2D/output/` 目录
7. 开始编写 Easy2D 游戏吧！

## 开始使用！

使用 VS 新建一个空的 C++ 控制台程序，在源文件开头引入`easy2d.h`头文件，即可开始使用。

复制下面的代码以创建一个`Hello World`程序。

```cpp
#include <easy2d/easy2d.h>

using namespace easy2d;

int main()
{
    if (Game::init())                               // 初始化游戏
    {
        auto scene = gcnew Scene;                   // 创建一个场景
        SceneManager::enter(scene);                 // 进入该场景

        auto text = gcnew Text(L"Hello Easy2D!");   // 创建一个文本
        text->setAnchor(0.5, 0.5);                  // 设置文本中心点
        text->setPos(Window::getSize() / 2);        // 文本位置居中
        scene->addChild(text);                      // 将这个文本添加到场景中

        Game::start();                              // 开始游戏
    }
    Game::destroy();
    return 0;
}
```

<br/>

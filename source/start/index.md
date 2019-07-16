---
title: 开始使用
icon: flag checkered
type: "start"
---

## Easy2D 是什么 ?

对于编程而言，初学者最需要的不是技能，而是成就感。

如果你喜欢用 C/C++ 编写自己的小游戏，那么 Easy2D 将是个不错的选择，它大大简化了游戏制作过程，可以帮助你快速开发 Windows 上的 2D 小游戏。

它的特点和它的名字一样，Everything is Easy！

<br/>

## 开始使用 !

#### 运行 Hello World

第一步，打开 [Github 地址](https://github.com/nomango/easy2d)，点击页面右上角的 `Clone or download`，克隆本仓库或者下载 zip 源码。

```
git clone https://github.com/nomango/easy2d.git
```

第二步，使用 Visual Studio 2012 或更高版本，打开目录下的 sln 文件。

第三步，直接点击运行，在几分钟编译后就会自动打开 Hello World 程序。

#### 在其他项目使用

在其他项目使用 Easy2D 时，需要先编译 Easy2D 工程，它会在 `/Easy2D/output/` 目录生成 .lib 文件。

在 VS 中打开你自己项目的项目属性，把 `C/C++` ==> `附加包含目录` 设置为 Easy2D 项目的 `/Easy2D/include/` 目录，再把 `链接器` ==> `附加库目录` 设置为 Easy2D 项目的 `/Easy2D/output/` 目录。

然后就可以在你自己的项目中使用 Easy2D 的功能了。

> 注意：必须先把 Easy2D 项目编译生成 .lib 文件


<br/>

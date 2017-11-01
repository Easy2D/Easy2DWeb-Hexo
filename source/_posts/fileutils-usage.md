---
title: 从文件中快速存取游戏数据
date: 2017-09-20 13:11:52
tags: 技术专区
author: Werelone
---

`1.0.4`版本新增了将数据保存到文件的功能，可以快速存取简单的数据类型。

要使用这个功能，首先应该设置你的`AppName`。AppName 是你游戏的唯一标识，它的默认值和你的窗口名称相同，用于区别其他人做的同类游戏。如果你做了“推箱子”这个游戏而没有设置 AppName，当你运行其他人做的推箱子时，你保存的数据文件就有可能被覆盖。

<!-- more -->

应在创建 App 对象，并调用 createWindow 函数后设置 AppName，例如：

```cpp
App app;
app.createWindow(_T("推箱子"), 640, 480);
app.setAppName(_T("PushBox-Werelone"));   // 可以用作者的名称标识这个游戏
```

> 注意：不要在AppName中设置特殊字符，也尽量不使用中文，防止字符集问题导致错误。

`FileUtils`支持保存的数据类型有`int`、`double`和字符串，对应的函数分别如下

```cpp
// 保存
void FileUtils::saveInt(LPCTSTR key, int value);           // 保存 int 型的值
void FileUtils::saveDouble(LPCTSTR key, double value);     // 保存 double 型的值
void FileUtils::saveString(LPCTSTR key, tstring value);    // 保存 字符串 型的值

// 读取
int FileUtils::getInt(LPCTSTR key, int default);           // 获取 int 型的值
double FileUtils::getDouble(LPCTSTR key, double default);  // 获取 double 型的值
tstring FileUtils::getString(LPCTSTR key, tstring default);// 获取 字符串 型的值
```

第一个参数`key`用于标识保存的这个变量，例如游戏现在进行到第五关，你想保存这个值，就可以使用

```cpp
int level = 5;
FileUtils::saveInt(_T("level"), level);    // 保存当前关卡
```

保存之后，可以根据这个数据的`key`把它取出

```cpp
int level = FileUtils::getInt(_T("level"), 1);    // 取出之前保存的关卡值
```

若使用了一个不存在的`key`，则会用第二个参数的值作为默认值

```cpp
int level = FileUtils::getInt(_T("test"), 1);    // 没有 test 对应的值，则 level 为 1
```

> **注意: AppName、数据的key、保存的字符串中含有中文时，在Unicode工程下会出现错误**

`FileUtils`将数据文件保存在系统的 AppData\Local 文件夹里，数据并不是加密的，你可以在 AppData\Local\你的AppName\DefaultData.ini 中找到保存的数据。
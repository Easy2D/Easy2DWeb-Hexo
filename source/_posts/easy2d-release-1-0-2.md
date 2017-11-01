---
title: Easy2D 1.0.2 发布啦！
date: 2017-09-16 21:55:11
tags: 版本发布
button: 立即下载
button_url: https://gitee.com/werelone/Easy2D/attach_files/download?i=97362&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F01%2FFF%2FPaAvDFnOJuSAfCx0ADO5ZB49aI8668.exe%3Ftoken%3Dae9028bc1f4e5828ed4e697aac5c6252%26ts%3D1507462747%26attname%3DEasy2D_v1.0.2.exe
---
之前 Easy2D 在按钮的处理上一直不尽如人意，但是现在它有了更丰富的功能！

此次版本更新的内容有：

- `增加` 鼠标消息监听（MouseMsg::addListener）
- `增加` 按钮在鼠标移入、移出、按下、抬起时的回调函数
- `更新` 设置按钮回调函数名由`setOnMouseClicked`改为`setClickedCallback`
- `更新` 为 TextButton 和 ImageButton 增加了更简便的构造函数
- `修复` Image 加载空图片时崩溃的 BUG
- `修复` FreePool 允许重复添加对象导致崩溃的 BUG

<!-- more -->
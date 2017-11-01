---
title: Easy2D 1.1.0 发布啦！
date: 2017-09-27 15:26:34
tags: 版本发布
button: 立即下载
button_url: https://gitee.com/werelone/Easy2D/attach_files/download?i=97366&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F01%2FFF%2FPaAvDFnOKoSAWDZcAE31z8sZths147.exe%3Ftoken%3Da1f37f9b9c98c2ae698d4e377812fc0d%26ts%3D1507532474%26attname%3DEasy2D_v1.1.0.exe
---

从上个版本更新动画以来，各种BUG搞得我头都大了，昨天通宵改到两点半终于实现了一个较稳定的版本。

此次版本更新的内容有：

- `新增` 批精灵`BatchSprite`，可以同时管理多个精灵的属性
- `新增` 矩形节点`RectNode`，可以方便的判断矩形碰撞和其他矩形操作
- `新增` 文本类、图片类、精灵类、按钮类现在都继承自`RectNode`
- `修复` 图片默认透明度为 0 的BUG
- `修复` 执行缩放动画时的BUG
- `修复` 帧动画和其他动画一起使用时动画混乱的BUG
- `修复` 按钮设置了不同大小的图片时，范围判断不准确的BUG
- `修复` 上个版本删除定时器会崩溃的BUG


<!-- more -->

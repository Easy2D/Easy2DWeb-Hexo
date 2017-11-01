---
title: Easy2D 1.0.3 发布啦！
date: 2017-09-18 23:01:26
tags: 版本发布
button: 立即下载
button_url: https://gitee.com/werelone/Easy2D/attach_files/download?i=97363&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F01%2FFF%2FPaAvDFnOJ0mAHs9PADPOTStPzfE006.exe%3Ftoken%3D322d619b1ad791cc6aa9b21e33f27769%26ts%3D1507462747%26attname%3DEasy2D_v1.0.3.exe
---
此次版本更新的内容有：

- `新增` Scene 类新增`onEnter`和`onExit`函数，重写这两个函数，它们将在场景载入和退出时自动调用
- `新增` App 类`enterScene`函数增加第二个参数，用于设置场景切换是否可逆。参数为 false 时，不可调用`backScene`函数返回
- `新增` App 类新增`clearScene`函数，清空所有已保存的场景
- `新增` Layer 图层类可以设置是否阻塞消息向下传递
- `更新` 删除鼠标监听函数名由`delListener`改为`deleteListener`
- `修复` 防止了持续按键响应
- `修复` 现在 Shape 可以选择`ROUND`、`SOLID`、`FILL`三种填充类型
- `修复` 重合按钮显示不正常的 BUG
- `修复` 字体类中存在已久的 BUG，曾导致游戏一开始就崩溃


<!-- more -->
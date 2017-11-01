---
title: Easy2D 1.1.0 测试版发布啦！
date: 2017-09-25 16:28:42
tags: 版本发布
button: 立即下载
button_url: https://gitee.com/werelone/Easy2D/attach_files/download?i=97367&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F01%2FFF%2FPaAvDFnOLF-AOsspAEycQpb5FA0690.exe%3Ftoken%3D966aaa30e2fd0529a319ac1a9c393883%26ts%3D1507532474%26attname%3DEasy2D_v1.1.0-beta.exe
---
再也不用为动画头疼了！运行动画只需两步——创建一个动画，然后让一个`精灵(Sprite)`对象运行它！
目前实现的动画共有 14 种，包括 10 种持续性动画（相对位移、绝对位移、透明度渐变、淡入淡出、大小渐变、帧动画、延迟）和 4 种逻辑动作（连续两动画、连续多动画、循环动画、回调动作）

此次版本更新的内容有：

- `新增` 精灵类`Sprite`，可以执行动作`Action`、判断两精灵碰撞等
- `新增` 动作类`Action`，实现了 14 种动作，所有动作都可以暂停、继续和停止
- `新增` 动画管理器`ActionManager`，用于管理所有当前存在的动作
- `新增` 图片类新增透明度设置函数`setOpacity`
- `更新` App 类的大部分函数都改为了静态方法，但仍保留`get`方法以保证兼容性
- `修复` 图片类按比例拉伸函数名改为`setScale`
- `修复` 其他细节上的优化


<!-- more -->

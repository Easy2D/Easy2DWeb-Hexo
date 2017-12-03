---
title: Easy2D v2.0.0-beta2 发布
tags: 版本发布
button: 立即下载
button_url: 'https://codeload.github.com/werelone/Easy2D-release/zip/v1.'
date: 2017-11-09 21:00:27
---
此次版本更新的内容有：

- `新增` EButtonToggle开关按钮类；
- `新增` EMenu菜单类；
- `新增` 监听器增加吞噬消息功能；
- `新增` ENode::setDefaultPivot函数，用于设置节点的默认中心点；
- `更新` EButton的监听方法；
- `更新` 更新了判断点是否在节点内的算法；
- `更新` 中心点默认位置改为(0,0)；
- `修复` EFont某些情况下崩溃的bug；
- `修复` EButton没有获取启用和禁用状态的函数的bug；
- `修复` EButton不显示禁用状态的bug；
- `修复` 所有回调函数不检测空引用就执行的bug；
- `修复` EFileUtils中参数类型与EString不兼容的问题；
- `修复` 子节点与父节点相对位置错误的bug；
- `修复` 修复了其他的一些小bug。


<!--more-->

目前存在的已知 BUG 有：

- 更新节点的二维矩阵变换算法后，场景切换动画不正常的问题
- 循环播放音乐的暂停问题
- 播放音乐时偶尔造成卡顿的问题
- 背景音乐没有预加载函数的问题
- 设置音量后，新添加的音乐音量仍然为最大的问题
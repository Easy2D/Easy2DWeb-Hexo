---
title: Easy2D 1.1.1 发布啦！
date: 2017-10-08 19:20:20
tags: 版本发布
button: 立即下载
button_url: https://gitee.com/werelone/Easy2D/attach_files/download?i=98100&u=http%3A%2F%2Ffiles.git.oschina.net%2Fgroup1%2FM00%2F02%2F07%2FPaAvDFnaQG6AG0nCAChMgzoirfc618.exe%3Ftoken%3De766b74f82b7ecded1366ecde74ac22f%26ts%3D1507475573%26attname%3DEasy2D_v1.1.1.exe
---

此次版本更新的内容有：

- `新增` Image::preload 函数实现图片的预加载
- `新增` Math类和random函数，可以获取任意范围内的随机数
- `新增` 对监听器、定时器和动画加入了等待和唤醒机制
- `新增` BatchSprite::addAction函数，使所有精灵同时执行同一个动画
- `新增` Sprite暂停、继续、停止动画
- `新增` Action::getTarget函数，获取执行该动作的目标
- `更新` 重整了场景切换时的流程，应重写Scene::init函数对场景进行初始化
- `更新` 使用图片缓存机制防止重复加载同一图片
- `更新` 获取鼠标消息改为MouseMsg::getMsg
- `更新` Object不再自动释放，除非调用autoRelease函数将其加入释放管理池中
- `更新` 取消安全宏，改用inline函数代替
- `更新` tstring宏改为类型定义TString
- `更新` 动作初始化的时机改为第一次运行时
- `修复` App::free 和 App::destory 函数造成内存泄漏的bug函数造成内存泄漏的bug
- `修复` BatchNode清空所有节点时，未销毁子节点的bug
- `修复` 创建窗口时重置AppName的bug
- `修复` 重置动画时的一些bug
- `修复` Image裁剪图片范围越界导致图片不显示的bug
- `修复` ActionManager在动作执行时添加动作崩溃的bug
- `修复` Sprite未设置图片时崩溃的bug
- `修复` Action在拷贝和逆向拷贝时导致错误的BUG

<!--more-->
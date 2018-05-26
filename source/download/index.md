---
title: 下载 Easy2D
icon: download
type: "download"
---
## 下载
#### 版本号：2.0.0-beta7

| 文件名                  |   大小   |          |
| ----------------------- |:--------:|:--------:|
| Easy2D-v2.0.0-beta7.exe | 5.62MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta7.exe) |
| Easy2D-v2.0.0-beta7.7z  | 5.69MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta7.7z) |

#### 旧版下载

| 文件名                  |   大小   |          |
| ----------------------- |:--------:|:--------:|
| Easy2D-v2.0.0-beta6.exe | 3.48MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta6.exe) |
| Easy2D-v2.0.0-beta6.7z  | 3.42MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta6.7z) |
| Easy2D-v2.0.0-beta5.exe | 3.21MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta5.exe) |
| Easy2D-v2.0.0-beta5.7z  | 3.15MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta5.7z) |

## 社区交流

游戏制作方面的学习交流欢迎加QQ群 608406540 或 191334430

## 更新内容

### v2.0.0-beta7 （2018-4-24）

- New Features
  - 增加 `Create` 模版函数，创建自动回收的对象
  - `Text` 增加文字描边、下划线、删除线、行间距、对齐方式等样式
  - 增加 `Collision` 类处理碰撞
  - 增加从程序资源加载图片和音乐的功能
  - 增加 `Path::add` 方法，用于添加资源路径
  - 增加 `Path::exists` 方法，用于检测文件夹或文件是否存在
  - 增加 `insert`、`replace`、`format` 等字符串相关操作
  - `Renderer::showFps` 方法显示 FPS
  - 增加 `Shape` 形状类，用于绘制几何图形
  - `Color` 封装为结构体，并增加 Alpha 值
  - `Renderer` 类增加三种线条相交样式
  - 增加 `NodeProperty` 结构体，可以直接获取和设置节点的所有属性
  - 增加 `TextRenderer` 文字渲染器
  - 增加 `VoiceCallback` 音乐回调对象
  - 增加 `Exception` 和 `SystemException` 异常
  - `Window` 类增加 `info`、`warning`、`error`三个弹窗方法
  - 增加 `Animate` 精灵动作，原 `Animation` 表示帧动画序列
  - 增加 `Spawn` 同步动作
  - 增加 `JumpTo` 和 `JumpBy` 跳跃动作
  - 增加 `BoxTransition` 盒状过渡动画
  - 增加 `Shape::Style` 枚举，用于设置 `Shape` 样式
  - 增加 `Text::Style` 结构体，用于设置 `Text` 样式
  - 增加 `LineJoin` 枚举，用于设置相交线样式
  - 增加 `Direction` 枚举，用于描述方向
  - 增加 `Collider::Type` 枚举，用于设置碰撞体类型
  - 增加 `Function` 伪函数类
  - 增加 `Rect` 抽象矩形类
  - 增加 `Player` 音乐播放器
  - 增加 `Music::setFuncOnEnd` 设置播放结束时的执行回调函数

- Trim
  - `Game::init` 方法不再设置窗口标题和大小
  - `Game::start` 方法可设置参数使游戏结束时自动回收资源
  - 不再默认关闭控制台，允许手动关闭
  - `ObjectManager` 更名为 `GC`
  - 不再支持 new 创建对象的自动回收内存
  - 原 `Shape` 形状类更名为 `Collider` 碰撞体
  - `Timer` 定时器类重做
  - `Music` 音乐类重做
  - `Action` 方法重命名
  - `Listener` 监听器重做
  - 部分枚举改为强枚举类型
  - `Transition` 场景切换动画使用 `D2D1Layer` 重做
  - 判断节点是否碰撞及点是否在节点内时，不再判断其子节点
  - 增加 `WARN` 和 `WARN_IF` 用于显示 Runtime 警告
  - `Action` 动作命名精简
  - `Collider`、`Action`、`Shape`、`Transition` 命名规则的类型名置后
  - `Path::createFolder` 方法支持一次性创建多级文件夹
  - 不再允许 `String` 隐式转换成 `const wchar_t *` 类型
  - `Image` 使用 `Rect` 类型的参数进行图片裁剪
  - `Window::createMutex` 整合到 `Game::init` 方法中
  - `Node::onFixedUpdate` 改为 protected 方法

- Fixed
  - 修复了游戏结束时无法完全回收资源的问题
  - `Game::init` 初始化失败时，自动回收过程中产生的资源
  - 修复了未开始游戏时，执行 `Game::resume` 导致黑屏的BUG
  - 修复了暂停游戏后，`Action` 和 `Timer` 执行混乱的BUG
  - 修复无效的倒转动作

- Remove
  - 移除了 `TimerManager` 类
  - 移除了 `MusicManager` 类
  - 移除了 `ASSERT` 宏
  - 移除了 `ActionTwo` 动作
  - 移除了 `Node::onCollide` 和 `Scene::onCollide` 函数
  - 移除了 `Node::onEnter` 和 `Node::onExit` 函数
  - 移除了所有可变参数的方法

<a class="ui button" href="/history">查看历史版本</a>
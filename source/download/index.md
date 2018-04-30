---
title: 下载 Easy2D
icon: download
type: "download"
---
## 下载
#### 版本号：2.0.0-beta7

| 文件名                  |   大小   |          |
| ----------------------- |:--------:|:--------:|
| Easy2D-v2.0.0-beta7.exe | 5.12MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta7.exe) |
| Easy2D-v2.0.0-beta7.7z  | 5.06MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta7.7z) |

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
  - `Text` 增加文字描边、下划线、删除线、行间距、对齐方式等样式
  - 增加 `Text::getLineCount` 方法获取文本显示行数
  - 增加从程序资源加载图片和音乐的功能
  - `String::format` 方法创建格式化字符串
  - `Renderer::showFps` 方法显示 FPS
  - 增加 `Shape` 形状类，用于绘制几何图形
  - 增加 `ShapeStyle` 枚举，用于设置 `Shape` 样式
  - 增加 `TextStyle` 结构体，用于设置 `Text` 样式
  - 增加 `LineJoin` 枚举，用于设置相交线样式
  - 增加 `ColliderType` 枚举，用于设置碰撞体类型
  - 增加创建 `Action` 的静态方法
  - `Color` 封装为结构体，并增加 Alpha 值
  - 增加 `NodeProperty` 结构体，可以直接获取和设置节点的所有属性
  - 增加 `CustomTextRenderer` 文字渲染器
  - VS2012 以上版本支持以初始化列表的方式添加多个参数
  - 支持 VS2010 ，但该版本功能受限

- Trim
  - `Game::init` 方法不再设置窗口标题和大小
  - `Game::start` 方法可设置参数使游戏结束时自动回收资源
  - 原 `Shape` 形状类更名为 `Collider` 碰撞体
  - `Timer` 定时器类重做
  - `Music` 音乐类重做
  - 移除 `Listener` 监听器，其相关函数重做
  - 部分枚举改为强枚举类型
  - `Function` 封装为了伪函数类
  - `Transition` 场景切换动画使用 `D2D1Layer` 重做
  - 判断节点是否碰撞及点是否在节点内时，不再判断其子节点

- Fixed
  - 修复了游戏结束时无法完全回收资源的问题
  - `Game::init` 初始化失败时，自动回收过程中产生的资源

- Remove
  - 移除了 `Font` 结构体
  - 移除了 `TimerManager` 类
  - 移除了 `MusicManager` 类

<a class="ui button" href="/history">查看历史版本</a>
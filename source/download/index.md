---
title: 下载 Easy2D
icon: download
type: "download"
---
## 下载
#### 版本号：2.0.0-beta6

| 文件名                  |   大小   |          |
| ----------------------- |:--------:|:--------:|
| Easy2D-v2.0.0-beta6.exe | 3.48MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta6.exe) |
| Easy2D-v2.0.0-beta6.7z  | 3.42MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta6.7z) |

#### 旧版下载

| 文件名                  |   大小   |          |
| ----------------------- |:--------:|:--------:|
| Easy2D-v2.0.0-beta5.exe | 3.21MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta5.exe) |
| Easy2D-v2.0.0-beta5.7z  | 3.15MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta5.7z) |
| Easy2D-v2.0.0-beta4.exe | 3.00MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta4.exe) |
| Easy2D-v2.0.0-beta4.zip | 9.66MB   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta4.zip) |
| Easy2D-v2.0.0-beta3.exe | 908Kb   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta3.exe) |
| Easy2D-v2.0.0-beta3.zip | 1.54Mb   | [下载](http://easy2d-bucket.oss-cn-hangzhou.aliyuncs.com/release/Easy2D-v2.0.0-beta3.zip) |

## 社区交流

游戏制作方面的学习交流欢迎加QQ群 608406540 或 191334430

## 更新内容

### v2.0.0-beta6 （2018-3-13）

- New Features
  - 添加 `Listener` 类和 `Input::add` 函数，用于监听用户输入
  - `Data` 类储存数据方法增加字段属性

- Trim
  - `File` 类更名为 `Path` 类
  - 空场景运行时不再创建默认场景
  - 所有节点都包含一个默认形状（矩形）
  - 节点发生碰撞时默认不再触发 onCollide 函数

- Fixed
  - 判断点与节点、节点与节点的关系时，也同时判断子节点
  - 修复了VS2012对 std::function 支持不完全造成的问题
  - 修复了 `String` 字符串操作时的一些问题

- Remove
  - 移除了 `String::append` 函数

<a class="ui button" href="/history">查看历史版本</a>
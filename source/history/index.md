---
title: 历史版本
icon: history
type: "history"
---
## 更新日志

### v2.0.0-beta5 （2018-3-6）

- New Features
  - `String`类支持ANSI到Unicode的默认转化
  - Data::saveBool和Data::getBool函数用于储存和取出bool类型的值
  - 单实例进程，防止同一个游戏打开多个窗口
  - `Timer` 类更新，使操作更简易
  - `Action` 类新增 Name 属性

- Trim
  - 取消 VS2010 的支持
  - 所有API的float类型参数均改为double

- Fixed
  - 定时器修改节点属性时闪屏的问题

<br />

### v2.0.0-beta4 （2018-2-11）

- `新增` 支持 XAudio2 音效播放
- `新增` 支持 XInput 获取用户输入
- `新增` Node::onUpdate 函数
- `更新` 命名上的一些更改
- `修复` 修复了一些 BUG

<br />

### v2.0.0-beta3 （2017-12-16）

- `新增` VS2010以上版本支持
- `新增` 字符串操作
- `新增` EApp单例模式重做
- `修复` 修复了一些BUG

<br />

### v2.0.0-beta2 （2017-11-09）

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

<br />

### v2.0.0-beta（2017-11-05）

- 基于 Direct2D 重做的 Easy2D v2.0.0 测试版发布！

<br />

### v1.1.3（2017-10-10）

- `更新` 使用了更精准的 std::chrono 进行计时
- `修复` 定时器的时间同步问题
- `修复` 开始游戏后黑屏闪烁的问题
- `修复` 加入批量节点后的子节点移动问题

<br />

### v1.1.2（2017-10-9）

- `新增` 新增 Timer::addTimer 重载函数，默认时间间隔为20毫秒
- `新增` 新增 Sprite::runAction 函数，实际效果与addAction相同
- `修复` 批量节点的移动问题
- `修复` Sprite 进行碰撞判断时的bug

<br />

### v1.1.1（2017-10-8）

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
- `修复` 消除了不存在pdb的警告，并大幅缩小了静态库大小
- `修复` 其他小幅优化和改动

<br />

### v1.1.0（2017-09-27）

- `新增` 批精灵BatchSprite，可以同时管理多个精灵的属性
- `新增` 矩形节点RectNode，可以方便的判断矩形碰撞和其他矩形操作
- `新增` 文本类、图片类、精灵类、按钮类现在都继承自RectNode
- `修复` 图片默认透明度为 0 的BUG
- `修复` 执行缩放动画时的BUG
- `修复` 帧动画和其他动画一起使用时动画混乱的BUG
- `修复` 按钮设置了不同大小的图片时，范围判断不准确的BUG
- `新增` 精灵类Sprite，可以执行动作Action、判断两精灵碰撞等
- `新增` 动作类Action，实现了 14 种动作，所有动作都可以暂停、继续和停止
- `新增` 动画管理器ActionManager，用于管理所有当前存在的动作
- `新增` 图片类新增透明度设置函数setOpacity
- `更新` App 类的大部分函数都改为了静态方法，但仍保留get方法以保证兼容性
- `修复` 图片类按比例拉伸函数名改为setScale
- `修复` 其他细节上的优化

<br />

### v1.0.4（2017-09-20）

- `新增` App 类增加setAppName和getAppName函数，用于设置你游戏的唯一标识
- `新增` FileUtils 增加了int、double、string类型的数据存取功能
- `新增` MusicUtils 现在可以设置游戏内的音量大小了
- `更新` 重新整理了函数的命名，新的命名规则
- `更新` 去除了 MouseMsg 的getMsg函数
- `修复` MusicUtils 无法循环播放音乐的 BUG
- `修复` Image 裁剪图片和拉伸图片时的 BUG

<br />

### v1.0.3（2017-09-18）

- `新增` Scene 类新增onEnter和onExit函数，重写这两个函数，它们将在场景载入和退出时自动调用
- `新增` App 类enterScene函数增加第二个参数，用于设置场景切换是否可逆。参数为 false 时，不可调用backScene函数返回
- `新增` App 类新增clearScene函数，清空所有已保存的场景
- `新增` Layer 图层类可以设置是否阻塞消息向下传递
- `更新` 删除鼠标监听函数名由delListener改为deleteListener
- `修复` 防止了持续按键响应
- `修复` 现在 Shape 可以选择ROUND、SOLID、FILL三种填充类型
- `修复` 重合按钮显示不正常的 BUG
- `修复` 字体类中存在已久的 BUG，曾导致游戏一开始就崩溃

<br />

### v1.0.2（2017-09-13）

- `增加` 鼠标消息监听（MouseMsg::addListener）
- `增加` 按钮在鼠标移入、移出、按下、抬起时的回调函数- 
- `更新` 设置按钮回调函数名由setOnMouseClicked改为setClickedCallback
- `更新` 为 TextButton 和 ImageButton 增加了更简便的构造函数
- `修复` Image 加载空图片时崩溃的 BUG
- `修复` FreePool 允许重复添加对象导致崩溃的 BUG

<br />

### v1.0.1（2017-09-10）

- `更新` Application 类更名为 App
- `更新` MouseMsg 鼠标消息检测的相关函数名改动
- `增加` 现在低版本编译器下会报错
- `增加` 现在创建窗口时自动在屏幕居中
- `修复` 加载游戏阶段显示黑窗口的 BUG
- `修复` 修改窗口大小时的一个 BUG
- `修复` FreePool 有时造成内存泄漏的 BUG

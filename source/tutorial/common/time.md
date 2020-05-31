---
title: 入门教程
subtitle: [ [基础功能, /tutorial/common/], Time时间类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/common/game.html],
        [Window 窗口类,/tutorial/common/window.html],
        [Input 输入类,/tutorial/common/input.html],
        [Time 时间类,/tutorial/common/time.html],
        [Renderer 渲染器,/tutorial/common/renderer.html],
        [Logger 日志,/tutorial/common/logger.html],
        [Point 坐标点,/tutorial/common/point.html],
        [Size 大小,/tutorial/common/size.html],
        [String 字符串,/tutorial/common/string.html],
        [Color 颜色,/tutorial/common/color.html],
        [KeyCode 键值,/tutorial/common/keycode.html],
        [Image 图片类,/tutorial/common/image.html],
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数封装器,/tutorial/common/function.html]
    ]
---

## Time 时间类

Time 类用来管理游戏的时间，它辅助 Game 类处理何时更新游戏、何时释放CPU等。

Time 类提供给开发者的函数有限，如下：

```cpp
// 获取上一帧与当前帧的时间间隔（秒）
float dt = Time::getDeltaTime();

// 获取上一帧与当前帧的时间间隔（毫秒）
unsigned int dtMs = Time::getDeltaTimeMilliseconds();

// 获取游戏总时长（秒）
float totalTime = Time::getTotalTime();

// 获取游戏总时长（毫秒）
unsigned int totalTimeMs = Time::getTotalTimeMilliseconds();
```

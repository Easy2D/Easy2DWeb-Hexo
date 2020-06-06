---
title: 入门教程
subtitle: [ [基础功能, /tutorial/base/], Time时间类]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Game 游戏类,/tutorial/base/game.html],
        [Window 窗口类,/tutorial/base/window.html],
        [Input 输入类,/tutorial/base/input.html],
        [Time 时间类,/tutorial/base/time.html],
        [Renderer 渲染器,/tutorial/base/renderer.html],
        [Logger 日志,/tutorial/base/logger.html]
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

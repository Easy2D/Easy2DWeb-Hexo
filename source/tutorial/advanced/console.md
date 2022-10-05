---
title: 入门教程
subtitle: [ [进阶内容, /tutorial/advanced/], 关于控制台]
icon: idea
type: "tutorial"
toclinker: 
    [
        [节点碰撞,/tutorial/advanced/collision.html],
        [垃圾回收,/tutorial/advanced/gc.html],
        [关于控制台,/tutorial/advanced/console.html],
        [更多,/tutorial/advanced/more.html]
    ]
---

## 控制台的使用

控制台可以帮助你更轻松地进行 DEBUG，无论是 Win32 应用程序还是 Win32 控制台程序，你都可以调用`Logger::showConsole`函数来开启或关闭控制台。

```cpp
// 开启控制台
Logger::showConsole(true);
```

有些时候，你的错误代码导致游戏异常崩溃，就可以在 Debug 模式下开启控制台，查看引擎给出的提示和建议。Debug 下引擎会把大部分错误给出提示。

比如，当你写下了如下代码时

```cpp
auto node1 = gcnew Node;
auto node2 = gcnew Node;
node1->addChild(node2);
node2->addChild(node1);
```

一个节点不可能同时是另一个节点的子节点和父节点，所以这段代码有一个隐蔽的逻辑错误，这时引擎将自动触发断点

![触发了断点](/assets/images/tutorial/console1.png)

同时控制台中会给出具体的提示

![控制台中的提示](/assets/images/tutorial/console2.png)

有些时候错误并不导致程序崩溃，引擎可以自动处理这些错误，然后在控制台中给出警告。比如当你给精灵设置了一张不存在的图片时，游戏仍然能正常开始，但是控制台中显示了警告

![控制台中的警告](/assets/images/tutorial/console3.png)

<br />

## 在 Win32 程序下使用 Easy2D

引擎在 Win32 应用程序和 Win32 控制台程序下的代码是一样的，只是两种模式下主函数的写法不同。

写控制台程序时，只需声明 main 函数就可以：

```cpp
int main()
{
	return 0;
}
```

写 Win32 程序时，主函数变得有些复杂，但我们可以把它和控制台下的 main 函数一样使用：

```cpp
int WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int)
{
	return 0;
}
```

虽然引擎支持在控制台程序下工作，但是**不推荐**这样使用，因为游戏并不需要控制台。

<br />

---
title: 基础教程
type: "examples"
page: "basic"
---

## App 类

`App`是引擎的基础类，用于控制和获取游戏窗口的所有属性。

例如，你可以用下面的代码创建一个标题为`Hello`，宽度为640像素，高度为480像素的窗口。

```cpp
App app;
app.createWindow(_T("Hello"), 640, 480);
```

但是这个窗口不会显示，因为游戏并没有开始。

游戏的开始是建立在`场景(Scene)`上的，一个场景代表游戏中的一个界面，你的游戏可以有类似主菜单、游戏界面、结束界面等多个场景。

```cpp
// 创建一个空场景
Scene* scene = new Scene();
```

`App`类通过`enterScene`和`backScene`函数控制场景之间的切换。进入刚刚创建的场景，我们就可以开始游戏了！

```cpp
// 进入刚刚创建的场景
app.enterScene(scene);
// 开始游戏
app.run();
```

<br/>

## Scene 类

每个`Scene`类都代表一个界面，使用它的`add`函数可以向这个界面添加节点（元素）。`Easy2D`提供了许多游戏之中常用的节点，比如`Text(文本)`、`Image(图片)`、`ImageButton(图片按钮)`等等。

我们将一张图片复制到工程目录下，并用下面的代码将它加入到当前的场景中。

```cpp
Scene* scene = new Scene();
// 创建一个图片对象
Image* img = new Image(_T("图片名.png"));
// 向场景中添加这张图片
scene->add(img);
```

建议在工程目录下新建一个`res`文件夹，将游戏中用到的所有图片都放到这个文件夹中，然后使用下面的方法创建图片对象。

```cpp
Image* img = new Image(_T("res/图片名.png"));
```

<br/>

<div class="ui center page-buttons"><a class="ui button page-right-btn" href="simple.html">下一篇：简单示例<i class="ui angle right icon"></i></a></div>

<br/>
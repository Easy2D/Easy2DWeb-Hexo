---
title: 入门教程
subtitle: [ [常用元素简介, /tutorial/common/], Node节点]
icon: idea
type: "tutorial"
toclinker: 
    [[Node 节点类,/tutorial/common/node.html],
    [Text 文本类,/tutorial/common/text.html],
    [Font 字体类,/tutorial/common/font.html],
    [Sprite 精灵类,/tutorial/common/sprite.html],
    [Image 图片类,/tutorial/common/image.html],
    [Button 按钮类,/tutorial/common/button.html],
    [ButtonToggle 开关按钮类,/tutorial/common/buttontoggle.html],
    [Menu 菜单类,/tutorial/common/menu.html]]
---

## Node 节点类

Node 是一个抽象的含义，它表示场景中的一个元素。

```cpp
auto node = new Node();    // 创建一个空节点
```

节点的常用属性有`名称(name)`、`坐标(pos)`、`宽度(width)`、`高度(height)`、`缩放程度(scale)`、`旋转角度(rotation)`、`不透明度(opacity)`、`中心点(pivot)`等。
使用`get`+`属性名`的函数可以获取节点的属性，`set`+`属性名`的函数可以修改它的属性，如下所示。

```cpp
// 使用 set + Pos 修改节点坐标
node->setPos(posX, posY);
// 可以单独设置横坐标和纵坐标
node->setPosX(posX);
node->setPosY(posY);
// 使用 get + Pos 可以获取节点坐标
Point pos = node->getPos();
float posX = node->getPosX();
float posY = node->getPosY();
```

<div class="ui info message"><div class="header">Tips </div>
`Point`是一个结构体，它表示一个坐标，它有 x 和 y 两个成员变量。
```cpp
Point p1;          // 创建一个 (0, 0) 坐标
Point p2(10, 10);  // 创建一个 (10, 10) 坐标
```
</div>

有时也许你需要区分不同的节点，那么可以设置它的名称

```cpp
node->setName(L"name_test");    // 设置节点名称
String name = node->getName();  // 获取节点名称
```

<div class="ui info message"><div class="header">Tips </div>
`String`类表示一个字符串。
```cpp
String str = L"Hello World";
```
</div>

节点以树形模型储存，每个节点都只能有一个父节点，和任意数量的子节点，一个树状模型如下图所示。

![节点的树型模型](/assets/images/tutorial/tree.png)

`Node::addChild`函数用来添加子节点。例如，下面的代码将 node2 作为了 node1 的子节点：

```cpp
auto node1 = new Node();
auto node2 = new Node();
node1->addChild(node2);    // 添加子节点
```

node1 和 node2 互为父子关系，node1 是 node2 的父节点，node2 是 node1 的子节点。当父节点被添加到场景中时，子节点也会一起进入场景，当父节点从场景中删除时，子节点也会消失。

<div class="ui info message"><div class="header">Tips </div>
节点的属性是向下传递的。因此，移动父节点的坐标，所有的子节点都会跟着一起移动，旋转父节点，所有的子节点会跟着一起旋转，所以你可以用 Node 实现任意形式的层次结构。
</div>

`Node::removeChild`函数用于删除子节点，只有当这个节点确实是子节点时，这个函数才调用成功。

```cpp
// 移除子节点
node->removeChild(node2);
```

`Node::getChildrenCount`函数用于获取子节点的数量，如下所示。

```cpp
// 获取子节点的数量
int num = node->getChildrenCount();
```

另外，添加子节点时，先被添加的节点会被后添加的节点遮挡。例如，下面的代码中，node3 将遮挡 node2。

```cpp
node1->addChild(node2);
node1->addChild(node3);
```

你可以在添加节点时指定它的渲染顺序。例如下面的代码，虽然 node3 在 node2 后面添加，但是 node2 的顺序为 2，比 node3 大，所以屏幕上 node2 将遮挡 node3。

```cpp
node1->addChild(node2, 2);
node1->addChild(node3, 1);
```

**根节点**是树型模型最顶端的节点，场景包含了根节点，所以屏幕上所有的节点都是它的子节点。将一个精灵添加入场景，其实是把精灵加入了场景的树型模型中。Easy2D 会遍历场景的树，对树上的所有节点做出处理。

![场景和节点的关系](/assets/images/tutorial/scene.png)

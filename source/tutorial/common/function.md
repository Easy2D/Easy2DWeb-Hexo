---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], Function函数包装器]
icon: idea
type: "tutorial"
toclinker: 
    [
        [Point 坐标点,/tutorial/common/point.html],
        [Size 大小,/tutorial/common/size.html],
        [String 字符串,/tutorial/common/string.html],
        [Color 颜色,/tutorial/common/color.html],
        [KeyCode 键值,/tutorial/common/keycode.html],
        [MouseCode 鼠标键值,/tutorial/common/mousecode.html],
        [Image 图片类,/tutorial/common/image.html],
        [Font 字体,/tutorial/common/font.html],
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## Function 函数包装器

Function 类是一种函数包装器，它是 std::function 的别名。

因为 Function 只是简单的给 std::function 起了个别名，所以有关 Function 的用法你都可以在各大学习网站上找到。

在本教程中，只简单解答一下新手使用 Function 时的疑问：

---

**Q:** Function最常见的用法有哪些？  
**A:**  

一个 Function 对象可以包装下列这几种可调用元素类型：函数、函数指针、类成员函数指针、或任意类型的函数对象（例如重载了 operator() 操作的结构体）

举例说明：

- 包装函数或函数指针

```cpp
void Func1()
{
    // ...
}

bool Func2(int, int)
{
    // ...
}

class T
{
public:
    static void Func3()
    {
        // ...
    }
};

// 包装不同类型的函数
Function<void()> func1 = Func1;
Function<bool(int, int)> func2 = Func2;
Function<void()> func3 = T::Func3;
```

- 包装类成员函数

```cpp
class T
{
public:
    void Func()
    {
        // ...
    }
};

// T 类型的变量
T t;

// 包装类成员函数
Function<void()> func = std::bind(&T::Func, &t);
```

- 包装任意类型的可调用对象（Callable Object）

```cpp
// Lambda 函数
auto lambda = []()
{
    // ...
};

// 包装 Lambda 函数
Function<void()> func = lambda;
```

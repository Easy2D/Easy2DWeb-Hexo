---
title: 入门教程
subtitle: [ [基础类型, /tutorial/common/], String字符串]
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
        [DrawingStyle 绘图样式,/tutorial/common/drawing-style.html],
        [Listener 监听器,/tutorial/common/listener.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## String 字符串

String 类是储存字符串内容的容器，是 std::string 类型的别名。

它曾经是 Easy2D 中实现的一种同时支持 char* 和 wchar_t* 的字符串类型，后来为了程序的兼容性，Easy2D 抛弃了这种方式，而选择 C++ 标准库提供的字符串类型。

因为 String 只是简单的给 std::string 起了个别名，所以有关 String 的用法你都可以在各大学习网站上找到。

在本教程中，只简单解答一下新手使用 String 时的疑问：

---

**Q:** 我的代码需要用到 `wchar_t*/WCHAR*/PWSTR` 类型的字符串，如何从 Easy2D String 转换？  
**A:**  
Easy2D 提供了 `NarrowToWide` 和 `WideToNarrow` 函数可以将字符串在 ASCII（std::string） 和 Unicode（std::wstring） 之间进行转换。

---

**Q:** std::wstring 和 std::string 在使用时有什么不同？  
**A:**  
std::wstring 是 std::string 的 Unicode 版本，其中 w 的意思是 wide（宽），因为其储存的 wchar_t 是宽字符类型；使用时需要注意的地方有，将 std::cout、std::cin、std::to_string 等相关函数替换为 std::wcout、std::wcin、std::to_wstring 的宽字符版本。

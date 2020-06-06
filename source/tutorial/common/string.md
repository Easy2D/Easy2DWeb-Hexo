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
        [TextStyle 文字样式,/tutorial/common/textstyle.html],
        [Function 函数包装器,/tutorial/common/function.html]
    ]
---

## String 字符串

String 类是储存字符串内容的容器，是 std::wstring 类型的别名。

它曾经是 Easy2D 中实现的一种同时支持 char* 和 wchar_t* 的字符串类型，后来为了程序的兼容性，Easy2D 抛弃了这种方式，而选择 C++ 标准库提供的 std::wstring。

因为 String 只是简单的给 std::wstring 起了个别名，所以有关 String 的用法你都可以在各大学习网站上找到。

在本教程中，只简单解答一下新手使用 String 时的疑问：

---

**Q:** 为什么Easy2D中所有的字符串都以 L 开头？以 L 开头的字符串有什么不同？  
**A:**  
C++中以双引号括起来的字符串类型为 `const char*`，其中的字符都是 ASCII 码；以 L 开头的字符串类型为 `const wchar_t*`，其中的字符都是 Unicode 字符；在 Windows 编程中，推荐在代码中使用 Unicode 字符。

---

**Q:** std::wstring 和 std::string 在使用时有什么不同？  
**A:**  
std::wstring 是 std::string 的 Unicode 版本，其中 w 的意思是 wide（宽），因为其储存的 wchar_t 是宽字符类型；使用时需要注意的地方有，将 std::cout、std::cin、std::to_string 等相关函数替换为 std::wcout、std::wcin、std::to_wstring 的宽字符版本。

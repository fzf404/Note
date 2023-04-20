(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{834:function(n,t){n.exports='\x3c!--\ntitle: 07-内存+变量\nsort:\n--\x3e\n\n# 内存管理\n\n## 存储期\n\n> 编译器会自动判断存储期\n\n- 静态存储期`static`\n- 线程存储期\n- 自动存储期`auto`\n- 动态分配存储期\n\n### 静态存储期\n\n> 只会被初始化一次\n\n```c\nint * test()\n{\n    static int ct = 404;\n    // 将ct设置为静态存储期，函数运行完毕后不回收内存。\n    return &ct;\n}\n```\n\n### 外部变量\n\n> `extern`\n\n```c\nint out;\nvoid magic()\n{\n    extern int out;\n    // 或直接使用out\n}\n```\n\n### 寄存器变量\n\n> `register int quick;`\n>\n> 寄存器不足编译器可能忽略\n>\n> 不能使用地址运算符\n\n### 随机数\n\n```c\n#include <stdlib.h>\n\nint main()\n{\n    printf("%d",rand());\n    // 生成一定范围内的随机数\n    rand()%100;\n}\n```\n\n## 分配内存\n\n> `malloc()`与`free()`\n>\n> 包含在`stdlib.h`中\n\n```c\nint *ptr;\n// 创建int数组，长度为10\nptr = (int *) malloc(10 * sizeof(int))\n// 释放内存\nfree(ptr)\n```\n'}}]);
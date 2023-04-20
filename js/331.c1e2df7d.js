(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{959:function(n,e){n.exports='\x3c!--\ntitle: 07-PE结构\nsort:\n--\x3e\n\n# PE 结构\n\n## 硬盘与内存\n\n![image-20201023193155503](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201023193202.png)\n\n> 程序在硬盘与内存中的不同\n>\n> 注：内存倒序\n\n1. 节省空间\n\n   > 硬盘对齐：200h\n   >\n   > 内存对齐：1000h\n   >\n   > 是否相同由编译器决定\n   >\n   > 目前大多应用硬盘与内存对齐\n\n## PE 头解析\n\n> 一个 exe 可能会存在多个 PEheader\n\n<img src="https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201023194859.jpg" alt="PE结构"  />\n\n> 在头部找出下一区块的偏移：E0\n>\n> 第二区块开头为：00PE\n\n### Dos 头\n\n![image-20201119213759089](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201119213806.png)\n\n| 标记           | 用途                                |\n| -------------- | ----------------------------------- |\n| WORD e_magic   | "MZ 标记" 判断是否为可执行文件      |\n| DWORD e_lfanew | PE 头相对于文件的偏移，定位 PE 文件 |\n\n### 标准 PE 头\n\n![image-20201119213824240](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201119213824.png)\n\n| 标记                      | 用途                                                                                         |\n| ------------------------- | -------------------------------------------------------------------------------------------- |\n| WORD Machine              | 程序运行的 CPU 型号<br />0x0 任何处理器<br />0x14C 386 及后续处理器                          |\n| WORD NumberOfSections     | 节的总数，新增节或合并节需要修改                                                             |\n| WORD SizeOfOptionalHeader | 可选 PE 头的大小<br />32 位 PE 文件默认 E0h<br />64 位 PE 文件默认为 F0h<br />大小可以自定义 |\n\n### 可选 PE 头\n\n> 最多 E0 字节\n\n![image-20201119213839642](https://img-1257284600.cos.ap-beijing.myqcloud.com/2020/20201119213839.png)\n\n| 标记                      | 用途                                                                                     |\n| ------------------------- | ---------------------------------------------------------------------------------------- |\n| WORD Magic                | 文件类型<br />10B 32 位下的 PE 文件<br />20B 64 位下的 PE 文件                           |\n| DWORD AddressOfEntryPoint | 程序入口                                                                                 |\n| DWORD ImageBase           | 内存镜像基址                                                                             |\n| DWORD SectionAlignment    | 内存对齐                                                                                 |\n| DWORD FileAlignment       | 文件对齐                                                                                 |\n| DWORD SizeOfImage         | 内存中整个 PE 文件的映射的尺寸<br />可以大于实际值<br />必须是 SectionAlignment 的整数倍 |\n| DWORD SizeOfHeaders       | 所有头+节表按照文件对齐后的大小<br />否则加载会出错                                      |\n\n### 文件到内存\n\n| FileBuffer | ImageBuffer      |\n| ---------- | ---------------- |\n| Dos 头     | Dos 头           |\n| PE 头      | PE 头            |\n| Option PE  | Option PE        |\n| 节表       | [转到内存中拉伸] |\n|            | Code             |\n|            | Data             |\n|            | Resources        |\n'}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{903:function(n,t){n.exports="\x3c!--\ntitle: 03-Python高级特性\nsort:\n--\x3e\n\n## 列表生成式\n\n- 常规写法与生成式写法：\n\n  ```python\n  L = []\n  for x in range(1, 11):\n      L.append(x * x)\n\n  L = [x * x for x in range(1, 11)]\n  #将生成式提前，条件是放后\n  ```\n\n- [元素 for ] 要生成的元素在前，for 循环在后。\n\n  > ```python\n  > [m + n for i in 'ABC' for n in 'XYZ']\t\t\t\t# 生成全排列\n  >\n  > [k + '=' + v for k, v in d.items()]\t\t\t\t\t# 字典变列表\n  >\n  > L = [s.lower() for s in L2 if isinstance(s,str)]\t# 增加判断条件\n  >\n  > # 练习\n  > # 1. 100内的全部偶数\n  > # 2. 100内的全部质数\n  > ```\n\n## 生成器\n\n- 使用`yield`的函数成为生成器。\n\n- 生成器是一个返回迭代器的函数。\n\n- 保存生成式算法\n\n  > next() 调用下一项\n  >\n  > yield 中断，下次从这里执行\n  >\n  > - 函数是顺序执行，遇到`return`语句或者最后一行函数语句就返回。\n  > - 而 generator 的函数，在每次调用`next()`的时候执行，遇到`yield`语句返回，再次执行时从上次返回的`yield`语句处继续执行。\n  > - 注：必须不断递归才能代替 next 函数。\n\n  ```python\n  # 生成器\n  def n1():\n      a = 0\n      while True:\n          yield a\n          a = a+1\n\n  ne = n1()\n  g1 = next(ne)\n  g2 = next(ne)\n  pint(g1,g2)\n  ```\n\n## 迭代器\n\n- 迭代是 Python 最强大的功能之一，是访问集合元素的一种方式。\n\n- 迭代器有两个基本的方法：**iter()** 和 **next()**。\n\n  ```python\n  list = [1, 2, 3, 4]\n  it = iter(list)f\n  print(next(it))\n  ```\n\n- 列表、字典、字符串都是`Iterable`【可迭代对象】\n\n- ```python\n  from collections.abc import Iterable\n  print(isinstance(对象, Iterable))\t\t\t\t\t# 判断是否为可迭代对象\n  ```\n\n- 可以被`next()`函数调用并不断返回下一个值的对象称为迭代器：`Iterator`。\n\n- ```python\n  from collections import Iterator\n  >>> isinstance((x for x in range(10)), Iterator)\n  ```\n\n- 可以使用`isinstance()`判断一个对象是否是`Iterator`对象。\n\n- 生成器全都是`Iterator`对象。\n\n- 可以使用`iter()`函数把`list、dict、str`等变成`iter`函数。\n\n- `Iterator`的计算是惰性的，只有在需要返回下一个数据时它才会计算。\n\n- 建立一个迭代器：\n\n  ```python\n  class MyNumbers:\n    def __iter__(self):\n      self.a = 1\n      return self\n\n    def __next__(self):\n      x = self.a\n      self.a += 1\n      return x\n\n  myclass = MyNumbers()\n  myiter = iter(myclass)\n\n  print(next(myclass))\n  print(next(myclass))\n  ```\n"}}]);
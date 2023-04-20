(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{840:function(n,t){n.exports='\x3c!--\ntitle: 01-Go入门\nsort:\n--\x3e\n\n# Go 入门\n\n> 一种介于面向对象和面向过程之间的语言\n\n## HelloWorld\n\n```go\npackage main\n\nimport "fmt"\n\nfunc main(){\n\tfmt.Println("Hello, World!")\n}\n```\n\n> 运行\n\n```powershell\ngo run hello.go\ngo build hello.go\n```\n\n## 基础语法\n\n```go\n// 变量声明 类型在后\nvar age int = 18\nage = 18\n// 使用 :=\nname := "fzf404"\n\n// 支持 && || ！运算\nif a > 403 && a < 405 {\n    fmt.Println("You Maybe 404")\n} else if a != 0 {\n    fmt.Println("You Not Zero")\n} else {\n    fmt.Println("You Are Zero")\n}\n// 死循环\nfor {\n    fmt.Print(i)\n}\n// for循环\nfor i := 0; i < 5; i++ {\n    fmt.Print(i)\n}\n\nstr := []string{"1","2","3"}\n// 高级for循环\nfor index,data := range str{\n  fmt.Println(index,data)\n}\n```\n\n## 数据结构\n\n```go\n// 数组\nvar a [3]int\na := [3]int{1,2,3}\t// 复合字面值初始化\na := [...]string{\n    "123",\n    "234",\n    "345"\n}\n\n// 循环遍历\nfor i :=0 ; i < len(a); i++ {\n    fmt.Print;n(a[i])\n}\n// range循环\nfor index,data := range a {\n  fmt.Println(index,data)\n}\n\n// 切片 可变长数组\nvar b = []string{"1","2","3"}\nb := []string{"1","2","3"}\nb = b.append(b,"4")\nbs = b[1:2]\t\t// q\'w\n// for循环遍历数组\nfor k, v := range b {\n    fmt.Println(k, v)\n}\n// Out\n0 1\n1 2\n2 3\n3 4\n\n// 映射：字典or键值对\n// 使用make创建map对象\nitems := make(map[string]int)\n// 对象赋值\nitems["first"] = 1\nitems["mid"] = 2\nitems["last"] = 4\n// 删除键值对\ndelete(items, "mid")\n// 快速创建\npayload := map[string]interface{}{\n  "UserName": req.UserName,\n}\n// 遍历\nfor k, v := range items {\n    fmt.Println(k, v)\n}\n```\n\n## 函数\n\n```go\n// 单返回值\nfunc add(x int, y int) int {\n\treturn x + y\n}\n// 多返回值\nfunc math(x int, y int) (int,int) {\n\treturn x * y, x / y\n}\n```\n\n## 指针\n\n```go\nn :=0\n// 正常n的值无法修改全局变量\n// 传入指针\nfunc prt_test(n *int) {\n\t*n = *n + 1\n}\n\nptr_test(n)\t// n==1\n```\n\n## 结构体\n\n> 虽然没有 Class，但拥有可定义方法的结构体\n\n```go\n// 定义变量类型\ntype myFloat float64\n\n// 定义结构体\ntype myFriend struct {\n\tname string\n\tage  int\n}\n// 为结构体定义方法\n// func(变量名 结构体名) 方法名()\nfunc (getone myFriend) showName() {\n\tfmt.Println(getone.name)\n}\n// 使用指针修改值\nfunc (getone *myFriend) setAge(newAge int){\n\t(*getone).age = newAge\n}\n\nfunc main() {\n\tnewPerson := MyFriend{name: "fzf", age: 18}\n\tfmt.Println(newPerson)\n    // {fzf 18}\n    newPerson.showName()\n    // fzf\n    newPerson.setAge(20)\n    fmt.Println(newPerson)\n    // {fzf 20}\n}\n```\n'}}]);
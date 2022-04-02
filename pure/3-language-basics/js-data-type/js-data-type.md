**概念**、**检测方法**、**转换方法**

### 基础类型

undefined

Null

Boolean

String

Number

Symbol

Bigint

### 引用类型

Array - 数组对象、

RegExp - 正则对象、

Date - 日期对象、

Math - 数学函数、

Function - 函数对象



1.  基础类型存储在**栈内存**，被引用或拷贝时，会创建一个完全相等的变量；

2.  引用类型存储在**堆内存**，存储的是地址，多个引用指向同一个地址，这里会涉及一个 “**共享**” 的概念。

### 数据类型检测

1. typeof
2. instanceof
   1. instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
   2. 而 typeof 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 function 类型以外，其他的也无法判断
3. Object.prototype.toStringq

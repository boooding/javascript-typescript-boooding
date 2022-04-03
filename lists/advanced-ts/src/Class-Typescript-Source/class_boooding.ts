class Class_boooding {
    // 对象的变量=实例的变量=类的【非静态的】属性
    public name: string | undefined;
    public age: number = 0;
    constructor(name_: string, age_: number) {
        this.name = name_;
        this.age = age_
    }
}

/**
 * 1。 在heap中为类对对象实例分配一个空间
 * 2。 调用对应的构造函数，并且把参数赋值给对象的属性
 * 3。 把对象赋值给对象变量
 */

let a_class = new Class_boooding('boooding', 21);

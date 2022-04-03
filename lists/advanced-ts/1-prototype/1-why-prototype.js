function QQUsers (QQNo_, QQAge_, QQMark_) {
    this.QQNo = QQNo_;
    this.QQAge = QQAge_;
    this.QQMark = QQMark_;
    // 引用对象类型=引用类型=对象类型=引用数据类型
    // 数组也是一种引用数据类型
    this.commonfriends = ['a', 'b', 'c', 'd']//共同好友
    // 方法也是一种引用数据类型
    this.show = function () {
        console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`)
        console.log(`共同的好友是:${this.commonfriends}`);
    }
}
// 对象也叫实例(instance)
// QQ_booding叫做对象变量 对象是等号右边通过new出来的一个实例 而且是运行期间才在堆中开辟对象的内存空间
let QQ_booding = new QQUsers("1675", 15, "booding")
let QQ_boooding = new QQUsers("8418", 10, "boooding")

QQ_booding.show();
QQ_boooding.show();

// why use prototype
/**
 * 1. 原型上所有的方法和属性都可以被构造函数【实际开发原型主要共享方法和所有实例公用引用属性】的实例共享
 * 2. 所有 QQuser 对象【也叫实例】都有相同的好友属性，好友属性用 commonfriends 英文 表示，所有 QQUser对象都有相同的 show 方法。但我们发现每一个 QQuser对象【也叫 QQuser实例】都单独分配一个 commonfriends 属性空间和 show 方法空间，导致大量的空间浪费
 * 3. 答案：使用原型解决所有实例上的方法 还有所有实例上的共同属性都可以放到原型上去定义
 */

console.log()
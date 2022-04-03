var Class_boooding = (function () {
    function Class_boooding(name_, age_) {
        this.age = 0;
        this.name = name_;
        this.age = age_;
    }
    return Class_boooding;
}()); // 立即执行函数，避免变量名污染

var a_class = new Class_boooding('boooding', 21);

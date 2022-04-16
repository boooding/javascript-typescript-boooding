// compile process
// 1. hoisting
var myname = undefined
function showName() {
    console.log('函数showName被执行');
}
// 2. executing
showName()
console.log(myname)
myname = '极客时间'
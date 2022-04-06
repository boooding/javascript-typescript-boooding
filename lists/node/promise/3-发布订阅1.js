const fs = require('fs');

function after(times, callback) {
    let data = {}
    return function finish(key, value) {
        // 函数声明所在的作用域 和执行的作用域不是同一个此时就会产生闭包
        data[key] = value;
        if (Reflect.ownKeys(data).length === times) {
            callback(data);
        }
    }
}

let finish = after(2, (school) => {
    // 发布订阅模式 前端最常用的方式
    console.log(school);
})

fs.readFile('./name.txt', 'utf8', function(err, data) {
    // school['name'] = data;
    // finish();
    finish('name', data)
})
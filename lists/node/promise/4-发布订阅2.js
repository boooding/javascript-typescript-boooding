const fs = require('fs');

// 发布 订阅
// 观察者模式（观察者模式是基于发布订阅的， 观察者模式是基于类来实现的）
let event = {
    _arr:[],
    data:{},
    on(fn){
        this._arr.push(fn);
    },
    emit(key,value){
        this.data[key] = value;
        this._arr.forEach(fn=>fn(this.data))
    }
}
event.on((data)=>{ // 订阅第一次
    console.log('收到了一个数据',data)
})
event.on((data)=>{ // 订阅第二次
    if(Reflect.ownKeys(data).length == 2){
        console.log('收到了全部数据',data)
    }
})
fs.readFile('./name.txt', 'utf8', function(err, data) {
    event.emit('name', data)
})
fs.readFile('./age.txt', 'utf8', function(err, data) {
    event.emit('age', data)
});

// 发布订阅模式是基于一个中间 调度栈，发布 订阅是解耦的

// 观察者模式 需要有两个类
// 1.被观察者
class Subject{
    constructor(name){
        this.name = name;
        this.observers = [];
        this.state = '开心'
    }
    attach(o){
        this.observers.push(o); // 订阅模式， 被观察者需要接受观察者
    }
    setState(newState){
        this.state = newState
        this.observers.forEach(o=>o.update(newState))
    }
}

// 2. 观察者
class Observer{
    constructor(name){
        this.name = name;
    }
    update(state){
        console.log(this.name + ':' + 'state' + state);
    }
}
// 我家有个小宝宝 ， 爸爸和妈妈要关心小宝包的状态 ， 小宝宝不开心 会主动通知观察者
let s = new Subject('baby');
let o1 = new Observer('dad');
let o2 = new Observer('mom');
s.attach(o1) // register
s.attach(o2) // register
s.setState('unhappy');
s.setState('happy');
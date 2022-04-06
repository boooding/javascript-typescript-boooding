function isType(type) {
    return function (value) {
        return Object.prototype.toString.call(value) === `[object ${type}]`
    }
}

const isString = isType('string');

// common curry function

function sum(a, b, c, d) {
    return a + b + c + d;
}

function curring(fn) {
    let args = [];
    const inner =  (arr = []) => {
        args.push(...arr);
        return args.length >= fn.length ? fn(...args) : (...args) => inner(args)
    }
    return inner();
}

let fn = curring2(sum);
let fn1 = fn(1);
let fn2 = fn1(2, 3);
let result = fn2(4);
console.log(fn1, fn2, result)

function curring2(fn) {
    const args = [];
    const innerFn = (arr = []) => {
        args.push(...arr);
        return fn.length <= args.length ? fn(...args) : (...args) => innerFn(args)
    }
    return innerFn();

}
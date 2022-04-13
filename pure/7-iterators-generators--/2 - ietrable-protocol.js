/**
 *
 * 1. 支持迭代的自我识别
 * 2. 能创建实现Iterator接口对象
 *
 * es中必须暴露"default iterator"属性
 * key = Symbol.iterator
 * return = function: iterator factory function
 */


// [Symbol.iterator] 可计算属性
const iterableObj = {
    names: ['house', 'hiphop', 'boooding'],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.names.length) {
                    return {
                        done: false,
                        value: this.names[index++],
                    };
                } else {
                    return {
                        done: true,
                        value: undefined,
                    }
                }
            }
        }
    }
}
// const iterator = iterableObj[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
//
// for (let a of iterableObj) {
//     console.log(a)
// }
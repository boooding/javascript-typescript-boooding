/**
 * 生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执行等。
 * 平时我们会编写很多的函数，这些函数终止的条件通常是返回值或者发生了异常。
 *
 * 首先！生成器函数需要在function的后面加一个符号：*
 * 其次，生成器函数可以通过yield关键字来控制函数的执行流程：
 * 最后，生成器函数的返回值是一个Generator（生成器）：
 */

function* generatorFunc() {
    console.log('1');
    // const arg = yield returnValue
    yield
    console.log('____')
    console.log('2')
    yield
    console.log('____')
    console.log('3')
}
// generator is a special iterator
const g1 = generatorFunc();

g1.next();
g1.next();
g1.next();

// throw error

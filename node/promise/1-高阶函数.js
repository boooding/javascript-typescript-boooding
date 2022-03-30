
function coreFn(a,b,c) {
    console.log('core fn',a,b,c)
}

Function.prototype.before = function (beforeFn) {
    return (...args) => {
        beforeFn();
        this(...args);
    }
}

let newFn = coreFn.before(() => {
    console.log('before fn')
})

newFn(1,2,3)
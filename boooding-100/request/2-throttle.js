
function throttle(fn, delay = 100) {
    let timer = 0;

    return function () {
        if (timmer) return;
        timmer = setTimeout(() => {
            fn.apply(this. arguments)
            timer = 0;
        }, delay)
    }
}
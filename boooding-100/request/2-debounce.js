function debounce(fn, delay = 200) {
    let timer = 0;
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = 0;
        }, delay)
    }
}

const input = document.getElementById('input');
input.addEventListener('keyup', debounce(() => {
    console.log('searching: ', input.value)
}), 300)
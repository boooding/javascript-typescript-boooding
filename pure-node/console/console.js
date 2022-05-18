const dirObj = {
    'a': 'hiphop',
    'b': function house() {
        console.log('this is house function')
    },
    'c': 'haha'
}
console.group('Group1: obj info. with dir.')
    console.dir(dirObj)
console.groupEnd()

console.group('Group2: obj info. with dirxml.')
    // const dom = document.getElementById('id')
    // console.dirxml(dom)
console.groupEnd()

console.group('Group3: assert')
    const result = 1;
    console.assert(result);
    const year = 2014;
    console.assert(year === 2018);
console.assert()



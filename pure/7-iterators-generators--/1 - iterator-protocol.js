const streetDanceArr = ['house', 'hiphop', 'boooding']

const iterator_streetDanceArr = streetDanceArr[Symbol.iterator];
// console.log(iterator_streetDanceArr.next());
// console.log(iterator_streetDanceArr.next());
// console.log(iterator_streetDanceArr.next());
// console.log(iterator_streetDanceArr.next());

function createArrayIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length) {
                return {
                    done: false,
                    value: arr[index++]
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}
const iterator_streetDanceArr2 = createArrayIterator(streetDanceArr);
// console.log(iterator_streetDanceArr2.next())
// console.log(iterator_streetDanceArr2.next())
// console.log(iterator_streetDanceArr2.next())
// console.log(iterator_streetDanceArr2.next())


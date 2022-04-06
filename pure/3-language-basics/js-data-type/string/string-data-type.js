// 1. string is immutable
// 2. null undefined no toString

// 字符串在本质上是 16 位无符号整数（0 - 65535）的不可变数组。
// 1. String() 2. fromCharCode

const my_little_array = [99, 111, 114, 110];
const my_little_string = String.fromCharCode(...my_little_array);
console.log(my_little_string.charCodeAt(0) === 99)
console.log(my_little_array, my_little_string)

// concat
// slice
// indexOf
// startsWith、 endsWith 和 contains 三个方法是对 indexOf 和 lastIndexOf

// unicode
/**
 * '\z' === 'z'  // true
 * '\172' === 'z' // true
 * '\x7A' === 'z' // true
 * '\u007A' === 'z' // true
 * '\u{7A}' === 'z' // true
 */



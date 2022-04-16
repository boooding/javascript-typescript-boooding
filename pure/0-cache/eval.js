// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21

console.log(eval('2 + 2'));
// expected output: 4

console.log(eval(new String('2 + 2')));
// expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// expected output: false

function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))


function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))


function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))


function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj){
    return Function('"use strict";return (' + obj + ')')()(
        Date
    );
}
console.log(runCodeWithDateFunction(
    "function(Date){ return Date(5) }"
))


console.log(Function('"use strict";return(function(a){return a(5)})')()(function(a){
    return"Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ")[a%7||0]}));
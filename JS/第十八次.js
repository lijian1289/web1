var a = '123';
var a2 = {};
var a5 = (x,y) =>{
    //箭头函数 没有名字
    console.log(3+4)
}
console.log(typeof a); //调 

var a3 = object.cteate(null); 

console.log(typeof a5)

var a6 = function apple5(){
    console.log('apple5');
    return 100;
}

console.log(a5)  //执行后就是 apple5

(console.log("江西软件"))  //没报错 但不能执行（不是function） 但这里提示括号里可以加函数
(function (){
    console.log("江西软件")     //（）里的function
}) (3,6)                             //futn (){}() 自己调用自己

var a7 =  function(){
    console.log("a7   原型")
}

a7.prototype.apple = function(){
    console.log("apple");
}
Furit.prototype.apple = function apple8(){
    //在原型中加了个 apple 
    console.log("this is apple");
}
var a888 = new a8
//大括号简写 可输出这
// //语法糖（简写）
// var b = function apple(){
//     console.log('apple');  
// }
// function apple(){
//     let le = function banana(){
//         //没banana 匿
//         console.log("banana let2");
//     }
// }
// function apple2(){
//     let name = "apple2"
//     function apple2Son(){
//         console.log("apple2son");
//         //function 中的 function
//     }
//     apple2Son()
//     //到这里只声明  运行无任何效果
//     return{
//         apple2Son:apple2Son
//     }
// }
// apple2().apple2Son()


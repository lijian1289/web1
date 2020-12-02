+function liceqqq(){
    console.log("qqq");
}()
//加了一个加号就让变成了一个单独的函数

var water = function(){
    console.log("第一次");
    return function pear(){
        console.log("223");
    }
}
water()()  
//执行后在执行
// //return ?  
// var temp = function (){
//     return function (){console.log("333")}()
// }
// temp()()
//function 后是个函数 return函数   加个括号执行  左后双括号输出333 
var ob1 = {
    name:"this is a name"
    printName:function(){
        console.log(this.name)
    }
}
con
//最后一行 赋值给上一行 两个李子  plum1(plum2) 函数（） 就是执行  执行是括号里加了一个参数
//function(){}  空函数传参   x(1200)  传给fun 上的i
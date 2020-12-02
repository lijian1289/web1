var a = '123';
var b = function apple(){
    console.log('apple');  
}
function apple(){
    let le = function banana(){
        //没banana 匿
        console.log("banana let2");
    }
}
function apple2(){
    let name = "apple2"
    function apple2Son(){
        console.log("apple2son");
        //function 中的 function
    }
    apple2Son()
    //到这里只声明  运行无任何效果
}
apple2().apple2Son()

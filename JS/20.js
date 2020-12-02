// let li = function lichee(){
//     console.log("1")
//     return 0;
// }()
// li() ;lichee()
// //三种方式

// let h2 = !function test(){//强制类型转换  大于0是ture 小于0是false   0是false 
//     console.log("2")
//     return -1;
//     //-1false !之后是ture

// }()

// var lj = function pitaya(){
//     console.log("一种函数定义")
// // }

// let pea1 = 'return' + '`你是${name}`';
// let peanut1 = new Function ('name', pea1);
// console.log(peanut1("宋义进"));

// var peanut6 = function(name){
//     return "you are"+name;
// }

// let melon = {}
// let melon2 = {
//     name = "大西瓜",
//     price:30,
//     weight:2,
//     color:false,
//     nut:{
//         name:"西瓜儿子",
//         price:40,
//     },
//     printPrice: function (){
//         console.log("我是价格")
//     },
//     printPrice:()=>{
//         console.log("原产地")
//     },
// }
// melon2()

// var melon7 = new Object(2222)
// //传参
// var melon8 = new Object("3333")

function Person(name,sex){
    this.name = name,
    this.sex = sex//最后一个没有逗号
    
    this.sayName = function(){
        console.log(this.name)
    }
}
Person.prototype.sayName2 = function(){
    console.log("this is name2");
}

var p1 = new Person ("张四","女")  //p1是对象 是新的person
console.log(p1);

console.log(p1.__proto__);  // 调sayNaem sayName2 
//点了一下    .__proto__ 的顶级对象是 Object. 
   //用Object时 自动指向.__proto__ = Object.protype.__proto__ = null

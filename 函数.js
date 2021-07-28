// function  fib (num) {
//     if (num <= 1) {
//         return 1;
//     }
//    return  fib(num - 1) + fib(num - 2)
// }
//
// console.log(fib(5))

// 箭头函数
// let func = num => {
//     console.log(this, 2222222222)
// }
// //这两个函数的是等价的
// let oldfunc = function (num) {
//       age:10;
//     console.log(this, 11111111111)
// }

//创建数组的方法
//字面量的方式  常用
//  var arr = [1]
// console.log(arr)
// //构造函数的方式
// var  arr1 = new Array(1)
// console.log(arr1)
// //用对象的方式来创建
// var  arr2 =  Array(1)
// console.log(arr2)
// //用Arry.of来创建
// var  arr3 = Array.of(1)
// console.log(arr3)

//倒叙
// var arr = [10, 1, 4, 7, 8, 3, 5]
// var [a, b, ...c] = arr
// console.log(a, b, c)

//
// function info() {
//
//     var c ="20"
//       var v  =Number.MAX_VALUE
//
//     console.log(v.valueOf())
//     console.log(typeof (v.valueOf()))
//
//     //  "结果是"+b+c 是字符串加数字   结果是字符串
//     //赋值运算是从右到左，算式计算是从左到右。
//     console.log(c.valueOf())
//     console.log(typeof (c.valueOf()))
//     //   var a = '   good good staudy'
//     // console.log(a.trim().split(" "))
//     // f = b.trim().length
//     // console.log(f)
//     // c = b.toUpperCase()
//     // console.log(b.length)
//     // d =b.toLowerCase()
//     // e = b.concat( '----', a)
//     // console.log(e)
// }
// info()

// 1
var arr =[1,2,3,4,5,6 ,7]
for (let i = 0 ; i< arr.length; i++){
 var a =[]
    a[i] =i
    console.log(a)
}

// for(let e of arr){
//     console.log(e)
// }

// 原生的数组指栈模式和队列模式   栈模式先进后出  队列模式先进后出
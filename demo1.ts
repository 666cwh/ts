//ts中的函数
 function addFalse(first:number,sencond:number){
  return first+sencond+'cheng'
}
const totleFalse = addFalse(1,2)  //totleFalse : string 当函数返回值不设置返回类型时totle不会出现错误提示,totleFalse类型会根据编辑器会自行推断返回类型

function addTrue(first:number,sencond:number):number{
  return first+sencond+'cheng'   //不能将类型“string”分配给类型“number”。
}
const totleTrue = addTrue(1,2)  //totleTrue : num  当函数返回值设置返回类型时totle会出现错误提示,totleFalse类型会根据设置的返回类型进行代码判定



//void:void类型,函数无返回值
function voidFn():void{
  console.log('123')
}
function voidReturn():void{
  return ''   //不能将类型“string”分配给类型“void”。
}


//never 类型:函数永远不能执行到最后
function neverFn():never{
  while(true){}
  console.log(12) //console永远无法执行
}

//结构函数
function structure (
  {a,b}:{a:number,b:number}
  ):number{
  return a+b
}
let structureTrue = structure({a:1,b:2})


// 1.
 let data;   // let data: any
 data = 123



// 2.函数的两种常用写法
const func = (str:string):number => {
  return parseInt(str)  //parseInt()将字符串转换成数字,只能传入字符串数字,其他返回NAN
}
let funcdata = func('1')


const func1 : (str:string) => number = (str)=>{
  return parseInt(str)
}
let funcdata1 = func1('1')

// :后边跟的是类型   =后边跟的是函数的具体实现



//3.改变变量类型
let variate = 123 //ts通过类型推断,判断出variate为number类型
variate='123' //不能将类型“string”分配给类型“number”

let vartrue : number | string = 123   // |: 或
vartrue = '123'   //let vartrue: string | number
/**
 * interface接口:表示通用类型的集合
 */

const fn = (data:{name:string,age:number},type:number)=>{
  console.log(data.name,type)
}

const fnCopy = (data:{name:string,age:number},type:string)=>{
  console.log(data.name,type)
}


// interface
interface User {
  name:string,
  age:number
}

const infn = (data:User,type:number)=>{
  console.log(data.name,type)
}

const infnCopy = (data:User,type:string)=>{
  console.log(data.name,type)
}

/**
 * interface接口和type类型别名的区别:
 *    1.type可以直接代表基础类型,而interface接口只能代表对象或者函数
 *    2.ts中能用interface接口就不用type类型别名 (不要问为什么,问就是ts规定)
 */
interface UserIn {
  name:string,
  age:number
}

type UserType = string


/**
 * 参数限制
 */
interface Usersay {
  readonly name:string, //readonly:参数属性为只读不可更改
  age?:number  //?:选填,参数可传可不传
}

const infnsay = (data:Usersay)=>{
  console.log(data.name)
  data.name=1 //无法分配到 "name" ，因为它是只读属性。
}

const infnsayData ={
  name:'程'
}
infnsay(infnsayData)

/**
 * 函数赋值校验
 */

interface assignmentData{
  name:string,
  post:string
}
const assignment=(assignmentData:assignmentData,age:number)=>{
  console.log(assignmentData.name,age)
}
const actual={
  name:'cheng',
  post:'aa',
  address:'杭州'
}
assignment(actual,18)
// 当以变量赋值形式将对象传递给变量的时候,ts不会进行强校验


interface assignmentDataOver{
  name:string,
  post:string
}
const assignmentOver=(assignmentData:assignmentDataOver,age:number)=>{
  console.log(assignmentData.name,age)
}
assignment({
  name:'cheng',
  post:'aa',
  address:'杭州'  //对象文字可以只指定已知属性，并且“address”不在类型“assignmentData”中。ts(2345)
},18)
// 当以字面量形式直接传递对象给变量的时候,ts会进行强校验


// 字面量直接赋值报错解决办法
interface assignmentDataway{
  name:string,
  post:string,
  [propName:string]:any;  //参数中可以设置其他属性,属性类型为字符串,属性的值可以为任何类型
}
const assignmentway=(assignmentData:assignmentDataway,age:number)=>{
  console.log(assignmentData.name,age)
}
assignmentway({
  name:'cheng',
  post:'aa',
  address:'杭州'
},18)


/**
 * 函数赋值方法
 */
interface argument  {
  name:string,
  age:number,
  say():string
}
const parMethod = (argument:argument)=>{
  console.log(argument.name,argument.age)
}

const calParameters={
  name:'cheng',
  age:18,
  say(){
    return 'enen'
  }
}
const callMet = parMethod(calParameters)


//class类应用interface接口

// 语法:class 类名 implements 参数名{}
interface classParameter{
  name:string,
  age:number
}

class classInv implements classParameter{
  name:'cheng';
  age:12
}


/**
 * // interface接口继承
 */
//语法: interface 继承名 extends 被继承名 {}
interface inParameters{
  name:string,
  age:number
}

interface teacher extends inParameters{
  say():string
}

const inherit = (teacher:teacher){
  console.log(teacher)
}

inherit({
  name:'cheng',
  age:18,
  say(){
    return 'hehe'
  }
})

/**
 * interface定义函数
 */

//语法: 
// interface 函数名{
//   (参数:参数类型):返回值类型
// }

interface fnName {
  (data:string):string
}

const say : fnName = (name:string) => {
  return name
}

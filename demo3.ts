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
 *    2.ts中能用interface接口就不用type类型别名 (原因请自行百度!!!!!!)
 */
interface UserIn {
  name:string,
  age:number
}

type UserType = string
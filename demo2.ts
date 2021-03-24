/**
 * 数组类型注解
 */
const numberArr:number[] = [1,2,3]
const strArr:string[] = ['1','2','3']
const undArr:undefined[] = [undefined]
const arr1:number[] = [1,'2',3]   //不能将类型“string”分配给类型“number”。
const arr2:(number|string)[] = [1,'2',3]  //const arr2: (string | number)[]

//对象数组类型
const objArr:{name:string,age:number}[] = [{
  name:'cheng',
  age:18
}]
//优化
//type:类型别名
type data = {
  name:string,
  age:number
}
const objArrtype:data[] = [{
  name:'cheng',
  age:18
}]

/**
 * 元组 :数组长度固定并且数组中每一项元素类型固定
 */
const tuple = ['程',18,'哈哈']    //const tuple: (string | number)[]

//当数组固定长度为3,数组中第一项固定为str,第二项固定为num,第三项固定为str时,而在添加一值为123的num,数组依然正确
const tuple1 = ['程',18,'哈哈',123] //const tuple1: (string | number)[]

//所以无法实现长度固定,对应元素类型固定
const tuple2:[string,number,string] = ['程',18,'哈哈',123]  //不能将类型“[string, number, string, number]”分配给类型“[string, number, string]”
const tuple3:[string,number,string] = ['程',18,'哈哈']

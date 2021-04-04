/**
 * 联合类型和类型保护
 */

// // 联合类型
// interface Dog {
//   color: boolean;
//   name: () => {};
// }

// interface pig {
//   color: boolean;
//   age: () => {};
// }

// // | : 联合类型
// function unite(data: Dog | pig) {
//   //当使用联合类型时,参数会提示两个类型中共有的方法或者属性
//   //当联合类型时,使用其中一个类型中的私有方法或者属性时会报错

//   data.name(); //类型“Dog | pig”上不存在属性“name”。类型“pig”上不存在属性“name”。ts(2339)
// }

// 类型保护(当出现类似于联合类型中错误时使用)

// //类型保护实现方式:1 类型断言方式
// interface Dog {
//   color: boolean;
//   name: () => {};
// }

// interface pig {
//   color: boolean;
//   age: () => {};
// }

// function unite(data: Dog | pig) {
//   //当color为true时
//   if (data.color) {
//     (data as Dog).name(); // as(断言):类型为Dog,可以调用name方法
//   } else {
//     (data as pig).age(); // 否则类型为pig,可以调用age方法
//   }
// }

// //类型保护实现方式:2 in语法
// interface Dog {
//   color: boolean;
//   name: () => {};
// }

// interface pig {
//   color: boolean;
//   age: () => {};
// }

// function unite(data: Dog | pig) {
//   //如果当data中存在name方法时,可以调用data.name()
//   if ('name' in data) {
//     data.name();
//   } else {
//     data.age(); //否则调用pig中的age()
//   }
// }

// //类型保护实现方式:3.typeof语法类型保护

// function add(first: string | number, second: string | number) {
//   return first + second; //运算符“+”不能应用于类型“string | number”和“string | number”。ts(2365)
// }

// function add1(first: string | number, second: string | number) {
//   if (typeof first === 'string' || typeof second === 'string') {
//     return `${first}${second}`;
//   }
//   return first + second;
// }

//类型保护实现方式:4.instanceof语法类型保护
//注意:只有当定义的类型时class时可以使用instanceof,interface不能使用

interface NumberObj {
  count: number;
}
function add(first: object | NumberObj, second: object | NumberObj) {
  //“NumberObj”仅表示类型，但在此处却作为值使用。ts(2693)
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count; //类型“object | NumberObj”上不存在属性“count”。 类型“object”上不存在属性“count”。
  }
  return 0;
}

class NumberObj1 {
  count: number = 0;
}
function add1(first: object | NumberObj1, second: object | NumberObj1) {
  if (first instanceof NumberObj1 && second instanceof NumberObj1) {
    return first.count + second.count;
  }
  return 0;
}

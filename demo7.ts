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

//类型保护实现方式:3
interface Dog {
  color: boolean;
  name: () => {};
}

interface pig {
  color: boolean;
  age: () => {};
}

function unite(data: Dog | pig) {}

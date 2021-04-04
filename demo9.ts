//类中泛型
// class DataItem<T> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }

// const newData = new DataItem<string>(['1']);

// newData.getItem(0);

// 泛型继承
// interface item {
//   name: string;
// }
// //T泛型继承item类型
// class DataItem<T extends item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// const newData = new DataItem([
//   {
//     name: 'cheng',
//   },
// ]);

//设置泛型为指定类型
// class DataItem<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }
// const newData = new DataItem<number | string>([]);
// const newData1 = new DataItem<number>([]);
// const newData2 = new DataItem<string>([]);
// const newData3 = new DataItem<object>([]); //类型“object”不满足约束“string | number”。不能将类型“object”分配给类型“number”。ts(2344)

// 泛型作为具体类型注解,用泛型声明类型
function hello<T>(parm: T) {
  return parm;
}
const newFn: <T>(parm: T) => T = hello;

//声明newFn,参数为parm,参数类型为泛型T,newFn返回类型时泛型T
//定义函数hello,hello接收一个参数,参数类型为泛型T,return出去parm(此时类型为泛型T)

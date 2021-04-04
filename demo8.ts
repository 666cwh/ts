// 函数泛型:泛指的类型

// function Fn<ABC>(fist: ABC, second: ABC) {
//   return `${fist}${second}`;
// }
// Fn<string>('1', '1'); //指定参数为string类型
// Fn<string>('1', 1234); //类型“number”的参数不能赋给类型“string”的参数。

//设置类型为ABC的数组
// function Fn<ABC>(fist: ABC[]) {
//   return fist;
// }
// Fn<number>([123]);
// Fn<number>(123); //类型“number”的参数不能赋给类型“number[]”的参数。ts(2345)
// Fn<number>(['123']); //不能将类型“string”分配给类型“number”。ts(2322)

// function Fn1<ABC>(fist: Array<ABC>) {
//   return fist;
// }
// Fn1<number>([123]);
// Fn1<number>(123); //类型“number”的参数不能赋给类型“number[]”的参数。ts(2345)
// Fn1<number>(['123']); //不能将类型“string”分配给类型“number”。ts(2322)

// 优化
// function Fn<T, P>(fist: T, second: P) {
//   return `${fist}${second}`;
// }
// Fn<string, number>('1', 2);

//自动类型匹配
// function Fn<T, P>(fist: T, second: P) {
//   return `${fist}${second}`;
// }
// Fn('1', 2);
// Fn(2, 'sssss');

function Fn<T, P>(fist: T, second: P): P {
  return second;
}
Fn<string, number>('1', 2);

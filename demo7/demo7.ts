/**
 * 枚举类型:enum
 */
// enum Val {
//   OFFLINE, //默认0
//   ONLINE, //默认1
//   DELETED, //默认2
// }

// enum Val {
//   OFFLINE = 2, //赋值为2
//   ONLINE, //默认3
//   DELETED, //默认4
// }

enum Val {
  OFFLINE, //0
  ONLINE = 4, //赋值为4
  DELETED, //5
}
console.log(Val.OFFLINE, Val[0]);
console.log(Val.ONLINE, Val[4]);
console.log(Val.DELETED, Val[5]);

// const Val = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 3,
// };
// function getResult(val: any) {
//   if (val === Val.OFFLINE) {
//     return 0;
//   } else if (val === Val.ONLINE) {
//     return 1;
//   } else if (val === Val.DELETED) {
//     return 2;
//   } else {
//     return 3;
//   }
// }
// const res = getResult(Val.OFFLINE);
// console.log(res);

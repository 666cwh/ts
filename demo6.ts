/**
 * 抽象类
 */

// //readonly:设置只读属性
// class ClassAbstract {
//   public readonly _name: string = '';
//   constructor(name: string) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }

// const classAbstract = new ClassAbstract('cheng');
// classAbstract.name = 'hello'; //无法分配到 "name" ，因为它是只读属性。

// console.log(classAbstract.name);

// // 抽象类:当多个类具有通行的属性时,类似于公共方法
// // 注意:抽象类只能被继承,不能被实例化,也就是不能new

// // class AbstractClassone {
// //   way() {}
// // }
// // class AbstractClasstwo {
// //   way() {}
// // }

// // 例:

// //abstract:定义抽象类
// abstract class Name {
//   //当具体的属性添加abstract时,表示此属性也是抽象的,没有具体值
//   abstract way(): number;
// }

// //非抽象类“AbstractClasstwo”不会实现继承自“Name”类的抽象成员“way”
// class AbstractClasstwo extends Name {
//   //当继承抽象类并且抽象类中有抽象方法或者属性时,必须在继承的子类中实现一下
// }

// class AbstractClassone extends Name {
//   way() {
//     return 123;
//   }
// }

// interface接口和抽象类区别
//抽象类:将类相关的通用的东西抽离出来
interface NameData {
  name: string;
}

interface Age {
  name: string;
  age: number;
}

const nameData = { name: 'cheng' };

const age = {
  name: 'cheng',
  age: 18,
};

const getinfo = (user: NameData | Age) => {
  console.log(user.name);
};
getinfo(nameData);
getinfo(age);

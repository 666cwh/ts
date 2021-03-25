/**
 * 抽象类
 */

//readonly:设置只读属性
class ClassAbstract {
  public readonly _name: string = '';
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const classAbstract = new ClassAbstract('cheng');
classAbstract.name = 'hello'; //无法分配到 "name" ，因为它是只读属性。

console.log(classAbstract.name);

123;

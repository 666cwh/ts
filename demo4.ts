/**
 * clsaa类
 */

/**
 * 类的定义与继承
 */
class Person{ //父类
  name='cheng';
  getName(){
    return this.name
  }
}

class Teacher extends Person{ //子类
  getNameteacher(){
    return 'haha'
  }
  getName(){    //子类的getName方法会把父类的getName方法覆盖
    return super.getName()  // cheng   super属性:相当于父类Person,当父类中的方法被子类中方法覆盖时使用
    // return 'hehe'  // hehe
  }
}

const person = new Teacher()
console.log(person.getName())
console.log(person.getNameteacher())

/**
 * 类的访问类型和构造器
 */

// 访问类型:private , protected , public

//public:允许在类的内外被调用,默认隐藏
//private:允许在类内使用
//protected:允许在类内及继承的子类中使用
class ClassName {
  public type:string = ''
}

const classname = new ClassName();
classname.type = 'hhh'

console.log(classname.type)
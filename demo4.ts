
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
class ClassName { //类
  name:string = ''
  public type : string = ''
  private age : number = 0
  protected data : string = ''
  sey(){
    this.type
    this.age
    this.data
  }
}
class Teachercalss extends ClassName{   //子类
  public () {
    this.type
    this.age    //报错
    this.data
  }
}

const classname = new ClassName();  //类外部
console.log(classname.type)
console.log(classname.age)  //报错
console.log(classname.data) //报错


//constructor  构造器

//执行时间为new实例时
class ConstructoraaName {

  // 传统写法
  // public name:string = '';
  // constructor(val:string){
  //   this.name = val
  // }

  //简化写法
  constructor(public name:string){}
}

const constructoraaName = new ConstructoraaName('cheng')

console.log(constructoraaName.name) //cheng


//super
class ConstructoraaName{
  constructor(public name : string){}
}

// error:
class Teacher extends ConstructoraaName{
  constructor(public age:number) {} //派生类的构造函数必须包含 "super" 调用。
}
//如果父类里边有构造器,子类里边一定要手动调用父类的构造器
const teacher = new Teacher(18)

// correct
class TeacherTrue extends ConstructoraaName{
  constructor(public age:number){
    super('cheng')  //等于ConstructoraaName()
  }
}
const teacherTrue = new TeacherTrue(18)

console.log(teacherTrue.age)  //18
console.log(teacherTrue.name) //cheng

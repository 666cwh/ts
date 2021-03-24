
// /**
//  * class中的Setter和Getter:保护私有属性
//  */
// class ClassData{
//   constructor(private _name:string){}   //get和set不会更改_name
//   get name(){     //读取_name
//     return this._name 
//   }
//   set name(name:string){  //更改_name
//     const setName = name.split('')[0]
//     this._name = setName
//   }
// }

// let classData = new ClassData('cheng')

// //console.log(classData._name)  // 属性“name”为私有属性，只能在类“ClassData”中访问。
// console.log(classData.name)  //cheng

// classData.name = 'xi haha'
// console.log(classData.name) //xi


/**
 * 单例模式:一个特定类只允许获取一个实例
 */

// 一个类可以获取多个实例
class Demo{

}
const demoOne = new Demo()
const demoTwo = new Demo()


// 一个类可以获取一个实例
class Demotrue{
  private static instance : Demotrue
  private constructor(public name:string){} //constructor设置private后,Demotrue成为私有的,只能在类中访问
  static getDemotrue(){   //static:将getDemotrue方法直接挂在Demotrue类上,而不是类的实例上
    if(!this.instance){
      this.instance = new Demotrue('cheng haha')
    }
    return this.instance
  }
}
const demotrueOne = Demotrue.getDemotrue()
const demotrueTwo = Demotrue.getDemotrue()

console.log(demotrueOne.name,demotrueTwo.name)

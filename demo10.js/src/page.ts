/**
 * 命名空间(namespace):避免全局变量生成,类似模块化
 */
namespace Home {
  export class Page {
    user: compontent.User = {
      name: 'cheng',
    };
    constructor() {
      new compontent.Header();
      new compontent.Content();
    }
  }
}

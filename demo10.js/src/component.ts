namespace compontent {
  export interface User {
    name: string;
  }
  export class Header {
    constructor() {
      const ele = document.createElement('div');
      ele.innerText = 'Header';
      document.body.appendChild(ele);
    }
  }
  export class Content {
    constructor() {
      const ele = document.createElement('div');
      ele.innerText = 'content';
      document.body.appendChild(ele);
    }
  }
}

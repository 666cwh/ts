/**
 * 命名空间(namespace):避免全局变量生成,类似模块化
 */
import { Header, Content } from './component';

export class Page {
  constructor() {
    new Header();
    new Content();
  }
}

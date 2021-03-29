// http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx

import superagent from 'superagent';  //引入爬虫工具
class Crowller {
  //private:属性只允许在类内使用
  private secret = 'x3b174jsx';  
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
  private reptileData = ''
  async reptileWay(){
    const beg = await superagent.get(this.url)  
    this.reptileData = beg.text   //从远程地址获取html内容
    console.log(this.reptileData)
  }
  constructor(){
    this.reptileWay()
  }
}

const crowller = new Crowller()



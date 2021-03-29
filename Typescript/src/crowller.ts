// 爬虫地址:http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx

import superagent from 'superagent';  //引入爬虫工具

import fs from 'fs'
import path from 'path'
// import DellAnalyzer from './dellAnalyzer'
import LeeAnay from './leeAnay'

export interface Analyzer{
  anylyze:(html:string,filePath:string) => string;
}
class Crowller {
  //private:属性只允许在类内使用
  private filePath = path.resolve(__dirname,'../data/coures.json')

   //从远程地址抓取html内容
  async reptileWay(){
    const beg = await superagent.get(this.url)  
    return beg.text
  }

  // 编写文件
  writeFile(content:string){
    fs.writeFileSync(this.filePath,content)
  }
  // 获取数据
  async operationa(){
    const html = await this.reptileWay()
    const filedellAnalyzer = this.dellAnalyzer.anylyze(html,this.filePath)
    this.writeFile(filedellAnalyzer)
  }
  constructor(private url:string,private dellAnalyzer:Analyzer){
    this.operationa()
  }
}

const secret = 'x3b174jsx'
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`
// const dellAnalyzer = new DellAnalyzer()
const dellAnalyzer = new LeeAnay()

const crowller = new Crowller(url,dellAnalyzer)



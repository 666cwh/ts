// 爬虫地址:http://www.dell-lee.com/typescript/demo.html?secret=x3b174jsx

import superagent from 'superagent';  //引入爬虫工具
import cheerio from 'cheerio' //引入cheerio
import fs from 'fs'
import path from 'path'

interface Course{
  title:string;
  count:number
}
interface CoursResult{
  time:number,
  data:Course[]
}
interface Centent{
  [propName:number] : Course[]
}
class Crowller {
  //private:属性只允许在类内使用
  private secret = 'x3b174jsx';  
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`
  //格式化数据
  getJson(html:string){
    const $ = cheerio.load(html)
    const courItem = $('.course-item')
    const arr:Course[] = []
    // console.log(courItem.length)
    courItem.map((index,element)=>{
      const desc = $(element).find('.course-desc')
      const title = desc.eq(0).text()
      const count = +desc.eq(1).text().split('：')[1]
      console.log(title,count)
      arr.push({
        title,count
      })
    })
    return {
      time:(new Date()).getTime(),
      data:arr
    }
  }
   //从远程地址抓取html内容
  async reptileWay(){
    const beg = await superagent.get(this.url)  
    return beg.text
  }
  //存储json
  courseInfor(coursInfor:CoursResult){
    const filePath = path.resolve(__dirname,'../data/coures.json')
    let content:Centent = {}
    //判断文件路径是否存在
    if(fs.existsSync(filePath)){
      content = JSON.parse( fs.readFileSync(filePath,'utf-8'))
    }
    content[coursInfor.time] =coursInfor.data
    return content
  }
  // 获取数据
  async operationa(){
    const filePath = path.resolve(__dirname,'../data/coures.json')
    const html =await this.reptileWay()
    const coursInfor = this.getJson(html)
    const fileContent = this.courseInfor(coursInfor)
    fs.writeFileSync(filePath,JSON.stringify(fileContent))
    console.log(coursInfor)
  }
  constructor(){
    this.operationa()
  }
}

const crowller = new Crowller()



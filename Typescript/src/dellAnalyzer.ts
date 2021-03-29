// 分析器
import cheerio from 'cheerio' //引入cheerio
import fs from 'fs'
import {Analyzer} from './crowller'

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
export default class DellAnal implements Analyzer{
    //格式化数据
    private getJson(html:string){
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
    //存储json
  courseInfor(coursInfor:CoursResult,filePath:string){
    let content:Centent = {}
    //判断文件路径是否存在
    if(fs.existsSync(filePath)){
      content = JSON.parse( fs.readFileSync(filePath,'utf-8'))
    }
    content[coursInfor.time] = coursInfor.data
    return content
  }

    public anylyze(html:string,filePath:string){
      const coursInfor = this.getJson(html)
      const fileContent = this.courseInfor(coursInfor,filePath)
      return JSON.stringify(fileContent)
    }
}
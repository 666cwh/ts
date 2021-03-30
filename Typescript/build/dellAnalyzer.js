"use strict";
// 分析器
// import cheerio from 'cheerio' //引入cheerio
// import fs from 'fs'
// import {Analyzer} from './crowller'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// interface Course{
//   title:string;
//   count:number
// }
// interface CoursResult{
//   time:number,
//   data:Course[]
// }
// interface Centent{
//   [propName:number] : Course[]
// }
// export default class DellAnal implements Analyzer{
//     //格式化数据
//     private getJson(html:string){
//       const $ = cheerio.load(html)
//       const courItem = $('.course-item')
//       const arr:Course[] = []
//       // console.log(courItem.length)
//       courItem.map((index,element)=>{
//         const desc = $(element).find('.course-desc')
//         const title = desc.eq(0).text()
//         const count = +desc.eq(1).text().split('：')[1]
//         console.log(title,count)
//         arr.push({
//           title,count
//         })
//       })
//       return {
//         time:(new Date()).getTime(),
//         data:arr
//       }
//     }
//     //存储json
//   courseInfor(coursInfor:CoursResult,filePath:string){
//     let content:Centent = {}
//     //判断文件路径是否存在
//     if(fs.existsSync(filePath)){
//       content = JSON.parse( fs.readFileSync(filePath,'utf-8'))
//     }
//     content[coursInfor.time] = coursInfor.data
//     return content
//   }
//     public anylyze(html:string,filePath:string){
//       const coursInfor = this.getJson(html)
//       const fileContent = this.courseInfor(coursInfor,filePath)
//       return JSON.stringify(fileContent)
//     }
// }
// 单例模式
var cheerio_1 = __importDefault(require("cheerio")); //引入cheerio
var fs_1 = __importDefault(require("fs"));
var DellAnal = /** @class */ (function () {
    function DellAnal() {
    }
    DellAnal.getInstance = function () {
        if (!DellAnal.instance) {
            DellAnal.instance = new DellAnal();
        }
        return DellAnal.instance;
    };
    //格式化数据
    DellAnal.prototype.getJson = function (html) {
        var $ = cheerio_1.default.load(html);
        var courItem = $('.course-item');
        var arr = [];
        // console.log(courItem.length)
        courItem.map(function (index, element) {
            var desc = $(element).find('.course-desc');
            var title = desc.eq(0).text();
            var count = +desc.eq(1).text().split('：')[1];
            console.log(title, count);
            arr.push({
                title: title, count: count
            });
        });
        return {
            time: (new Date()).getTime(),
            data: arr
        };
    };
    //存储json
    DellAnal.prototype.courseInfor = function (coursInfor, filePath) {
        var content = {};
        //判断文件路径是否存在
        if (fs_1.default.existsSync(filePath)) {
            content = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        content[coursInfor.time] = coursInfor.data;
        return content;
    };
    DellAnal.prototype.anylyze = function (html, filePath) {
        var coursInfor = this.getJson(html);
        var fileContent = this.courseInfor(coursInfor, filePath);
        return JSON.stringify(fileContent);
    };
    return DellAnal;
}());
exports.default = DellAnal;

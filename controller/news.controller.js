const fs = require('fs')
const path = require('path')

const newsJson = fs.readFileSync(path.join(__dirname,"../model/news.json"),'utf-8');
let newsArray = JSON.parse(newsJson);
newsArray.map((item)=>{
   item.title= item.title.substring(0,60)
    item.description= item.title.substring(0,100)
})
const getBlogs=(req,res)=>{
    res.render("index",{
        newsArray:newsArray
    })
}
module.exports={getBlogs}
const fs = require('fs');
const path = require('path')
const fetch=require('node-fetch')
dataPath = path.join(__dirname,"data.json")
let data = [];
const loadData = async ()=>{
  fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c1116c580c3e4e0882a524f27aeae807")
  .then(async res=>{
  let dataRequest = await res.json();
  data = dataRequest.articles;
  fs.writeFileSync(dataPath,JSON.stringify(data))
  })
}

module.exports={loadData}
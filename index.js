const http = require('http');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = require('./app')
const server = http.createServer(app)
const {loadData} = require('./model/news.model');
loadData();
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

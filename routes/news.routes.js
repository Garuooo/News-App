const {getBlogs} = require('../controller/news.controller')
const express = require('express');
const Router =express.Router();

Router.get("/",getBlogs)
// app.get("/about",(req,res)=>{
//     res.render("about.hbs",{})
// })
// app.get("/category",(req,res)=>{
//     res.render("category.hbs",{})
// })
// app.get("/contact",(req,res)=>{
//     res.render("contact.hbs",{})
// })
// app.get("/single-post",(req,res)=>{
//     res.render("single-post.hbs",{})
// })

// app.get("/single-result",(req,res)=>{
//     res.render("single-result.hbs",{})
// })

module.exports={Router}
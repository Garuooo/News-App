const express = require('express');
const path = require("path");
const publicPath = path.join(__dirname,"./public");
const controller = require("./controller/news.controller")
const viewsPath = path.join(path.join(__dirname,"./templates/views"))
const hbs=require('hbs')
const app = express();
app.use(express.static(publicPath));
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"./templates/partials"))
app.set('views',viewsPath)
const {Router} = require('./routes/news.routes')
app.use(Router)
module.exports = app;
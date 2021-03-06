"use strict";
var express = require("Express");
var routes = require("../routes");
var app = express();
app.get('/', function (req, res) {
    res.json({ message: 'Hello! Welcome to Express' });
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//app.get('/index', function (req, res) {
//    //res.type('html');
//    //res.sendFile("/views/index.html");
//    res.send("Express");
//});
app.get('/index', routes.index);
app.listen(7001);
//class Menu {
//    items: Array<string>;
//    pages: number;
//    constructor(item_list: Array<string>, total_pages: number) {
//        this.items = item_list;
//        this.pages = total_pages;
//    }
//    list(): void {
//        console.log('our menu for today');
//        for (var i = 0; i < this.items.length; i++) {
//            console.log(this.items[i]);
//        }
//    }
//}
//var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
//sundayMenu.list();
//import path = require('path');
//import fs = require('fs');

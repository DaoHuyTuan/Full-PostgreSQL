const express = require("express");
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });


const queryDB = require('./db');
app.set("view engine" , "ejs");
app.set("views" , "./views");
app.use(express.static('public'));



app.get("/",(req,res) => {
    queryDB('SELECT * FROM "Product"', (err, data) => {
        if(err) return console.log(err.toString());
        res.render("home",{mang: data.rows});
        });
    });
    


app.listen(3000);
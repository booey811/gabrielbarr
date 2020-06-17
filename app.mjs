// Requirements
import express from "express";
import bodyParser from "body-parser";
import path from 'path';


const PORT = process.env.PORT || 3811
const app = express();


// App Set-Up
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");




// RESTful Routes

// Home Page
app.get("/", function(req, res){
    res.render("index")
});

// Music
app.get("/music", function(req, res){
    res.render("music")
});

// Color Game
app.get("/colors", function(req, res){
    res.render("colors")
});

//Parapper Rip
app.get("/parapperrip", function (req, res){
    res.render("parapperrip")
});

// Nicky Soft Touch Page
app.get("/nickysofttouch", function (req, res){
    res.render("nicky")
});

// Zac Gates Page
app.get("/zacgates", function (req, res){
    res.render("zac")
});

// About Page
app.get("/about", function(req, res){
    res.render("about")
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
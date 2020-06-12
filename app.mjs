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

// Projects Page
app.get("/projects", function(req, res){
    res.render("projects")
});

// About Page
app.get("/about", function(req, res){
    res.render("about")
});

// Contact Page
app.get("/contact", function(req, res){
    res.render("contact")
})



app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
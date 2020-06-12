// Requirements
import express from "express";
import bodyParser from "body-parser";
import path from 'path';


const PORT = process.env.PORT || 3811
const app = express();


// App Set-Up



// RESTful Routes

app.get("/", function(req, res){
    res.send("Home Page")
})





app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
// Requirements
import express from "express";
import bodyParser from "body-parser";

const app = express();

// App Set-Up




// RESTful Routes

app.get("/", function(req, res){
    res.send("Home Page")
})





app.listen(3811, function(){
	console.log("gabrielbarr running");
});
// Requirements
const   express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser");
        

// App Set-Up




// RESTful Routes

app.get("/", function(req, res){
    res.send("Home Page")
})





app.listen(3811, function(){
	console.log("gabrielbarr running");
});
var express = require("express");
var expressHandlebars = require("express-handlebars");

var app = express();

app.engine(".handlebars", expressHandlebars({extname: ".handlebars"}));

app.set("view engine", ".handlebars");

var testHandler = function(request, response) {
	console.log("Hello from Isaac");
	response.render("home");
};

app.get("/test", testHandler);

app.listen(8080);




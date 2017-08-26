var express = require("express");
var expressHandlebars = require("express-handlebars");
var path = require("path");

// create express app
var app = express();

// for any .handlebars files (like home.handlebars), use "express-handlebars" package
app.engine(".handlebars", expressHandlebars({extname: ".handlebars", defaultLayout: "layout"}));

// set .handlebars as files which should be rendered as views
app.set("view engine", ".handlebars");

// serves static files from public folder
app.use(express.static(path.join(__dirname, "/public")));

// sets layout of HTML as "defaut layout.handlebars"
// app.set("view options", {layout: "defaultlayout"});

var homeHandler = function(request, response) {
    console.log("Hello from Isaac");
    
    // 0 - when we go to "/test" URL, handle it here
    // 1 - look for "home.handlebars" file (.handlebars because we've set that as the view engine, "home" because we passed it as a parameter to "render" function)
    // 2 - (express has found our views/home.handlebars file) - pass the 2nd parameter object to home.handlebars
    // 3 - express-handlebars gets given 2 things: a string containing the text of views/home.handlebars, and 
    //          our object {title: "Devon Website"}. THIS OBJECT IS CALLED A VIEW MODEL.
    //          express-handlebars then replaces any {{<property-name>}} with values of properties from our VIEW MODEL
    // 4 - send the replaced text from express-handlebars to the client that made the request
	response.render("home", {title: "Devon Website"});

};

var pricesHandler = function(request, response) {
	response.render("prices", {heading: "Devon Website Prices", title: "Devon Website - Prices"});
}
    

app.get("/", homeHandler);
app.get("/prices", pricesHandler);

app.listen(8080);




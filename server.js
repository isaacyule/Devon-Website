var express = require("express");
var app = express();

var testHandler = function(request, response) {
	console.log("Hello from Isaac");
	response.send("hello from testHandler");
};

app.get("/test", testHandler);

app.listen(8080);




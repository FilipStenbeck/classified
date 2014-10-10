 var express = require("express");
 var app = express();
 var port = 9001;
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html')
 });

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });
 
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
var express = require('express'),
	bodyParser = require('body-parser'),
	DataManager = require('./db/dataManager'),
	db = new DataManager();
	Ad = require('./models/ad')
	app = express(),
	port = 9000;


/**************************************
 Server configuration
**************************************/
function allowCrossDomain (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(bodyParser.json()); 


//Send response back to clients
function sendResponse (err, ads, res) {
	if (err) {
   		console.log(err);
   		res.send([]);
   		return;	
   	}
   	res.send(ads);
};	


/*****************************************
	REST resources
*****************************************/
//Get all ads
app.get("/ad", function(req, res) {
	db.getAd({}, function (err, ads) {
   		sendResponse (err, ads, res);
 	});
});

//get ads based on category
app.get('/ad/:category', function (req, res) {
	var category = req.params.category;
	db.getAd({category : category}, function (err, ads) {
   		sendResponse (err, ads, res);
 	});
});

app.get("/populatedb", function(req, res) {
	db.populate();
});


//New ad
app.post('/ad', function (req, res) {
	var ad = req.body;
	console.log(ad)
	res.send(ad);
});

//Delete ad
app.delete('/ad/:id', function (req, res) {
	console.log("Delete ad");
});


/**************************************
Database inititaliziation
**************************************/
db.on('error', function(error) {
	console.log(error);
	throw error;
});

db.on('ready', function(error) {
	console.log('Database ready');
});

db.init();


//Start listen for req
app.listen(port, function() {
   console.log("Listening on " + port);
 });

var express = require('express'),
	DataManager = require('./db/dataManager'),
	db = new DataManager();
	Ad = require('./models/ad')
	app = express(),
	port = 9000;

var allowCrossDomain = function(req, res, next) {
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

//Get mock data
function getMockData() {
	var data = [];
	data.push( new Ad({
		title : 'My old phone',
		price : 123,
		description: 'My old phone broken but otherwise in good shape',
		category : 'phones',
		contact : {
			email : 'filip.stenbeck@gmail.com',
			phone : '0734-481258',
			city : 'Gustavsberg'
		},
	}));
	
	data.push(new Ad({
		title : 'Awesome car',
		price : 30000,
		description: 'A Volvo in good shape',
		category : 'cars',
		contact : {
			email : 'filip.stenbeck@gmail.com',
			phone : '0734-481258',
			city : 'Gustavsberg'
		},
	}));

	data.push(new Ad({
		title : 'Hire me',
		price : 30000,
		description: 'I will cut your hair',
		category : 'services',
		contact : {
			email : 'filip.stenbeck@gmail.com',
			phone : '0734-481258',
			city : 'Gustavsberg'
		},
	}));
	return data;
}

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

//New ad
app.post('/ad', function (req, res) {
	var ad = req.body;
	res.send(ad);
});

//Delete ad
app.delete('/ad/:id', function (req, res) {
	console.log("Delete ad");
});

//Initialize database
db.on('error', function(error) {
	console.log(error);
	throw error;
});

db.on('ready', function(error) {
	console.log('Database ready');
});

db.init();

//Start server
app.listen(port, function() {
   console.log("Listening on " + port);
 });

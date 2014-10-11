var Datastore = require('nedb'),
	util = require("util"),
	events = require("events"),
   	db = new Datastore({ filename: './db/store.db' });

function DataManager() {
    events.EventEmitter.call(this);
}
util.inherits(DataManager, events.EventEmitter),

DataManager.prototype.init = function init () {
	var self = this;
    db.loadDatabase(function (err) {    
    	if (err) {
    		self.emit("error", err);
    	}
    	self.emit("ready");
	});
};

DataManager.prototype.saveAd = function saveAd (ad, callback) {
	db.insert(ad, function (err, ad) {   
		callback(err, ad)		
	});
};

DataManager.prototype.getAd = function getAd (query, callback) {
	db.find(query, function (err, docs) {
		callback(err, docs)		
	});
};	

module.exports = DataManager;

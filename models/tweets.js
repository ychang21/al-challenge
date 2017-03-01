var orm = require('../config/orm.js');

var tweet = {
	all: function(cb) {
		orm.all('tweets', function(res){
			cb(res)
		});
	},
	create: function(name,cb) {
		orm.create('tweets', ['hash_name', 'saved'], [hashtag, false], cb);
	}
};

module.exports = tweet;

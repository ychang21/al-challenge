var express = require('express');
var twitter = require('twitter');
var keys = require('./keys.js');
var router = express.Router(); 
var client = new twitter(keys.twitterKeys);


// var hashtag = $('#hash-entry').val().trim();
// if(hashtag.charAt(0) === "#"){
// 	hashtag = hashtag.slice(1);
// }

// router.post('/tweets/create', function(req, res) {
// 	hashtag = req.body.hashtag; 
// 		client.post('search/tweets', { q: '%23' + hashtag, count: 3, lang: "en"}, function(error, tweets, response) {
// 	    if (!error) {
// 	    	console.log(JSON.stringify(tweets, undefined, 4));
// 	      res.status(200).render('index', { title: "Tweets", tweets: tweets.statuses});
// 	    }
// 	    else {
// 	      res.status(500).json({ error: error });
// 	    }
//   });
// });

router.get('/', function(req, res, next) {
  client.get('search/tweets', { q: '%23oscars', count: 3, lang: "en"}, function(error, tweets, response) {
    if (!error) {
    	console.log(JSON.stringify(tweets, undefined, 4));
      res.status(200).render('index', { title: "Tweets", tweets: tweets.statuses});
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;
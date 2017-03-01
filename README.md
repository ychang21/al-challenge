# al-challenge

### This is an app that uses the Twitter NPM package to generates 3 tweets from a hashtag search.

### To use this app: 
	1. clone the repository
	2. npm install everything in the package.json
	3. create an app on https://dev.twitter.com/ to retrieve the consumer key, consumer secret, access token key, and access token secret. Place these values in the controllers folder in a file called keys.js with the structure like this:
		exports.twitterKeys = {
		    consumer_key: 'Consumer Key',
		    consumer_secret: 'Consumer Secret',
		    access_token_key: 'Access Token Key',
		    access_token_secret: 'Access Token Key',
		}
	4. run node server.js
	5. open up localhost:3000 on your browser


### Technologies
* [Node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - lightweight interpreted or JIT-compiled programming language with first-class functions
* [Twitter NPM](https://www.npmjs.com/package/twitter) - Twitter API client library for Node.js
* [jQuery](https://jquery.com/) - fast, small, and feature-rich JavaScript library
* [Handlebars](http://handlebarsjs.com/) - provides the power necessary to let you build semantic templates effectively
* [MySQL](https://www.mysql.com/) - an open-source relational database management system


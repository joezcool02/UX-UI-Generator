const GoogleImages = require('google-images');
 
const client = new GoogleImages('011524445207737370194:dpe8mz5mdxa', 'AIzaSyCsXV4Qoq_vig3AJF63J8Rd_2hvgjFDa0E');

client.search('Goat')
	.then(function(images) {
        console.log(images);
	});
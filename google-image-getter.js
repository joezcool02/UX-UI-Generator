const GoogleImages = require('google-images');
var fs = require('fs'),
    request = require('request');
 
const client = new GoogleImages('011524445207737370194:dpe8mz5mdxa', 'AIzaSyAu_mnD5gzrjg6GltYb33EI7fySS29R6bY');

let searchTerm = 'Goat';
var imageUX;
var imageUI;

client.search(searchTerm)
	.then(function(images) {
        imageUX = images[0].url;
        console.log('Image UX : ',imageUX);

        download(imageUX, 'images/UX.png', function(){
            console.log('UX saved');
        });
	});
    
client.search(searchTerm, {page: 20})
	.then(function(images) {
        imageUI = images[0].url;
        console.log('Image UI : ',imageUI);

        download(imageUI, 'images/UI.png', function(){
            console.log('UI saved');
        });
	});


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
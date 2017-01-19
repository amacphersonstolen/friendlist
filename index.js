var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Hey man, I'm listening on the *3000 port.");
})
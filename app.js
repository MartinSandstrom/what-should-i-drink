const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, function() {
	console.info('Example app listening on port 3000!');
});

app.use('/js', express.static('app/js'));
app.use('/styles', express.static('app/styles'));
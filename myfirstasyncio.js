var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, 'utf8', callback);

function callback (err, data) {
	if (!err) {
		console.log(data.split('\n').length - 1);
	};
}
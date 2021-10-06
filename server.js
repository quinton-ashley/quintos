// run `node app.js` in the terminal
const log = console.log;
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.argv[2] || 8081;
const dev = process.argv[3] == '--dev';

let server = http.createServer((req, res) => {
	if (req.url == '/') req.url = '/QuintOS_live.html';
	let url = req.url.split('?')[0];

	if (url.slice(1, 5) == 'node') {
		if (dev) {
			url = '../../web/quintos-games' + url;
		} else {
			url = '..' + url.slice(13);
		}
	} else if (url.slice(1, 5) == 'load' || /games/i.test(url)) {
		if (dev) {
			url = '../../web/quintos-games' + url;
		} else {
			url = '../..' + url;
		}
	} else {
		url = '.' + url;
	}
	log(url);
	url = path.join(__dirname, url);
	console.log(`${req.method} '${url}'`);

	// based on the URL path, extract the file extention.
	const ext = path.parse(url).ext;
	// maps file extention to MIME type
	const MIME = {
		'.aac': 'audio/aac',
		'.css': 'text/css',
		'.doc': 'application/msword',
		'.html': 'text/html',
		'.ico': 'image/x-icon',
		'.jpg': 'image/jpeg',
		'.js': 'text/javascript',
		'.json': 'application/json',
		'.mp3': 'audio/mpeg',
		'.pdf': 'application/pdf',
		'.png': 'image/png',
		'.svg': 'image/svg+xml',
		'.ttf': 'font/ttf',
		'.wav': 'audio/wav',
		'.woff': 'font/woff',
		'.woff2': 'font/woff2'
	};

	let fileExists;
	try {
		fileExists = fs.statSync(url).isFile();
	} catch (error) {}

	if (!fileExists) {
		// if the file is not found, return 404
		res.statusCode = 404;
		res.end(`File ${url} not found!`);
		return;
	}

	// read file from file system
	let data;
	try {
		data = fs.readFileSync(url);
	} catch (err) {
		res.statusCode = 500;
		res.end(`Error getting the file: ${err}.`);
		return;
	}

	// if the file is found, set Content-Type and send data
	res.setHeader('Content-Type', MIME[ext] || 'text/plain');
	res.end(data);
});

server.listen(parseInt(port));

log(`Server listening on port: ${port}`);

var express = require('express');
var api = require("./api");
const app = express();

app.get('/api/users', function (req, res) {

	let users = api.users();

	users.then( (result) => {
		console.log('Obteniendo usuarios\nCantidad de resultado:' + result.length);
		res.status(200).json(result);
	});
});

app.get('/api/talks', function (req, res) {

	let talks = api.talks();

	talks.then( (result) => {
		console.log('Obteniendo usuarios\nCantidad de resultado:' + result.length);
		res.status(200).json(result);
	});
});

app.get('/api/speakers', function (req, res) {

	let speakers = api.speakers();

	speakers.then( (result) => {
		console.log('Obteniendo usuarios\nCantidad de resultado:' + result.length);
		res.status(200).json(result);
	});
});

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
});
/*var firebase = require('firebase');

const config = {
    serviceAccount: "lavictorialab-d394cf337b8e.json",
    databaseURL: "https://lavictorialab-a98f8.firebaseio.com"
};

firebase.initializeApp(config);*/
var firebase = require('firebase');

const config = {
    apiKey: "AIzaSyDnmZ9s2wBY-7wceqy3bdZ8u5623xm_3XU",
    authDomain: "lavictorialab-a98f8.firebaseapp.com",
    databaseURL: "https://lavictorialab-a98f8.firebaseio.com",
    storageBucket: "lavictorialab-a98f8.appspot.com",
    messagingSenderId: "912917476975"
  };

firebase.initializeApp(config);
var database = firebase.database();

var dataUsers = (id) => {
	let url = '/users';
	url += (id != undefined) ? id : '';
	return database.ref(url).once('value').then(function(snapshot) {
		return snapshot.val();
	});
};

var dataTalks = (id) => {
	let url = '/talks'
	url += (id != undefined) ? id : '';
	return database.ref(url).once('value').then(function(snapshot) {
		return snapshot.val();
	});
};

var dataSpeakers = (id) => {
	let url = '/speakers'
	url += (id != undefined) ? id : '';
	return database.ref(url).once('value').then(function(snapshot) {
		return snapshot.val();
	});
};

module.exports = {
	users : dataUsers,
	talks : dataTalks,
	speakers : dataSpeakers 
};
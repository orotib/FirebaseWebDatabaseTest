// Initialize Firebase
var config = {
	// YOUR API KEY
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
var lowerSecond = document.getElementById('lowerSecond');
var dbRef = firebase.database().ref();

dbRef.child('greetings').on('value', snap => bigOne.innerText = snap.val());
dbRef.child('name').on('value', snap => lowerSecond.innerText = snap.val());
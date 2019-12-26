// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyDIK2xhA_FswEgON4JVxg4ejZFtVt4Gbho",
    authDomain: "project-8046557094367350483.firebaseapp.com",
    databaseURL: "https://project-8046557094367350483.firebaseio.com",
    projectId: "project-8046557094367350483",
    storageBucket: "project-8046557094367350483.appspot.com",
    messagingSenderId: "378146246903",
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    Numberphone: $('.phone99').val(),
    email: $('.email').val(),
	Product ID: $('.id').val(),
    Cash on delivery: $('.product1').val(),
    Credit / Debit card: $('.product2').val(),
    
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});
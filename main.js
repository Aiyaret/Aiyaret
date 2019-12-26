// Paste the code from Firebase 
var config = {
 apiKey: "AIzaSyCkbqWEJ4880Qbg0WzXXwRfGo1V5-levag",
    authDomain: "ncut-745ad.firebaseapp.com",
    databaseURL: "https://ncut-745ad.firebaseio.com",
    projectId: "ncut-745ad",
    storageBucket: "ncut-745ad.appspot.com",
    messagingSenderId: "470496706427"
   
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

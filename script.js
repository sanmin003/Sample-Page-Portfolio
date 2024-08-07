
// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');
console.log(emailElement); 
console.log('Hello World!'); 
let submitButton = document.querySelector('#submit-button');

// getting 'click listener'

submitButton.addEventListener('click', function(e) {
	e.preventDefault();

// getting user entered values

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

// javascript validations

	if(emailValue.includes('@')) {
		//all good
		alert('thank you for your email');
	} else {
		alert('Oh no! That does not look like a valid email address. Please try again!');
	}

	if(messageValue.includes('shit')) {
		alert('The Language is not acceptable');
	} else {
		alert('Thank you for your message');
	}

	console.log('clicked button 123');
})
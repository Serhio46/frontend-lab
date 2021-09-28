'use strict';

document.querySelector('.menu__icon').addEventListener('click', function (e) {
	e.preventDefault();
	//console.log("Hello");
	document.querySelector(".resp-nav").classList.toggle("closenav")
})

document.querySelector('#search').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.overlay-search').classList.remove('close-search')
})

document.querySelector('.close-btn').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('.overlay-search').classList.add('close-search')
})

//const email =

/* const form = document.querySelector('form');
form.addEventListener('submit', formSend);

function formSend(e) {
	e.preventDefault();
	let email = document.querySelector('#email');
	let errorMessage = document.querySelector('.error');

	let formData = new FormData(form);
	console.log(formData);

	if (emailTest(email)) {
		errorMessage.classList.add('shown');
		setTimeout(() => errorMessage.classList.remove('shown'), 5000)
	} else {
		console.log('good')
	}
}

function emailTest(input) {
	const re = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	return !re.test(input.value)
} */
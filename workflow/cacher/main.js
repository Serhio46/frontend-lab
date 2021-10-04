import { Cacher } from './cacher.js';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const out = document.querySelector('.result');

const factorial = (n) => (n != 1) ? n * factorial(n - 1) : 1;
const cache = new Cacher();
const cachedFactorial = cache.withCache(factorial);

button.addEventListener('click', () => {
	const result = cachedFactorial(input.value);
	out.innerHTML = result;
});



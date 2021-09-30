//Кнопки пагинации
let forward = document.querySelector('#forward');
let back = document.querySelector('#back');

forward.addEventListener('click', () => {
	currentOffset += itemsPerPage;
	fetchHandler()
});

back.addEventListener('click', () => {
	if (currentOffset === 0) {
		currentOffset = totalCount - itemsPerPage;
	} else {
		currentOffset -= itemsPerPage;
	}
	fetchHandler()
});

//Запрос на сервре и изменение контена

let currentOffset = 0;
let itemsPerPage = 9;
let totalCount = 4000;//Хотел сюда взять по общему числу картинок(стр.17), но видно ограничения на бесплатной версии, поставил 4000, что бы работало при листании назад сразу!

async function fetchHandler() {
	try {
		let gifs = await fetch(`http://api.giphy.com/v1/gifs/search?q=cats&api_key=6yeW4Y3DQYvcNrhsWv8h741VsbL9kwUV&limit=${itemsPerPage}&offset=${currentOffset}`)
			.then((resp) => resp.json())
			.then((data => {
				if (totalCount === 0) {
					//totalCount = data.pagination.total_count; // Вот тут добавлял
				}
				return data.data
			}));
		changeCart(gifs);
	}
	catch (error) {
		console.log('Ошибка загрузки данных')
	}
}
fetchHandler();

//Функция изменения контента
function changeCart(gifs) {
	let carts = document.querySelectorAll('.item-story');

	let date = new Date();
	let min = date.getMinutes();
	let hours = date.getHours();
	let month = date.getMonth() + 1;
	let dat = date.getDate();

	const change = (current) => {
		if (current <= 9) {
			return `0${current}`
		} return current
	}

	const currentDay = `${date.getFullYear()}.${change(month)}.${change(dat)} ${change(hours)}:${change(min)}`;

	for (let elem = 0; elem < carts.length; elem++) {
		carts[elem].querySelector('.item-story__image').src = gifs[elem].images.original.url;
		carts[elem].querySelector('.item-story__title').innerHTML = gifs[elem].title;
		carts[elem].querySelector('.item-story__date').innerHTML = currentDay;
		carts[elem].querySelector('a').href = gifs[elem].url;
	}
}





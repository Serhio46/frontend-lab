const forward = document.querySelector('#forward');
const back = document.querySelector('#back');

forward.addEventListener('click', () => {
	currentOffset += (itemsPerPage - 1);
	fetchHandler()
});

back.addEventListener('click', () => {
	if (currentOffset === 0) {
		currentOffset = totalCount - (itemsPerPage - 1);
	} else {
		currentOffset -= (itemsPerPage - 1);
	}
	fetchHandler()
});

let currentOffset = 0;
const itemsPerPage = 9;
const totalCount = 4000;

async function fetchHandler() {
	try {
		const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=cats&api_key=6yeW4Y3DQYvcNrhsWv8h741VsbL9kwUV&limit=${itemsPerPage}&offset=${currentOffset}`);
		const respData = await response.json();
		const gifs = respData.data;
		changeCart(gifs);
	}
	catch (error) {
		console.log('data loading error')
	}
}
fetchHandler();

function changeCart(gifs) {
	const blogStory = document.querySelector('.blog__story');
	blogStory.innerHTML = '';

	const currentDate = new Date();
	const minutes = currentDate.getMinutes();
	const hours = currentDate.getHours();
	const month = currentDate.getMonth() + 1;
	const date = currentDate.getDate();

	const change = (current) => {
		if (current <= 9) {
			return `0${current}`
		}
		return current
	}

	const currentDay = `${currentDate.getFullYear()}.${change(month)}.${change(date)} ${change(hours)}:${change(minutes)}`;

	gifs.forEach((gif) => {
		const cartItem = document.createElement('div');
		cartItem.classList.add('item-story');
		cartItem.innerHTML = `
			<div class="item-story__img">
						<img src="${gif.images.original.url}" alt="${gif.title}"
							class="item-story__image">
						<div class="item-story__img-overlay">
							<div class="btn btn-image">
								<a id='icon' class="fas fa-link" href="${gifs.url}" target="_blank"></a>
							</div>
						</div>
					</div>
					<div class="item-story__content">
						<h4 class="item-story__title">${gif.title}</h4>
						<p class="item-story__date">${currentDay}</p>
						<p class="item-story__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
							deleniti, id quibusdam aut optio saepe soluta tempore neque voluptatum.</p>
			</div>
		`;
		blogStory.appendChild(cartItem);
	})
}





const menu = [
	{
		title: 'JavaScript',
		content: "JavaScript — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например,node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык сдинамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный например, функциональное программирование стили программирования.",
		id: 0,
	},
	{
		title: 'jQuery',
		content: "jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX.",
		id: 1,
	},
	{
		title: 'DOM',
		content: "DOM (от англ. Document Object Model — «объектная модель документа») — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.",
		id: 2,
	},
	{
		title: 'CSS',
		content: "CSS («каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.",
		id: 3,
	}
];

const cartText = document.querySelector('.cart__text');

function makeTabs(tabs) {
	const cartNav = document.querySelector('.cart__nav');

	tabs.forEach((elem, index) => {
		const cartNavItem = document.createElement('li');
		cartNavItem.id = elem.id;
		cartNavItem.addEventListener('click', (event) => {
			changeTab(event.target);
		});
		if (index === 0) {
			cartNavItem.classList.add('active');
			cartText.innerHTML = elem.content;
		}
		cartNavItem.innerHTML = elem.title;
		cartNav.appendChild(cartNavItem);
	});

	const cartNavWidth = document.querySelector('.cart__nav');
	cartText.style.width = getComputedStyle(cartNavWidth).width;
};

makeTabs(menu);

function changeTab(btn) {
	const allTabs = document.querySelectorAll('li');
	Array.from(allTabs).forEach((elem) => elem.classList.remove('active'));
	btn.classList.add('active');
	const item = tabs.find(elem => elem.title === btn.id);
	cartText.innerHTML = item.content;
}


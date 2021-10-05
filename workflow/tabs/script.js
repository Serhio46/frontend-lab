const tabs = [
	{
		title: 'JavaScript',
		content: "JavaScript — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например,node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык сдинамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный например, функциональное программирование стили программирования.",
	},
	{
		title: 'jQuery',
		content: "jQuery — набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими. Также библиотека jQuery предоставляет удобный API для работы с AJAX.",
	},
	{
		title: 'DOM',
		content: "DOM (от англ. Document Object Model — «объектная модель документа») — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML-, XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.",
	},
	{
		title: 'CSS',
		content: "CSS («каскадные таблицы стилей») — формальный язык описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL."
	},
];

const cartText = document.querySelector('.cart__text');

function makeTabs(tabs) {
	const cartNav = document.querySelector('.cart__nav');
	for (let i = 0; i < tabs.length; i++) {
		const cartNavItem = document.createElement('li');
		cartNavItem.addEventListener('click', (event) => {
			changeTab(event.target);
		})
		if (i === 0) {
			cartNavItem.classList.add('active');
			cartText.innerHTML = tabs[i].content;
		}
		cartNavItem.innerHTML = tabs[i].title;
		cartNav.appendChild(cartNavItem);
	}
};

makeTabs(tabs);

function changeTab(btn) {
	const allTabs = document.querySelectorAll('li');
	Array.from(allTabs).forEach((elem) => elem.classList.remove('active'));
	btn.classList.add('active');
	const key = btn.innerHTML;
	const item = tabs.find(elem => elem.title === key);
	cartText.innerHTML = item.content;
}


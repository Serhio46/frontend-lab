textArea.addEventListener('input', validationForm);

function validationForm() {
	//Проверяем фигурные скобки
	const validation = document.querySelector('.validation');
	if (textArea.value[0] !== '{' || textArea.value[textArea.value.length - 1] !== '}') {
		validation.innerHTML = 'Текст должен быть обернут в {}';
		validation.classList.add('jsonOn');
	}
	if ((textArea.value[0] === '{') && (textArea.value[textArea.value.length - 1] === '}')) {
		validation.innerHTML = '';
		validation.classList.remove('jsonOn');
	}

	const content = textArea.value;
	const result = content.split('\n').slice(1, -1);

	//ПРоверяем плавающую запятую
	const checkComma = result[result.length - 1];
	if (checkComma[checkComma.length - 1] === ",") {
		validation.innerHTML = 'Лишняя запятая';
		validation.classList.add('jsonOn');
	}

	//Проверяем ключи-значения
	result.forEach(elem => {
		console.log(elem);
		elem.split(':').forEach(elem => {
			console.log(elem)
			let str = elem.trim();
			if (str[str.length - 1] === ',' || str[str.length - 1] === '}') {
				str = str.slice(0, [str.length - 1]);

			} if (str[0] === '{') {
				str = str.slice(1).trim();
			}
			str = str.trim();
			if (str[0] !== '"' || str[str.length - 1] !== '"') {
				validation.innerHTML = 'Ключи и значения должны быть заключены в ""';
				validation.classList.add('validationOn');
			}
		})
	})
}
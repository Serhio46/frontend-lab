function formatInput(textForm) {
	console.log(textForm.value)
	const arrString = textForm.value.split('\n');
	console.log(arrString);
	recFormat(arrString);
}

function recFormat(text) {
	for (let i = 0; i < text.length; i++) {
		if (text[i][text[i].length - 1] === "{" || text[i][text[i].length - 1] === '[') {
			console.log(text[i]);
			for (let j = i + 1; j < text.length - 1; j++) {
				//console.log(text[j][text[j].length - 1])
				if (text[j][text[j].length - 2] === '}' || text[j][text[j].length - 2] === ']') {

				} break;
				if (text[j][text[j].length - 1] === '{' || text[j][text[j].length - 2] === '[') {
					const newArr = text.splice(j - 1);
					console.log(newArr)
				}
				text[j] = `    ${text[j]}`
				console.log(text[j])
			}
		}
	}
}
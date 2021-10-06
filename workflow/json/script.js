const json = {
	"name": "Sergei",
	"boolean": true,
	"friends": ["Vasil", "Den", "Gringo"],
	"object": {
		"a": "b",
		"c": "d",
		"a": {
			"f": "f"
		}
	},
	"string": "Hello"
};

const btn = document.querySelector('.content__btn');

function addElem(json) {
	const output = document.querySelector('.output');
	const object = document.createElement('div');
	object.classList.add('object-high');
	object.innerHTML = `
			<div class="elem-title">
				<div><i class="fas fa-caret-down"></i></div>
				<div class="object-title">BigObject</div>
				<div>{${Object.keys(json).length}}</div>
			</div>
			`;
	output.appendChild(object);

	const objHeigh = document.querySelector('.object-high');

	parse(json, objHeigh);
}

function parse(elems, block) {

	for (let key in elems) {

		if (typeof elems[key] === 'object') {
			const object = document.createElement('div');
			object.classList.add('object-low');
			object.innerHTML = `
				<div class="elem-title">
					<div><i class="fas fa-caret-down"></i></div>
					<div class="object-title">${key}</div>
					<div>${Array.isArray(elems[key]) ? `[${Object.keys(elems[key]).length}]` : `{${Object.keys(elems[key]).length}}`}</div >
				</div >
				`;
			block.appendChild(object);
			const newBlock = Array.from(document.querySelectorAll('.object-low')).pop();
			parse(elems[key], newBlock);
		} else {
			const primitive = document.createElement('div');
			primitive.classList.add('primitive');
			primitive.innerHTML = `${key} : <span class="type">${elems[key]}</span>`;
			block.appendChild(primitive);
			const type = Array.from(document.querySelectorAll('.type')).pop();
			console.log(elems[key]);
			switch (typeof elems[key]) {
				case 'number':
					type.classList.add('number');
					break;
				case 'string':
					type.classList.add('string');
					break;
				case 'boolean':
					type.classList.add('boolean');
			}
		}
	}
}

function buildTree() {
	const input = document.querySelector('.input');
	const middleResult = JSON.parse(input.value);
	console.log(middleResult);
	addElem(middleResult);
}

btn.addEventListener('click', buildTree);

const textArea = document.querySelector('.input');
textArea.addEventListener('keydown', function (event) {
	if (event.key === 'Tab') {
		console.log(this)
		event.preventDefault();
		console.log('hello')
		let value = '';
		const nextSelectionStart = this.selectionStart + 4;

		value += this.value.substring(0, this.selectionStart);
		value += '    ';
		value += this.value.substring(this.selectionEnd);

		this.value = value;
		this.selectionStart = nextSelectionStart;
		this.selectionEnd = nextSelectionStart;
	}
})
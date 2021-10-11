const textArea = document.querySelector('.input');
const myCodeMirror = CodeMirror.fromTextArea(textArea, {
	autoCloseBrackets: true
});
myCodeMirror.setSize("100%", "100%");

const btn = document.querySelector('.content__btn');
btn.addEventListener('click', buildTree);

function addElem(json) {
	let id = 0;
	const output = document.querySelector('.output');
	const object = document.createElement('div');
	object.classList.add('object-high');
	const jsonLength = Object.keys(json).length;
	object.innerHTML = `
		<div class="elem-title">
			<div class="btn" id='${id}' ><i class="fas fa-caret-down" id='${id}'></i></div>
			<div class="object-title">BigObject</div>
			<div>{${jsonLength}}</div>
		</div>
		<div class="obj-content" id='${id}'></div>
		`;
	id++;
	output.appendChild(object);
	const objHeigh = document.querySelector('.obj-content');
	parse(json, objHeigh, id);
}

function parse(elems, block, id) {
	for (let key in elems) {
		const objectJson = elems[key];
		if (typeof objectJson === 'object') {
			const newBlock = addObject(objectJson, key, id, block);
			parse(objectJson, newBlock, ++id);
		} else {
			addPrimitive(block, objectJson, key);
		}
	}
}

function addObject(objectJson, key, id, block) {
	const object = document.createElement('div');
	object.classList.add('object-low');
	const objectJsonLength = Object.keys(objectJson).length;
	object.innerHTML = `
		<div class="elem-title">
			<div class="btn" id='${id}'><i class="fas fa-caret-down" id='${id}'></i></div>
			<div class="object-title">${key}</div>
			<div>${Array.isArray(objectJson) ? `[${objectJsonLength}]` : `{${objectJsonLength}}`}</div >
		</div >
		<div class="obj-content" id='${id}'></div>
		`;
	block.appendChild(object);
	const newBlock = Array.from(document.querySelectorAll('.obj-content')).pop();
	return newBlock;
}

function addPrimitive(block, objectJson, key) {
	const primitive = document.createElement('div');
	primitive.classList.add('primitive');
	primitive.innerHTML = `${key} : <span class="type">${objectJson}</span>`;
	block.appendChild(primitive);
	const type = Array.from(document.querySelectorAll('.type')).pop();
	switch (typeof objectJson) {
		case 'number':
			type.classList.add('number');
			break;
		case 'string':
			type.classList.add('string');
			break;
		case 'boolean':
			type.classList.add('boolean');
	}
};

function buildTree() {
	myCodeMirror.save();
	const middleResult = JSON.parse(textArea.value);
	addElem(middleResult);
	const buttons = document.querySelectorAll('.btn');
	Array.from(buttons).forEach(elem => {
		elem.addEventListener('click', () => collapse(elem.id));
	});
}

function collapse(id) {
	const blocks = document.querySelectorAll('.obj-content');
	const icons = document.querySelectorAll('.fa-caret-down');
	const changeBlock = Array.from(blocks).find(elem => elem.id === id);
	const changeIcon = Array.from(icons).find(elem => elem.id === id);
	changeBlock.classList.toggle('hidden');
	changeIcon.classList.toggle('fa-caret-right');
}

CodeMirror.on(myCodeMirror, 'change', validation);

function validation() {
	myCodeMirror.save();
	const validation = document.querySelector('.validation');
	try {
		const a = JSON.parse(textArea.value);
		validation.innerHTML = '';
		validation.classList.remove('jsonOn');
	} catch (e) {
		validation.innerHTML = 'JSON input error';
		validation.classList.add('jsonOn');
	}
}

const format = document.querySelector('#format');
format.addEventListener('click', formatText)

function formatText() {
	const inputText = js_beautify(textArea.value, {
		"indent_size": 2,
	});
	myCodeMirror.setValue(inputText);
}
import React, { useState } from 'react'

import Header from './components/Header';
import Content from './components/Content';
import Modal from './components/Modal/Modal';

const phrases = [
	"Everybody should believe in something I believe I’ll have another drink",
	"“I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper",
	"“THIS WAS AN ALCOHOLIC COMA” - after a week vacation in Marmaris",
	"asdasd asdas sada pfpfpgfg; dsdfsdf dfdfdsd d f"
]

function App() {

	const [modalActive, setModalActive] = useState(false);

	return (
		<div >
			<Header setActive={setModalActive} />
			<Content setActive={setModalActive} phrases={phrases} />
			<Modal active={modalActive} setActive={setModalActive} title={"Authentication"} contentTitle={"Sign In"} />
		</div>
	);
}

export default App;

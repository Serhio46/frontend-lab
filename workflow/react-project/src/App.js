import React, { useState } from 'react'

import Header from './components/Header';
import Content from './components/Content';
import Modal from './components/Modal/Modal';

const phrases = [
	"Everybody should believe in something I believe I’ll have another drink",
	"“I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper",
	"“THIS WAS AN ALCOHOLIC COMA” - after a week vacation in Marmaris",
	"asdasd asdas sada pfpfpgfg; dsdfsdf dfdfdsd d ffsdf sdfsdf sdfsdf f"
];

const MODAL_AUTH_TITLE = "Authentication";
const MODAL_AUTH_CONTENT_TITLE = "Sign In";

function App() {

	const [modalActive, setModalActive] = useState(false);

	return (
		<div >
			<Header setActive={setModalActive} />
			<Content phrases={phrases} setActive={setModalActive} />
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title={MODAL_AUTH_TITLE}
				contentTitle={MODAL_AUTH_CONTENT_TITLE}
			/>
		</div>
	);
}
export default App;

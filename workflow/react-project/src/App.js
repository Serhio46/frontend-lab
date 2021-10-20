import Header from './components/Header';
import Content from './components/Content';
import ModalContainer from './components/Modal/ModalContainer';

const phrases = [
	"Everybody should believe in something I believe I’ll have another drink",
	"“I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper",
	"“THIS WAS AN ALCOHOLIC COMA” - after a week vacation in Marmaris",
	"asdasd asdas sada pfpfpgfg; dsdfsdf dfdfdsd d ffsdf sdfsdf sdfsdf f"
];

function App() {
	return (
		<div >
			<Header />
			<Content phrases={phrases} />
			<ModalContainer />
		</div>
	);
}
export default App;

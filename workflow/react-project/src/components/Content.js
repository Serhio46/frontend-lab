import coctail from '../image/coctail.png';
import Slider from './Slider/Slider';

function Content({ setActive, phrases }) {



	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='content__title'>Cocktail App</div>
				<div className='content__main'>
					<Slider phrases={phrases} />
					<div className='content__image' onClick={() => setActive(true)}>
						<img width={573} height={598} src={coctail} alt='coctail'></img>
						<div className='content__image-text'>Press on glass to get a random cocktail</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Content;
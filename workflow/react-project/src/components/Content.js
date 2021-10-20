import cocktail from '../image/coctail.png';
import SliderVertical from './Slider/SliderVertical';
import { showModal } from '../Redux/Actions/modalAction';
import { useDispatch } from 'react-redux';


function Content({ phrases }) {

	const dispatch = useDispatch();

	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='content__title'>Cocktail App</div>
				<div className='content__main'>
					<SliderVertical phrases={phrases} />
					<div className='content__image' onClick={() => dispatch(showModal())}>
						<img src={cocktail} alt='coctail'></img>
						<div className='content__image-text'>Press on glass to get a random cocktail</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Content;
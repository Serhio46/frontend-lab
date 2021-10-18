import Slider from 'react-slick';
import './slider.css';
import { useState } from 'react';

function SliderVertical({ phrases }) {

	const changeActiveIndex = (...args) => args[1] === phrases.length - 1
		? setActiveIndex(0)
		: setActiveIndex(args[1] + 1);

	const [activeIndex, setActiveIndex] = useState(1);

	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		beforeChange: changeActiveIndex,
		autoplay: true,
		autoplaySpeed: 2000
	}

	return (
		<div className="slider">
			<div className="slider-wrapper">
				<Slider {...settings}>
					{phrases.map((elem, index) => <div className={activeIndex === index
						? 'slider__text'
						: 'slider__text slider__text-hidden'} key={index}>{elem}</div>)}
				</Slider>
			</div>
		</div>
	);

}

export default SliderVertical;


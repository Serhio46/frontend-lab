import Slider from 'react-slick';
import './slider.css';
import { useState } from 'react';

const phrases = [
	"Everybody should believe in something I believe I’ll have another drink",
	"“I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper",
	"“THIS WAS AN ALCOHOLIC COMA” - after a week vacation in Marmaris",
	"asdasd asdas sada pfpfpgfg; dsdfsdf dfdfdsd d ffsdf sdfsdf sdfsdf f"
];

function SliderVertical() {

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


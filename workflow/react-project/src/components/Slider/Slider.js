import './slider.css';
import { useState, useEffect, useRef } from 'react';


function Slider({ phrases }) {

	const [activeIndex, setActiveIndex] = useState(0);
	const [position, setPosition] = useState(0);
	const [arrg, setArrg] = useState([]);

	const slider = useRef();

	console.log(arrg)

	useEffect(() => {
		setInterval(() => {
		}, 1000);
	}, [])

	const handleMove = () => {
		let current = activeIndex;
		let currentPos = position;
		current++;
		currentPos += 200;

		if (arrg.length === 0) {
			const prases = Array.from(slider.current.childNodes);
			setArrg(prases);
			prases.forEach((elem) => {
				elem.style = `transform: translateY(-${currentPos}px)`
			});
		} else {
			arrg.forEach((elem) => {
				elem.style = `transform: translateY(-${currentPos}px)`;
			})
			const newArg = [...arrg];
			const elem = newArg.slice(activeIndex - 1, activeIndex + 1);
			elem[0].style = `transform: translateY(-${currentPos}px)`;
			newArg.push(elem[0])
			setArrg(newArg);
		}




		setActiveIndex(current);
		setPosition(currentPos);
	}

	return (
		<div className="slider">
			<button onClick={handleMove}>Tis</button>
			<div className="slider-wrapper" ref={slider}>
				{arrg.length === 0 ?
					phrases.map((elem, index) => {
						return <div className={(index === activeIndex) ? "slider__text" : "slider__text slider__text-hidden"} key={index}>{elem}</div>;
					}) :
					arrg.map((elem, index) => {
						return <div className={(index === activeIndex) ? "slider__text" : "slider__text slider__text-hidden"} key={index}>{elem.innerHTML}</div>;
					})
				}
			</div>
		</div>
	);
}

export default Slider;
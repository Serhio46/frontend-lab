import { useState, useEffect, useCallback } from 'react';

function CurrentTime() {

	const [currentTime, setCurrenTime] = useState(timeMaker);

	function timeMaker() {
		const currentDate = new Date();
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();
		const cahgeTime = (unit) => (unit < 9) ? `0${unit}` : unit;
		return `${cahgeTime(hours)}:${cahgeTime(minutes)}:${cahgeTime(seconds)}`;
	}

	const getCurrentTime = useCallback(() => {
		const updateTime = timeMaker();
		setCurrenTime(updateTime)
	}, []);

	useEffect(() => {
		setInterval(getCurrentTime, 1000);
	}, [getCurrentTime]);

	return (
		<>
			<p>{currentTime} </p>
		</>
	);
}

export default CurrentTime;
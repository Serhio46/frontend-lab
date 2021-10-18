import { useState, useEffect, useCallback } from 'react';
const moment = require('moment');

function CurrentTime() {

	const [currentTime, setCurrenTime] = useState(timeMaker);

	function timeMaker() {
		return moment().format('kk:mm:ss');
	}

	const getCurrentTime = useCallback(() => {
		const updateTime = timeMaker();
		setCurrenTime(updateTime);
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
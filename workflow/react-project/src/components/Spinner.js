import React from 'react';
//import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner() {
	return (
		<BeatLoader
			color={'#4CAF50'}
			loading={true}
			size={50} />
	)
}

export default Spinner;

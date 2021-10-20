import "./modal.css";
import { useEffect } from "react";
import Modal from './Modal';

import { useSelector, useDispatch } from 'react-redux';
import { fetchLoadCoctail } from '../../Redux/Actions/randomCocktailAction';


function ModalAPI() {

	const randomCoctail = useSelector(({ randomCocktailReducer }) => randomCocktailReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLoadCoctail())
	}, [dispatch]);

	return (
		<Modal randomCoctail={randomCoctail} />
	);
}

export default ModalAPI;
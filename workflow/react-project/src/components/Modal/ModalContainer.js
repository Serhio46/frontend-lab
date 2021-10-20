import "./modal.css";
import { useEffect } from "react";
import Modal from './Modal';

import { useSelector, useDispatch } from 'react-redux';
import { loadRandomCocktail } from '../../Redux/Actions/randomCocktailAction';


function ModalContainer() {

	const randomCocktail = useSelector(({ randomCocktailReducer }) => randomCocktailReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRandomCocktail())
	}, [dispatch]);

	return (
		<Modal randomCocktail={randomCocktail} />
	);
}

export default ModalContainer;
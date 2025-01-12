import { useEffect } from "react";
import Modal from './ModalCocktail';
import ModalSignIn from '../Modal/ModalSignIn';

import { useSelector, useDispatch } from 'react-redux';
import { loadRandomCocktail } from '../../Redux/Actions/randomCocktailAction';
import ModalLayout from './ModalLayout';


function ModalContainer() {

	const { isLoading, cocktail: randomCocktail } = useSelector(({ randomCocktailReducer }) => randomCocktailReducer);
	const { auth } = useSelector(({ modalReducer }) => modalReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRandomCocktail())
	}, [dispatch]);

	return (
		<ModalLayout title={auth ? 'Authentication' : 'Random Coctail'}>{auth ? <ModalSignIn /> : <Modal isLoading={isLoading} randomCocktail={randomCocktail} />}</ModalLayout>
	);
}

export default ModalContainer;
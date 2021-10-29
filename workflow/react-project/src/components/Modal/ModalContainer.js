import { useEffect } from "react";
import Modal from './ModalCoctail';
import ModalSignIn from '../Modal/ModalSignIn';

import { useSelector, useDispatch } from 'react-redux';
import { loadRandomCocktail } from '../../Redux/Actions/randomCocktailAction';
import ModalLayout from './ModalLayout';



function ModalContainer() {

	const randomCocktail = useSelector(({ randomCocktailReducer }) => randomCocktailReducer);
	const { auth } = useSelector(({ modalReducer }) => modalReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRandomCocktail())
	}, [dispatch]);

	return (
		<>
			<ModalLayout title={'Authentication'}>{auth ? <ModalSignIn /> : <Modal randomCocktail={randomCocktail} />}</ModalLayout>
		</>
	);
}

export default ModalContainer;
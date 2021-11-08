import React from 'react';
import styles from './SearchCard.module.css';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { showModal } from '../../Redux/Actions/modalAction';
import cocktail from '../../image/cocktail.png';
import { showCoctail } from '../../Redux/Actions/randomCocktailAction';


function SearchCard({ title, imgPath, alcoholic, initialCocktail }) {

	const dispatch = useDispatch();

	const showCard = () => {
		dispatch(showCoctail(initialCocktail));
		dispatch(showModal());
	}

	const showToast = () => {
		alert('Its just an ingridient')
	}

	return (
		<div className={styles.wrapper} onClick={imgPath ? showCard : showToast}>
			<div className={styles.cardimg}>
				<img src={imgPath || cocktail} alt="cocktail" />
			</div>
			<p className={styles.cardTitle}>{title}</p>
			<div className={styles.cardInfo}>
				{alcoholic && <span>18+</span>}
				<FontAwesomeIcon icon={faCocktail} />
			</div>
		</div>
	)
}

export default SearchCard;

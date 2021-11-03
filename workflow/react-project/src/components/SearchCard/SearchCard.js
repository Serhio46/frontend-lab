import React from 'react';
import styles from './SearchCard.module.css';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cocktail from '../../image/cocktail.png';


function SearchCard({ title, imgPath, alcoholic }) {

	return (
		<div className={styles.wrapper}>
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

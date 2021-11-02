import React, { useState } from 'react';
import styles from './Search.module.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchCard from '../SearchCard/SearchCard';
import { filteredCocktails, sortCocktailsBy } from '../../Redux/Actions/filterAction'
import { useDispatch, useSelector } from 'react-redux';

function SearchContent() {

	const [search, setSearch] = useState('');

	const { sortedCocktails, sortBy } = useSelector(({ filterReducer }) => filterReducer);
	const dispatch = useDispatch();

	const handleChngeSortBy = (e) => {
		dispatch(sortCocktailsBy(e.target.id));
		dispatch(filteredCocktails(e.target.id, search));
	}

	const handleSearch = (e) => {
		setSearch(e.target.value);
		dispatch(filteredCocktails(sortBy, e.target.value));
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputBlock}>
				<input
					onChange={handleSearch}
					value={search}
					className={styles.input}
					placeholder="Search..." />
				<div className={styles.inputImg}>
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
			<form onChange={handleChngeSortBy} className={styles.filterblock}>
				<div className={styles.radio}>
					<input type="radio" id="drinkName" name="filter" />
					<label htmlFor='drinkName'>By drink name</label>
				</div>
				<div className={styles.radio}>
					<input type="radio" id="ingredientName" name="filter" />
					<label htmlFor='ingredientName'>By ingredient name</label>
				</div>
			</form>
			<div className={styles.filterItem}>
				{sortedCocktails && sortedCocktails.map((drink) => <SearchCard alcoholic={drink.alcoholic} title={drink.title} imgPath={drink.imgPath} key={drink.key} />)}
			</div>

		</div>
	)
}

export default SearchContent

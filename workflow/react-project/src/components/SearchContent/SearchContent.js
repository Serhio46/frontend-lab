import React, { useState, useEffect, useCallback } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filteredCocktails, sortCocktailsBy } from '../../Redux/Actions/filterAction';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import FilterToast from '../FilterToast';
import styles from './Search.module.css';
import SearchCard from '../SearchCard/SearchCard';
import { setSortCocktails, setError } from '../../Redux/Actions/filterAction';
import { loadRandomCocktail } from '../../Redux/Actions/randomCocktailAction';

function SearchContent() {

	const [search, setSearch] = useState('');
	const [checked, setChecked] = useState('drinkName');

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(setError({
				type: '',
				message: "",
			}))
			dispatch(setSortCocktails([]));
			dispatch(loadRandomCocktail());
		}
	}, [dispatch])

	const { sortedCocktails, sortBy, initialCoctails } = useSelector(({ filterReducer }) => filterReducer);

	const handleRadioChange = (e) => setChecked(e.target.id);

	const handleChngeSortBy = (e) => {
		dispatch(sortCocktailsBy(e.target.id));
		dispatch(filteredCocktails(e.target.id, search));
	}

	const debouncedfilteredCocktails = useCallback(debounce((sortBy, value) => dispatch(filteredCocktails(sortBy, value)), 300), [])

	const handleSearch = (e) => {
		setSearch(e.target.value);
		debouncedfilteredCocktails(sortBy, e.target.value);
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
					<input type="radio" id="drinkName" name="filter" checked={checked === 'drinkName' ? true : false} onChange={handleRadioChange} />
					<label htmlFor='drinkName'>By drink name</label>
				</div>
				<div className={styles.radio}>
					<input type="radio" id="ingredientName" name="filter" checked={checked === 'ingredientName' ? true : false} onChange={handleRadioChange} />
					<label htmlFor='ingredientName'>By ingredient name</label>
				</div>
			</form>
			<div className={styles.filterItem}>
				{sortedCocktails.map((drink, index) => <SearchCard
					initialCocktail={initialCoctails[index]}
					alcoholic={drink.alcoholic}
					title={drink.title}
					imgPath={drink.imgPath}
					key={drink.key} />
				)}
			</div>
			<FilterToast />
		</div>
	)
}

export default SearchContent

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { closeModal } from '../../Redux/Actions/modalAction';
import { useSelector, useDispatch } from 'react-redux';


function Modal({ randomCoctail }) {

	const title = randomCoctail.title;
	const { contentTitle, imgPath, instruction, ingrQnty } = randomCoctail.cocktail;

	const modalActive = useSelector(({ modalReducer }) => modalReducer.visible);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(closeModal())
	}

	return (
		<div className={modalActive ? 'modal active' : 'modal'} onClick={handleCloseModal}>
			<div className={modalActive ? 'modal__form active' : 'modal__form'} onClick={(event) => event.stopPropagation()}>
				<div className='modal__header'>
					<div className='modal__title'>{title}</div>
					<div className='modal__close' onClick={handleCloseModal}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="modal__content-scroll">
					<div className='modal__content'>
						<div className='modal__content-favorite' >
							<FontAwesomeIcon icon={faStar} size="2x" color="#1B5E20" />
						</div>
						<div className='modal__content-title'>{contentTitle}</div>
						<div className='modal__content-image'>
							<img className='modal__content-img' src={imgPath} alt="cocktail"></img>
						</div>
						<div className='modal__content-recipe'>
							<p>Recipe</p>
							<div className='modal__content-table'>
								<table>
									<tbody>
										<tr>
											<td></td>
											<td>Ingredient</td>
											<td>Qnty</td>
											<td></td>
										</tr>
										{ingrQnty && ingrQnty.map((item, index) => {
											return <tr key={item.id}>
												<td>{index + 1}</td>
												<td>{item.ingredient}</td>
												<td>{item.quantity}</td>
												<td>{item.unit}</td>
											</tr>
										})}
									</tbody>
								</table>
							</div>
							<div className='modal__content-recipetext'>{instruction}</div>
						</div>
					</div>
				</div>

			</div>
		</div >
	);
}

export default Modal;

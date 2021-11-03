import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import './modal.css';
import CastomToast from '../castomToast/CastomToast';

function ModalCoctail({ randomCocktail }) {

	const { cocktail: { contentTitle, imgPath, instruction, ingredirntQuantity } } = randomCocktail;

	return (
		<div className="modal__content-scroll">
			<div className='modal__content'>
				<div className='modal__content-favorite' >
					<FontAwesomeIcon icon={faStar} size="2x" color="#1B5E20" />
				</div>
				<div className="toast">
					<CastomToast title={"Save to Liked"} component="modal" />
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
								{ingredirntQuantity && ingredirntQuantity.map((item, index) => {
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
	);
}

export default ModalCoctail;

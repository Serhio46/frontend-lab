import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeAuth } from '../../Redux/Actions/modalAction';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import './modal.css';


function ModalLayout({ title, children }) {

	const modalActive = useSelector(({ modalReducer }) => modalReducer.visible);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(closeAuth(false))
	}

	return (
		<div className={classNames('modal', { active: modalActive })} onClick={handleCloseModal}>
			<div className={classNames('modal__form', { active: modalActive })} onClick={(event) => event.stopPropagation()}>
				<div className='modal__header'>
					<div className='modal__title'>{title}</div>
					<div className='modal__close' onClick={handleCloseModal}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				{children}
			</div>
		</div >
	);
}

export default ModalLayout;
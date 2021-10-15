import "./modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Modal({ active, setActive, title, contentTitle, children }) {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={(() => setActive(false))}>
			<div className={active ? 'modal__form active' : 'modal__form'} onClick={(event) => event.stopPropagation()}>
				<div className='modal__header'>
					<div className='modal__title'>{title}</div>
					<div className='modal__close' onClick={(() => setActive(false))}>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className='modal__content'>
					<div className='modal__content-title'>{contentTitle}</div>
					{children}
				</div>
			</div>
		</div>
	);
}

export default Modal;
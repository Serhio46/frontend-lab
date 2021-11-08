import React from 'react';
import styles from './Toast.module.css';

function CastomToast({ title, component }) {
	return (
		<div className={component === 'header' ?
			styles.toastHeader :
			styles.toastModal}>
			<span className={styles.polygon}></span>
			<div className={styles.wrapper}>
				<p>{title}</p>
			</div>
		</div>
	)
}
export default CastomToast

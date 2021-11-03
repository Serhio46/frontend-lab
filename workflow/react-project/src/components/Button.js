import classNames from 'classnames';

function Button({ btnSignin, children, type }) {
	return (
		<button type={type} className={classNames('btn-register', { 'btn-signin': btnSignin })}>{children}</button>
	);
}
export default Button;
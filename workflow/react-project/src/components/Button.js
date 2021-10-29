function Button({ btnSignin, children, type }) {
	return (
		<button type={type} className={`btn-register ${btnSignin}`}>{children}</button>
	);
}
export default Button;
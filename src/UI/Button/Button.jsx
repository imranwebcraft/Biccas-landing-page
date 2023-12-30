const Button = ({ text, className }) => {
	return (
		<button className={` ${className} text-[16px] text-white font-medium`}>
			{text}
		</button>
	);
};

export default Button;

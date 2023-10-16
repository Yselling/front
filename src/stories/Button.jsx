const Button = ({ onClick, buttonTitle, icon, className }) => {
    return (
        <button onClick={onClick} className={`flex items-center ${className}`}>
            <span>{buttonTitle}</span>
            {icon && <span className="ml-1">{icon}</span>}
        </button>
    );
}

export default Button;

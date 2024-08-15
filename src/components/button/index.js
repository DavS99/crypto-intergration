import './index.css';

const Button = ({ value, onClick, icon }) => {
    return (
        <button onClick={onClick} className="Button">
            {icon && <div className="Button__icon">{icon}</div>}
            <div className="Button__value">{value}</div>
        </button>
    )
};

export default Button;
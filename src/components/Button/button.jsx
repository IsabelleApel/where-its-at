import { useNavigate } from "react-router-dom";
import './button.css';

function button({to, text, disabled}) {
  const navigate = useNavigate();

  const navToPage = (url) => {
    if(!disabled) navigate(url)
  }

  return (
    <button 
      onClick={() => navToPage(to)}
      disabled={disabled}
      className={`button ${disabled ? 'button-disabled' : ''}`}
    >
      {text}
    </button>
  )
}

export default button;
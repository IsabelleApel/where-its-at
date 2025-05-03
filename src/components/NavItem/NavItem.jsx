import './navItem.css';
import { NavLink } from 'react-router-dom';

function NavItem({to, label, className}) {
  return (
    <li className='list-item'>
        <NavLink to={to} className={className}>{label}</NavLink>
    </li>
  )
}

export default NavItem;
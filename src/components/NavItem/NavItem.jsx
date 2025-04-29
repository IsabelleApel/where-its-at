import './navItem.css';
import { NavLink } from 'react-router-dom';

function NavItem({to, label}) {
  return (
    <li className='list-item'>
        <NavLink to={to} className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'}>{label}</NavLink>
    </li>
  )
}

export default NavItem;
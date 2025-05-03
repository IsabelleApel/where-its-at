import NavItem from '../NavItem/NavItem';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav>
        <ul className='nav-list'>
          <NavItem to="/events" label="Events" className="nav-link" />
          <NavItem to="/order" label={<FontAwesomeIcon icon={faCartShopping} className='fa-xl' />} className="nav-link cart-icon"/>
          <NavItem to="/" label="Hem" className="nav-link"/>
        </ul>
    </nav>
  )
}

export default NavBar
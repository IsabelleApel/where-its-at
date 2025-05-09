import NavItem from '../NavItem/NavItem';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useEventsStore from '../../stores/useEventsStore';

function NavBar() {
  const {events} = useEventsStore();
  const cart = events.filter(event => event.quantity > 0)

  return (
    <nav>
        <ul className='nav-list'>
          <NavItem to="/events" label="Events" className="nav-link" />
          <NavItem
            to="/order"
            label={
              <span className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="fa-xl" />
                {cart.length > 0 && <span className="dot-indicator" />}
              </span>
            }
            className="nav-link cart-icon"
          />
          <NavItem to="/" label="Hem" className="nav-link"/>
        </ul>
    </nav>
  )
}

export default NavBar
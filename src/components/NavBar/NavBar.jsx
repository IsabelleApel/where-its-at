import NavItem from '../NavItem/NavItem';
import './navBar.css';

function NavBar() {
  return (
    <nav>
        <ul className='nav-list'>
          <NavItem to="/events" label="Events" />
          <NavItem to="/" label="Hem"/>
        </ul>
    </nav>
  )
}

export default NavBar
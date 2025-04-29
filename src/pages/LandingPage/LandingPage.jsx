import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './landingPage.css';
import NavBar from '../../components/NavBar/NavBar';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <section className="page page--center">
      <img src={logo} alt="logo-img" className='logo-img' />
      <h1>Where it's @</h1>
      <p className='landing-page__text'>Ticketing made easy</p>
      <button onClick={() => navigate('/events')}>Events</button>
      <NavBar />
    </section>
  )
}

export default LandingPage;
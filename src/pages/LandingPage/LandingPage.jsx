import logo from '../../assets/logo.png';
import './landingPage.css';

function LandingPage() {
  return (
    <section className="page">
      <img src={logo} alt="logo-img" className='logo-img' />
      <h1>Where it's @</h1>
      <p className='landing-page__text'>Ticketing made easy</p>
    </section>
  )
}

export default LandingPage;
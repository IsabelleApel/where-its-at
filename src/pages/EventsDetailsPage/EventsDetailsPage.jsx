import NavBar from '../../components/NavBar/NavBar';
import './eventsDetailsPage.css';
import EventDetailsCard from "../../components/EventDetailsCard/EventDetailsCard";

function EventsDetailsPage() {

  return (
    <section className="page">
      <h1>Event</h1>
      <p className="info-text">You are about to score some tickets to</p>
      <EventDetailsCard />
      <NavBar />
    </section>
  )
}

export default EventsDetailsPage;
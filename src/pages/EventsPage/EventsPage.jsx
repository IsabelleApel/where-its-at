import useEventsStore from "../../stores/useEventsStore";
import SearchBar from '../../components/SearchBar/SearchBar';
import EventCard from '../../components/EventCard/EventCard';
import NavBar from "../../components/NavBar/NavBar";

function EventsPage() {
  const { events, filteredEvents, filterEvents } = useEventsStore();

  const handleChange = (value) => {
    if(value.length >= 3){
      filterEvents(value);
    }else{
      filterEvents('');
    }
  }

  return (
    <section className="page">
      <h1>Events</h1>
      <SearchBar handleChange={handleChange} />
      {events && events.length > 0 ? 
        ( filteredEvents.length > 0 ? (
          <section className="events"> {filteredEvents.map(filtevent => <EventCard key={filtevent.id} event={filtevent} />)}</section>
          ) : (
          <section className="events"> {events.map(event => <EventCard key={event.id} event={event} />)}</section>)
        ) : (<p className="no-events">No available events</p>)}
      <NavBar />
    </section>
  )
}

export default EventsPage;
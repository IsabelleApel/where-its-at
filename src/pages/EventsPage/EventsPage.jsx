import { useEffect, useState } from "react";
import useEventsStore from "../../stores/useEventsStore";
import SearchBar from '../../components/SearchBar/SearchBar';
import EventCard from '../../components/EventCard/EventCard';

function EventsPage() {
  const { events } = useEventsStore();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
      events.map((event) => console.log(event))
  },[events])

 

  return (
    <section className="page">
      <h1>Events</h1>
      <SearchBar setInputValue={setInputValue} inputValue={inputValue} />
      {
        events && events.length > 0 ? (
          <section className="events">
            {
              events.map(event => 
                <EventCard key={event.id} event={event} />
              )
            }
          </section>
        ) : (
          <p className="no-events">No available events</p>
        )}
    </section>
  )
}

export default EventsPage;
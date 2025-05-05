import useEventsStore from '../../stores/useEventsStore';
import TicketCard from '../../components/TicketCard/TicketCard';
import './ticketsPage.css';

function TicketsPage() {
  const {events} = useEventsStore();
  const cart = events.filter(event => event.quantity > 0)

  return (
    <section className="page">
      {cart.length > 0 ? (
          <section className="tickets"> 
            {cart.map(event => <TicketCard key={event.id} event={event} />)}
          </section>
          ) : (
          <p className="no-tickets">You have no tickets yet</p>
        )}
    </section>
  )
}

export default TicketsPage;
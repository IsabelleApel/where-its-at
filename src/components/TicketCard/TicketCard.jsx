import './ticketCard.css';
import Barcode from 'react-barcode';

function TicketCard({event}) {

  return (
    <section className="ticket">
      <section className="what">
        <p className='ticket__section-info'>what</p>
        <h1>{event.name}</h1>
      </section>
      <section className="where">
        <p className='ticket__section-info'>where</p>
        <p className='where__info'>{event.where}</p>
      </section>
      <section className="when">
        <div className="when-wrapper">
          <p className='ticket__section-info'>when</p>
          <p className='when__info'>{event.when.date}</p>
        </div>
        <div className="from-wrapper">
          <p className='ticket__section-info'>from</p>
          <p className='when__info'>{event.when.from}</p>
        </div>
        <div className="to-wrapper">
          <p className='ticket__section-info'>to</p>
          <p className='when__info'>{event.when.to}</p>
        </div>
      </section>
      <section className="seats">
        <p className='ticket__section-info'>info</p>
        <p className='seats__info'>{`Section ${event.seat.section} - seat ${event.seat.number}`}</p>
      </section>
      <section className="barcode">
        <Barcode value={event.orderNumber} background='transparent'/>
      </section>
    </section>
  )
}

export default TicketCard;
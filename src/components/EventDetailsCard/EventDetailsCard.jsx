import { useParams } from "react-router-dom";
import useEventsStore from "../../stores/useEventsStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button/button";

function EventDetailsCard() {

  const { events, addToCart, removeFromCart } = useEventsStore();
  const { id } = useParams();
  const event = events.find(e => e.id === id)

  return (
    <>
      <section className="event-info">
        <p className="event-info__name">{event.name}</p>
        <p className="event-info__when">{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</p>
        <p className="event-info__where">{`@ ${event.where}`}</p>
      </section>
      <section className="tickets">
        <p className="tickets__total-price">{event.quantity === 0 ? `${event.price} sek` :`${event.price * (event.quantity)} sek`}</p>
        <div className="tickets__adjust-price">
          <FontAwesomeIcon icon={faMinus} onClick={() => removeFromCart(event.id)} className="tickets__icon fa-lg"/>
          <p className="tickets__amount">{event.quantity}</p>
          <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(event.id)} className="tickets__icon fa-lg"/>
        </div>
      </section>
      <Button to={'/order'} text={'Lägg i varukorg'} disabled={event.quantity === 0}/>
    </>
  )
}

export default EventDetailsCard;
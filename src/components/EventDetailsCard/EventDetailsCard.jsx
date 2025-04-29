import { useParams } from "react-router-dom";
import useEventsStore from "../../stores/useEventsStore";
import useCountStore from "../../stores/useCountStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

function EventDetailsCard() {

  const { count, increment, decrement } = useCountStore();
  const { events } = useEventsStore();
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
        <p className="tickets__total-price">{`${event.price * count} sek`}</p>
        <div className="tickets__adjust-price">
          <FontAwesomeIcon icon={faMinus} onClick={decrement} className="tickets__icon fa-lg"/>
          <p className="tickets__amount">{count}</p>
          <FontAwesomeIcon icon={faPlus} onClick={increment} className="tickets__icon fa-lg"/>
        </div>
      </section>
      <AddToCartBtn event={event} quantity={count} />
    </>
  )
}

export default EventDetailsCard;
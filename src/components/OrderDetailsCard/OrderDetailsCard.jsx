import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import useEventsStore from '../../stores/useEventsStore';
import './orderDetailsCard.css'

function OrderDetailsCard({event}) {
  
  const {addToCart, removeFromCart} = useEventsStore();

  return (
    <section className="order-card">
      <h2 className="order-card__title">{event.name}</h2>
      <p className="order-card__when">{`${event.when.date} kl ${event.when.from} - ${event.when.to}`}</p>
      <div className="order-card__amount-wrapper">
        <FontAwesomeIcon icon={faMinus} onClick={() => removeFromCart(event.id)} className="order-card__icon fa-lg"/>
        <p className="order-card__amount">{event.quantity}</p>
        <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(event.id)} className="order-card__icon fa-lg"/>
      </div>
    </section>
  )
}

export default OrderDetailsCard;
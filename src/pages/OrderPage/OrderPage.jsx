
import NavBar from '../../components/NavBar/NavBar';
import OrderDetailsCard from "../../components/OrderDetailsCard/OrderDetailsCard";
import useEventsStore from '../../stores/useEventsStore';
import Button from '../../components/Button/button';
import './orderPage.css';

function OrderPage() {
  
  const {events} = useEventsStore();
  const cart = events.filter(event => event.quantity > 0)

  const total = cart.reduce((sum, event) => sum + event.quantity * event.price, 0);
  

  return (
    <section className="page">
      <h1>Order</h1>
        {cart.length > 0 ? (
          <section className="order-details"> {cart.map(event => <OrderDetailsCard key={event.id} event={event} />)}</section>
          ) : (
          <p className="no-events">No orders yet</p>
        )}
        {cart.length > 0 ? (
          <section className="order-sum">
            <p className='order-sum__text'>Totalt värde på order</p>
            <p className='order-sum__price'>{`${total} sek`}</p>
          </section>
          ) : (
          <p className="order__sum"></p>
        )}
      
      <Button to={'/tickets'} text={'Skicka order'} disabled={cart.length === 0}/>
      <NavBar />
    </section>
  )
}

export default OrderPage;
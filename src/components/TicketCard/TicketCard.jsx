import './ticketCard.css';
import Barcode from 'react-barcode';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function TicketCard({event, index, tickets, setTickets, originalTickets}) {

  const x = useMotionValue(0)

  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-200, 200], [-15, 15]);
  const isFront = index === 0;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index % 2 ? 6 : -6;
    return rotateRaw.get() + offset;
  })

  const handleDragEnd = () => {
    const swipeStrength = Math.abs(x.get());
    if (swipeStrength > 50) {
      setTickets((prev) => {
        const updated = prev.filter((t) => t.id !== event.id);
        return updated.length === 0 ? [...originalTickets] : updated;
      });
    }
  };

    const handleDate = ((date) => {
    const divide = date.split(" ");

    const day = divide[0];
    const month = divide[1].slice(0, 3);

    return {day, month};
  });

  const {day, month} = handleDate(event.when.date);

  return (
    <motion.div 
      className="ticket" 
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      style={{
        x, 
        opacity,
        rotate,
        zIndex: tickets.length - index,
        boxShadow: isFront
        ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
        : undefined,
      }}
      onDragEnd={handleDragEnd}
    >
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
          <p className='when__info'>{`${day} ${month}`}</p>
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
        <Barcode value={event.orderNumber} background='#e0e0e0'/>
      </section>
    </motion.div>
  )
}

export default TicketCard;
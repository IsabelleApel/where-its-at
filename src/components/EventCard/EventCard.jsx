import { Link } from 'react-router-dom';
import './eventCard.css';
import useCountStore from '../../stores/useCountStore';

function EventCard({event}) {
  const { reset } = useCountStore();

  const handleDate = ((date) => {
    const divide = date.split(" ");

    const day = divide[0];
    const month = divide[1].slice(0, 3).toUpperCase();

    return {day, month};
  });

  const {day, month} = handleDate(event.when.date);
  
  return (
    <article className="event-card">
      <Link 
        to={`/events/${event.id}`}
        className='event-card__link'
        onClick={reset}
        >
        <div className="left">
          <p className="date">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </p>
        </div>
        <div className="middle">
          <h2 className='event-name'>{event.name}</h2>
          <p className='event-place'>{event.where}</p>
          <p className='event-time'>{`${event.when.from} - ${event.when.to}`}</p>
        </div>
        <div className="right">
          <p>{`${event.price} sek`}</p>
        </div>
      </Link>
    </article>
  )
}

export default EventCard;
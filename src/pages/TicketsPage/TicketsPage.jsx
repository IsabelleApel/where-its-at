import useEventsStore from '../../stores/useEventsStore';
import TicketCard from '../../components/TicketCard/TicketCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './ticketsPage.css';

function TicketsPage() {
  const {events} = useEventsStore();
  const cart = events.filter(event => event.quantity > 0)

  const generateOrderNum = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for(let i = 0; i < 5; i++){
      const randomInd = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomInd);
    }
    return result;
  }

  const generateSection = () => {
    const sections = 'ABCDEFGH';
    return sections.charAt(Math.floor(Math.random() * sections.length))
  }

  const generateSeats = (quantity, max = 200) => {
    const start = Math.floor(Math.random() * (max - quantity +1)) +1;
    return Array.from({ length : quantity}, (_,i) => start + i);
  }

  const tickets = cart.flatMap(event => {
    const orderNumber = generateOrderNum();
    const section = generateSection();
    const seatNumbers = generateSeats(event.quantity);

    return seatNumbers.map(seatNum => ({
      ...event, 
      orderNumber,
      seat: {
        section,
        number: seatNum
      }
    }))
  });

  return (
    <section className="page">
      {cart.length > 0 ? (
          <section className="tickets"> 
            {tickets.map((ticket, i) => (
              <TicketCard 
                key={`${ticket.id}-${i}`} 
                event={ticket} 
              />
            )
          )}
          </section>
          ) : (
          <p className="no-tickets">You have no tickets yet</p>
        )}
    </section>
  )
}

export default TicketsPage;
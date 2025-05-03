import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEventsStore = create(persist((set) =>({
    events : [],
    filteredEvents : [],
    setEvents : (events) => {
        set(() => {
            const updatedEvents = events.map(event => ({
                ...event,
                quantity: 0
            }))
            return { events : updatedEvents }
        })
    },
    addToCart : (id) => {
        set((state) => {
            const updatedEvents = state.events.map(event => {
                if(event.id === id){
                    return {...event, quantity : event.quantity + 1}
                } else{
                    return event;
                }
            });
            return {events : updatedEvents}
        })
    },
    removeFromCart : (id) => {
        set((state) => {
            const updatedEvents = state.events.map(event => {
                if(event.id === id){
                    if(event.quantity > 0){
                        return {...event, quantity : event.quantity - 1}
                    } else{
                        return {...event, quantity : 0}
                    }
                } else{
                    return event;
                }
            });
            return {events : updatedEvents}
        })
    },
    filterEvents : (string) => {
        set((state) => {
            const searchedEvents = state.events.filter(event => 
                event.name.toLowerCase().includes(string.toLowerCase()))
                return{filteredEvents : searchedEvents}
        })
    }
})));

export default useEventsStore;
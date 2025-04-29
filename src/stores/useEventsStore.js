import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEventsStore = create(persist((set) =>({
    events : [],
    filteredEvents : [],
    setEvents : (events) => {
        set({ events : events })
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
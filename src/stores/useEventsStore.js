import { create } from "zustand";

const useEventsStore = create((set) =>({
    events : [],
    setEvents : (events) => {
        set({ events : events })
    },
}));

export default useEventsStore;
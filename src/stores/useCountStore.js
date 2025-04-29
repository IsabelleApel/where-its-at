import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCountStore = create((set) => ({
    count : 1,
    increment : () => {
        set((state) => ({ count : state.count + 1 }))
    },
    decrement : () => {
        set((state) => (state.count > 0 ? { count : state.count -1 } : {count : 0}))
    },
    reset : () => {
        set({count : 1})
    }
}));

export default useCountStore;
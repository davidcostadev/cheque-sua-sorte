import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the store's state and actions
interface NumberState {
  numbers: number[];
  updateNumber: (number: number) => void;
  clearNumbers: () => void;
}

// Create the store with Zustand and persist middleware
export const useNumberStore = create<NumberState>()(
  persist(
    (set, get) => ({
      numbers: [],

      updateNumber: (number) => {
        const { numbers } = get();
        if (numbers.includes(number)) {
          set({ numbers: numbers.filter((n) => n !== number) });
        } else {
          set({ numbers: [...numbers, number] });
        }
      },

      clearNumbers: () => set({ numbers: [] }),
    }),
    {
      name: 'number-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

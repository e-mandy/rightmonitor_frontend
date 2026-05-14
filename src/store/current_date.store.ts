import { create } from "zustand";

interface DateStoreType {
  start_date: Date | null;
  end_date: Date | null;
  setDate: (start: Date | null, end: Date | null) => void;
}

export const useDateStore = create<DateStoreType>((set) => ({
  start_date: null,
  end_date: null,
  setDate: (start = null, end = null) =>
    set({ start_date: start, end_date: end }),
}));

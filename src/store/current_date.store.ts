import { create } from "zustand";

interface DateStoreType {
  start_date: string | null;
  end_date: string | null;
  setDate: (start: string | null, end: string | null) => void;
}

export const useDateStore = create<DateStoreType>((set) => ({
  start_date: null,
  end_date: null,
  setDate: (start = null, end = null) =>
    set({ start_date: start, end_date: end }),
}));

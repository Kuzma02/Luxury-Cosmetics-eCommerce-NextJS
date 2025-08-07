import { create } from "zustand";



export const useSizeStore = create((set) => ({
  size: "",
  changeSize: (size) => {
    set((state) => {
      return { size: size };
    });
  },
}));

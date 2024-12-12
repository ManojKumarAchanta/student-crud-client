import { create } from "zustand";

const useLoad = create((set) => ({
  isLoading: false,
  setIsLoading: (val) => {
    set({ isLoading: Boolean(val) });
  },
}));

export default useLoad;

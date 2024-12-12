import { create } from "zustand";

const useLoad = create((set) => ({
  isLoading: false,
  setIsLoading: (val) => {
    set({ isLoading: Boolean(val) });
  },
  isUpdating: false,
  setIsUpdating: (val) => {
    set({ isUpdating: Boolean(val) });
  },
}));

export default useLoad;

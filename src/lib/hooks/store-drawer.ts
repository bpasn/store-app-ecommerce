import { create } from "zustand";

interface IDrawerStore {
    open: boolean;
    setOpen: (v: boolean) => void;
}
export const useStoreDrawer = create<IDrawerStore>()(
    (set, _) => ({
        open: false,
        setOpen: (v) => set({ open: v })
    })
)
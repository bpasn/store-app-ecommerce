import { create } from "zustand";

export const useStoreSideBar = create<{
    open: boolean;
    setOpen: (open: boolean) => void;
}>()(
    (set, _) => ({
        open: false,
        setOpen: (open: boolean) => set({ open }),

    })
);

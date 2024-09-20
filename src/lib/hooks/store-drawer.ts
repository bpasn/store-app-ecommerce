import { create } from "zustand";

interface IDrawerStore {
    open: boolean;
    setOpen: (v: boolean) => void;
    clearState: () => void;
    product: ProductModal | null;
    setProduct: (product: ProductModal) => void;
}
export const useStoreDrawer = create<IDrawerStore>()(
    (set, _) => ({
        open: false,
        setOpen: (v) => set({ open: v }),
        clearState: () => {
            set({
                product: null
            });
        },
        product: null,
        setProduct: (product: ProductModal) => set({ product })
    })
);
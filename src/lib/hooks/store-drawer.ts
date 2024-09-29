import { create } from "zustand";

interface IDrawerStore {
    open: boolean;
    setOpen: (v: boolean) => void;
    clearState: () => void;
    product: ProductWithCategory | null;
    setProduct: (product: ProductWithCategory) => void;
}
export const useStoreDrawer = create<IDrawerStore>()(
    (set, _) => ({
        open: false,
        setOpen: (v) => {
            if (v) {
                set({ open: v });
            } else {
                set({ open: v, product: null });
            }
        },
        clearState: () => {
            set({
                product: null
            });
        },
        product: null,
        setProduct: (product: ProductWithCategory) => set({ product, open: true })
    })
);
import { create } from "zustand";
import { ProductWithoutCategory } from "../schemes/product";

interface IDrawerStore {
    open: boolean;
    setOpen: (v: boolean) => void;
    clearState: () => void;
    product: ProductWithoutCategory | null;
    setProduct: (product: ProductWithoutCategory) => void;
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
                open: false,
                product: null
            });
        },
        product: null,
        setProduct: (product: ProductWithoutCategory) => set({ product, open: true })
    })
);

export const getDrawerState = useStoreDrawer.getState;
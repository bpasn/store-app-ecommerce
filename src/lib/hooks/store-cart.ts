import { create, StateCreator } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { toast } from "./use-toast";
import { ProductModel, ProductWithoutCategory } from "../schemes/product";
import { OptionChoiceScheme } from "../schemes/product-option";
import { getDrawerState } from "./store-drawer";

export interface CartStore extends ProductWithoutCategory {
    quantity: number;
    // optionChoice: OptionChoiceScheme[];
}
interface IStoreCart {
    cart: CartStore[];
    addToCart: (product: CartStore) => void;
    removeFromCart: (id: string) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    reset: () => void;
    getCart: (id: string) => CartStore | undefined;
    setQuantity: (id: string, qty: number) => void;
}

const middlewareCart = (f: StateCreator<IStoreCart>) => devtools(persist(f, { name: "cartStore" }));
export const useStoreCart = create<IStoreCart>()(
    middlewareCart(
        (set, get) => ({
            cart: [],
            // totalPrice: () => {
            //     const t = get().cart.reduce(
            //         (prv, current) => prv + (current.price + (
            //             current.productOptions.reduce(
            //                 (pOption, cOption) => {
            //                     return pOption + cOption.choices.reduce(
            //                         (p, c) => p + c.price, 0);
            //                 }, 0)
            //         )) * current.quantity, 0);
            //     return t;
            // },
            getCart: (id: string) => get().cart.find(c => c.id === id),
            addToCart: (p) => {
                const newItem = p;
                const oldItem = get().cart.find(itm => itm.id === p.id);
                if (!oldItem) {
                    return set(prv => ({
                        ...prv,
                        cart: [...prv.cart, { ...newItem }]
                    }));
                }
                return set(prv => ({
                    ...prv,
                    cart: prv.cart.map(item => item.id === newItem.id ? newItem : item)
                }));

            },
            removeFromCart: (id:string) => {
                return set(prv => ({
                    ...prv,
                    cart: prv.cart.filter(e => e.id !== id)
                }));
            },
            increment: (id: string) => {
                const { cart } = get();
                const isInCart = cart.some(e => e.id === id);

                if (!isInCart) {
                    toast({
                        title: "Warning",
                        description: "Please add to cart before adding more",
                        variant: "default",
                        duration: 2000  // No need to multiply by 1000
                    });
                    return;
                }

                set(state => ({
                    cart: state.cart.map(e =>
                        e.id === id ? { ...e, quantity: e.quantity + 1 } : e
                    )
                }));
            },
            decrement: (id: string) => set(prv => ({
                ...prv,
                cart: prv.cart.map(e => e.id === id ? { ...e, quantity: e.quantity - 1 } : e)
            })),
            reset: () => set({ cart: [] }),
            setQuantity: (id, qty) => {
                set(prv => ({
                    ...prv,
                    cart: prv.cart.map(e => e.id === id ? { ...e, quantity: qty } : e)
                }));
            },
        })
    )
);

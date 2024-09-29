import { create, StateCreator } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { toast } from "./use-toast";

export interface OptionChoiceCart {
    optionName: string;
    choices: {
        id: string;
        name: string;
        price: number;
    }[];
}
export interface CartStore extends Omit<ProductModal, "stock" | "productOptions" | "categories"> {
    quantity: number;
    optionChoice: OptionChoiceCart[];
}
interface IStoreCart {
    cart: CartStore[];
    addToCart: (product: CartStore) => void;
    removeFromCart: (product: CartStore) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    reset: () => void;
    getCart: (id: string) => CartStore | undefined;
}

const middlewareCart = (f: StateCreator<IStoreCart>) => devtools(persist(f, { name: "cartStore" }));
export const useStoreCart = create<IStoreCart>()(
    middlewareCart(
        (set, get) => ({
            cart: [],
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
            removeFromCart: (p) => {
                return set(prv => ({
                    ...prv,
                    cart: prv.cart.filter(e => e.id !== p.id)
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
            reset: () => set({ cart: [] })
        })
    )
);

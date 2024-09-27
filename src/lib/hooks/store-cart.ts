import { create } from "zustand";
import { toast } from "./use-toast";

export interface CartStore extends ProductModal {
    quantity: number
}
interface IStoreCart {
    cart: CartStore[];
    addToCart: (product: CartStore) => void;
    removeFromCart: (product: CartStore) => void;
    increment: (id: string) => void;
    decrement: (id: string) => void;
    reset: () => void;
}
export const useStoreCart = create<IStoreCart>()(
    (set, get) => ({
        cart: [],
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
            }))

        },
        removeFromCart: (p) => {
            return set(prv => ({
                ...prv,
                cart: prv.cart.filter(e => e.id !== p.id)
            }))
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

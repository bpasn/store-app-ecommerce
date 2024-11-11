import { create } from "zustand";
import { Order } from "../typing/order";

interface OrderStore {
    orders: Order[];
    loadOrder: () => Promise<void>;
    setUpOrder: (order:Order) => void;
}
const storeOrder = create<OrderStore>()(
    (set, get) => ({
        orders: [],
        loadOrder:  async () => {
            
        },
        setUpOrder:(order:Order) => {
        }
    })
)
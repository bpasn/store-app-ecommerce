import { ProductModel } from "../schemes/product";
import { OptionChoiceScheme } from "../schemes/product-option";
import { productOptionChoiceScheme } from "../schemes/product-option-choice";

interface Order {
    id: string;
    orderStatus: 'PENDING' | 'CLOSE' | 'DONE',
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
    orderItems: OrderItem[];
}

interface OrderItem {
    id: string;
    product: ProductModel;
    quantity: number;
    orderItemOptions: OrderItemOption[]
}

interface OrderItemOption {
    id: string;
    productOption: ProductOptionModal;
    orderItemOptionChoice: OrderItemOptionChoice[]
}

interface OrderItemOptionChoice {
    id: string;
    optionChoice: productOptionChoiceScheme
}
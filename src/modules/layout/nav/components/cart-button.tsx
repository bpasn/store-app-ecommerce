import React from 'react';
import CartDropdown from './cart-dropdown';


const fetchCart = async () => {
    const cart = await new Promise<any[]>(resolve => setTimeout(() => resolve([]), 2 * 1000));

    return cart;
};

export default async function CartButton() {
    const cart = await fetchCart();
    return <CartDropdown cart={cart} />;
}

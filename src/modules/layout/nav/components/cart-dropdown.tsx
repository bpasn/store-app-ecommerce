"use client";

import IconLucide from "@/lib/hooks/icon-lucide";
import { CartStore, useStoreCart } from "@/lib/hooks/store-cart";
import { EachElement, formatPrice, totalPrice } from "@/lib/utils";
import { Button } from "@/modules/components/ui/button";
import Thumbnail from "@/modules/product/components/thumbnai";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

const CartDropdown = () => {
    const [activeTimer, setActiveTimer] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const cartState = useStoreCart(state => state.cart);
    const open = () => setCartDropdownOpen(true);
    const close = () => setCartDropdownOpen(false);

    const totalItems = cartState.length;

    const itemRef = useRef<number>(0);

    const timedOpen = () => {
        open();

        const timer = setTimeout(close, 5000);

        setActiveTimer(timer);
    };

    const openAndCancel = () => {
        if (activeTimer) {
            clearTimeout(activeTimer);
        }
        open();
    };

    // Clean up the timer when the component unmounts
    useEffect(() => {
        return () => {
            if (activeTimer) {
                clearTimeout(activeTimer);
            }
        };
    }, [activeTimer]);

    const pathname = usePathname();

    // open cart dropdown when modifying the cart items, but only if we're not on the cart page
    useEffect(() => {
        if (itemRef.current !== 0 && !pathname.includes("/cart")) {
            timedOpen();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalItems, itemRef.current]);

    return (
        <div
            className="h-full z-70"
            onMouseEnter={openAndCancel}
            onMouseLeave={close}
        >
            <Popover className="relative h-full">
                <PopoverButton className="h-full">
                    <Link
                        className="hover:text-ui-fg-base"
                        href="/cart"
                        data-testid="nav-cart-link"
                    >{`Cart (${cartState.length})`}</Link>
                </PopoverButton>
                <Transition
                    show={cartDropdownOpen}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <PopoverPanel
                        static
                        className="hidden md:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b rounded-bl-md rounded-br-md border-gray-200 w-[420px] text-ui-fg-base"
                        data-testid="nav-cart-dropdown"
                    >
                        <div className="p-4 flex items-center justify-center">
                            <h3 className="text-large-semi">Cart</h3>
                        </div>
                        {cartState && (cartState as CartStore[])?.length ? (
                            <>
                                <div className="overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar p-px">
                                    {(cartState as CartStore[])
                                        .map((item: CartStore) => (
                                            <div
                                                className="grid grid-cols-[122px_1fr] gap-x-4"
                                                key={item.id}
                                                data-testid="cart-item"
                                            >
                                                <Link
                                                    href={`/products/${item.id}`}
                                                    className="w-24"
                                                >
                                                    <Thumbnail images={item.productImages} size="square" />
                                                </Link>
                                                <div className="flex flex-col justify-between flex-1">
                                                    <div className="flex flex-col flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div className="text-sm flex flex-col overflow-ellipsis whitespace-nowrap mr-4 w-full">
                                                                <h3 className="overflow-hidden text-ellipsis ">
                                                                    <Link href={`/products/${item.id}`} className="flex" >
                                                                        {item.nameTH}
                                                                        <span className="ml-auto">{formatPrice(totalPrice(item.price, item.optionChoice))}</span>
                                                                    </Link>
                                                                </h3>
                                                                <p className="flex flex-row text-xs">
                                                                    Varaing : {item.categories.map(e => e.name).join(", ")}
                                                                </p>
                                                                <span
                                                                    className="flex text-xs"
                                                                >
                                                                    Quantity : {item.quantity}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        id={item.id}
                                                        className="mt-1 flex flex-row items-center text-sm gap-2"
                                                    >
                                                        <IconLucide name="Trash2" size={14} />
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="p-4 flex flex-col gap-y-4 text-small-regular">
                                    <div className="flex items-center justify-between">
                                        <span className="text-ui-fg-base font-semibold">
                                            Subtotal{" "}
                                        </span>
                                        <span
                                            className="text-md"
                                        >
                                            {
                                                formatPrice(cartState.reduce((prv, current) => {
                                                    return prv + totalPrice(current.price * current.quantity, current.optionChoice);
                                                }, 0))
                                            }
                                        </span>
                                    </div>
                                    <Link href="/cart" passHref>
                                        <Button
                                            className="w-full"
                                            data-testid="go-to-cart-button"
                                        >
                                            Go to cart
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div>
                                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                                    <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                                        <span>0</span>
                                    </div>
                                    <span>Your shopping bag is empty.</span>
                                    <div>
                                        <Link href="/store">
                                            <>
                                                <span className="sr-only">Go to all products page</span>
                                                <Button onClick={close}>Explore products</Button>
                                            </>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PopoverPanel>
                </Transition>
            </Popover>
        </div>
    );
};

export default CartDropdown;
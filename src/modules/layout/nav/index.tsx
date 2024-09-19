import Link from 'next/link';
import React, { Suspense } from 'react';
import OpenSideBar from './components/open-sidebar';
import CartButton from './components/cart-button';
const Nav = async () => {
    return (
        <div className="sticky top-0 inset-x-0 z-50 group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white ">
                <nav className="container text-sm text-foreground flex items-center justify-between w-full h-full  px-5">
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <OpenSideBar />
                    </div>

                    <div className=" flex items-center justify-center  h-full">
                        <Link
                            href="/"
                            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                            data-testid="nav-store-link"
                        >
                            E-commerce
                        </Link>
                    </div>


                    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                        <div className="hidden md:flex items-center gap-x-6 h-full">
                            {process.env.FEATURE_SEARCH_ENABLED && (
                                <Link
                                    className="hover:text-ui-fg-base"
                                    href="/search"
                                    scroll={false}
                                    data-testid="nav-search-link"
                                >
                                    Search
                                </Link>
                            )}
                            <Link
                                className="hover:text-ui-fg-base"
                                href="/account"
                                data-testid="nav-account-link"
                            >
                                Account
                            </Link>
                        </div>
                        <Suspense
                            fallback={
                                <Link
                                    className="hover:text-ui-fg-base flex gap-2"
                                    href="/cart"
                                    data-testid="nav-cart-link"
                                >
                                    Cart (0)
                                </Link>
                            }
                        >
                            <CartButton />
                        </Suspense>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Nav;
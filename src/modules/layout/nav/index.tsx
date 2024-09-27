import Link from 'next/link';
import React, { Suspense } from 'react';
import CartButton from './components/cart-button';
import OpenSideBar from './components/open-sidebar';
const Nav = async () => {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className='container flex h-14 max-w-screen-2xl items-center'>
                <div className="mr-4 hidden md:flex md:flex-1">
                    <nav className="m-0 text-sm text-foreground flex items-center justify-between w-full h-full">
                        <div className="hidden flex-1 basis-0 h-full md:flex items-center">
                            Logo
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
                    </nav>
                </div>
                <div className="md:hidden flex-1 basis-0 h-full flex items-center">
                    <OpenSideBar />
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
            </div>
        </header>
    );
};

export default Nav;
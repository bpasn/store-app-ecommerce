'use client';
import { useStoreSideBar } from '@/lib/hooks/store-side-bar'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'

type Props = {}

const Nav = () => {
    const sidebar = useStoreSideBar();
    return (
        <div className="sticky top-0 inset-x-0 z-50 group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white ">
                <nav className="container text-xl text-foreground flex items-center justify-between w-full h-full  px-5">
                    <div className="basis-0 h-full flex items-center">
                        <Menu className='block mdl:hidden' onClick={() => sidebar.setOpen(!sidebar.open)} />
                    </div>

                    <div className="">
                        <Link
                            href="/"
                            className="text-xl hover:text-gray uppercase"
                            data-testid="nav-store-link"
                        >
                            Store App
                        </Link>
                    </div>

                    <div className="">
                        <div className="hidden sm:flex items-center gap-x-6 h-full">
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
                                className=" text-sm hover:text-ui-fg-base"
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
                        </Suspense>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav
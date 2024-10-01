'use client';
import { useStoreCart } from '@/lib/hooks/store-cart';
import Link from 'next/link';
import CartButton from './components/cart-button';
import OpenSideBar from './components/open-sidebar';
const Nav = () => {
    const cart = useStoreCart(s => s.cart);
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className='container flex h-14 max-w-screen-2xl items-center'>
                <div className="mr-4 hidden md:flex md:flex-1">
                    <nav className="m-0 text-sm text-foreground flex items-center justify-between w-full h-full">
                        <div className="hidden flex-1 basis-0 h-full md:flex items-center">
                            <Link href={"/"}>Logo</Link>
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
                <div className="text-xs flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
                    <div className="hidden md:flex items-center gap-x-6 h-full ">
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
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem asChild>
                                        <Link href={'/order'} className='cursor-pointer'>Order</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </div>
                    <CartButton />
                     <Link href={'/order'} className='cursor-pointer'>Order</Link>
                </div>
            </div>
        </header>
    );
};

export default Nav;
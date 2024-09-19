'use client';
import IconLucide from '@/lib/hooks/icon-lucide';
import { useStoreSideBar } from '@/lib/hooks/store-side-bar';
import { cn, EachElement } from '@/lib/utils';
import { IconProps } from '@/types/icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



interface MenuSideBar {
    label: string;
    href: string;
    icon?: IconProps["name"];
}
const menubar: MenuSideBar[] = [
    {
        label: "Product",
        href:"/",
        icon:"ShoppingBag"
    },
    
    {
        label: "Category",
        href:"/category",
        icon:"Clipboard"
    },

    
];
const SideBar = () => {
    const sideBar = useStoreSideBar();
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                sideBar.setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = () => {
        sideBar.setOpen(!open);
    };

    const pathname = usePathname();
    return (
        <>
            <div className={cn("fixed inset-0 bg-black transition-opacity", sideBar.open ? "opacity-50 z-30" : "opacity-0 pointer-events-none")
            }
                onClick={handleClick}
                onKeyDown={e => e.key === 'Enter' || e.key === ' ' ? handleClick : null}
            />
            <aside id="default-sidebar"
                className={cn(
                    sideBar.open ? "translate-x-0" : "-translate-x-full",
                    "mdl:translate-x-0",
                    "fixed top-0 left-0 z-[51] w-[240px] h-screen bg-white shadow-lg",
                    "ease-in-out duration-300 transition-transform"
                )}
                aria-label="Sidebar">
                <div className="h-full overflow-y-auto ">
                    <div className='flex items-center border-b h-16 bg-[rgb(255,255,255)] justify-center'>
                        <h1>Store</h1>
                    </div>
                    <ul>
                        <EachElement
                           of={menubar}
                           render={(item) => {
                            return (
                                <li className={`py-4 px-3 flex flex-row gap-3 items-center cursor-pointer hover:bg-gray-200 ${pathname === item.href ? "bg-gray-200" : ""}`}>
                                    {item.icon && <IconLucide name={item.icon} />}
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            )
                           }}
                        />
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default SideBar;;
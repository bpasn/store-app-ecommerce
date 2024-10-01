import { Toaster } from '@/modules/components/ui/toaster';
import Footer from '@/modules/layout/footer';
import Nav from '@/modules/layout/nav';
import Aside from '@/modules/layout/nav/components/aside';
import DrawerProvider from '@/providers/drawer-provider';
import React from 'react';


const layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='relative flex min-h-screen flex-col bg-background'>
            {/* <SideBar /> */}
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default layout;
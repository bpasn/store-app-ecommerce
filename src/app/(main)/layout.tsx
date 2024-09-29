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
            <main className="flex-1 bg-gray-100">
                <div className="border-b">
                    <div className='container flex-1 items-start mdl:grid mdl:grid-cols-[220px_minmax(0,1fr)] mdl:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
                        <div className="hidden mdl:block">
                            <Aside />
                        </div>
                        {children}
                        <Toaster />
                        <DrawerProvider />
                    </div>
                </div>
                {/* <ModalProvider /> */}
            </main>
            <Footer />
        </div>
    );
};

export default layout;
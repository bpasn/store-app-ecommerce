import Nav from '@/modules/layout/nav';
import Aside from '@/modules/layout/nav/components/aside';
import DrawerProvider from '@/providers/drawer-provider';
import React from 'react';

type Props = {};

const layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='relative flex min-h-screen flex-col bg-background'>
            {/* <SideBar /> */}
            <div className=''>
                <Nav />
                <main className="flex-1">
                    <div className="border-b">
                        <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-6'>
                            <div className="hidden md:block">
                                <Aside />
                            </div>
                            {children}
                            <DrawerProvider />
                        </div>
                    </div>
                    {/* <ModalProvider /> */}
                </main>
            </div>
        </div>
    );
};

export default layout;
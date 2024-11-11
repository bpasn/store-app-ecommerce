export const dynamic = "force-dynamic";
import Footer from '@/modules/layout/footer';
import Nav from '@/modules/layout/nav';
import React from 'react';


const layout = async ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='relative flex min-h-screen flex-col bg-background'>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default layout;
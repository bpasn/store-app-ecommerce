import React from 'react';

type Props = {};

const OrderPage = (props: Props) => {
    return (
        <main className="flex-1 bg-gray-100">
            <div className="border-b">
                <div className='container flex-1 py-12 items-start mdl:grid mdl:grid-cols-[minmax(0,1fr)_400px] mdl:gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10'>
                   Order
                </div>
            </div>
        </main>);
};

export default OrderPage;
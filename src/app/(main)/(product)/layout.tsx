import Aside from "@/modules/layout/nav/components/aside";

const ProductLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <main className="flex-1 bg-gray-100">
            <div className="border-b">
                <div className='container flex-1 items-start mdl:grid mdl:grid-cols-[220px_minmax(0,1fr)] mdl:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
                    <div className="hidden mdl:block">
                        <Aside />
                    </div>
                    {children}
                </div>
            </div>
            {/* <ModalProvider /> */}
        </main>
    );
};

export default ProductLayout;
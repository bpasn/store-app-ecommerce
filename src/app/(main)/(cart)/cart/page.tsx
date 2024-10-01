import CartSummary from "@/modules/cart/cart-summary";
import CartTable from "@/modules/cart/cart-table";
import { Separator } from "@/modules/components/ui/separator";

const CartPage = async () => {
    return (
        <main className="flex-1 bg-gray-100">
            <div className="border-b">
                <div className='container flex-1 py-12 items-start mdl:grid mdl:grid-cols-[minmax(0,1fr)_400px] mdl:gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10'>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[2rem] font-bold mb-5">Cart</h1>
                        <Separator className="bg-gray-300" />
                        <CartTable />
                    </div>
                    <CartSummary />
                </div>
            </div>
            {/* <ModalProvider /> */}
        </main>);
};

export default CartPage;
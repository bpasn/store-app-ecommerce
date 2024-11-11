import { getOrderById } from "@/lib/services/order.service";
import { EachElement, totalPrice } from "@/lib/utils";
import { Separator } from "@/modules/components/ui/separator";
import Thumbnail from "@/modules/product/components/thumbnai";

const OrderDetailPage = async ({
    params: {
        id
    }
}: {
    params: {
        id: string
    }
}) => {
    const order = await getOrderById(id);
    return (
        <main className="flex-1 bg-gray-100">
            <div className="border-b rounded-md">
                <div className='container  flex-1 py-12 items-start mdl:grid mdl:grid-cols-[minmax(0,1fr)_400px] mdl:gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10'>
                    <div className="p-5 bg-white w-full rounded-md">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-md font-bold">Order ID: {id}</h2>
                            <p className="text-[14px] text-gray-300 font-normal">Order date: <span className="text-gray-800">{new Date(order.createdAt).toDateString()}</span></p>
                        </div>
                        <Separator className="my-5" />
                        <EachElement
                            of={order.orderItems}
                            render={(item) => {
                                return (
                                    <div className="flex flex-row">
                                        <div className="flex flex-row gap-3 item-center">
                                            <div className="border border-gray-300 bg-gray-100 rounded-lg p-3">
                                                <Thumbnail images={item.product.productImages} size="small" />
                                            </div>
                                            <div className="flex flex-col gap-2 justify-center">
                                                <p className="text-xl font-normal">{item.product.nameTH}</p>
                                                <span className="text-sm text-gray-300">TODO: handle list choice </span>
                                            </div>
                                        </div>
                                        <div className="ml-auto flex flex-col text-end justify-center">
                                            <p className="text-xl font-normal">{item.product.price}</p>
                                            <span className="text-sm text-gray-300">Qty: ${item.quantity}</span>
                                        </div>
                                    </div>
                                )
                            }}
                        />
                        <Separator className="my-5" />

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <h1>Payment</h1>
                                <div>
                                    <h1>Visa **56</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1>Delivery</h1>
                                <div className="flex flex-col">
                                    <p className="text-gray-300 text-xs">Address</p>
                                    <span className="text-400 text-sm">847 Jewess Bridge Apt. 174 London, UK 474-769-3919</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-300 text-xs">Delivery method</p>
                                    <span className="text-400 text-sm">Free ( 30 days )</span>
                                </div>
                            </div>
                        </div>
                        <Separator className="my-5" />
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <h1>Neep help?</h1>
                            </div>
                            <div className="flex flex-col gap-2 justify-start ">
                                <h1 className="text-xl font-bold">Order Summary</h1>
                                <div className="flex flex-row justify-between">
                                    <p className="text-md text-gray-300">Subtotal</p>
                                    <span>{order.totalAmount}</span>
                                </div>
                                <div className="flex flex-row justify-between flex-1">
                                    <p className="text-md text-gray-200">Discount</p>
                                    <span>(20%) -000.00</span>
                                </div>
                                <div className="flex flex-row justify-between"></div>
                                <div className="flex flex-row justify-between"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderDetailPage;
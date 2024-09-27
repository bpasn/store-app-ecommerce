'use client';
import { useStoreDrawer } from '@/lib/hooks/store-drawer';
import DrawerOption from '@/modules/components/ui/drawer-option';
import { MinusIcon, PlusIcon, Tag } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormField, FormItem, FormLabel } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { EachElement } from '@/lib/utils';
import OptionChoice from './components/option-choice';
import { useStoreCart } from '@/lib/hooks/store-cart';
import { DrawerFooter, DrawerClose } from '../ui/drawer';

const StoreDrawer = () => {
    const [qty, setQty] = React.useState(1);
    const { open, setOpen, product, clearState } = useStoreDrawer();
    const form = useForm();

    function onClick(adjustment: number) {
        setQty(Math.max(1, Math.min(product?.stock.quantity!, qty + adjustment)));
    }
    const handleClose = () => {
        setOpen(false);
        clearState();
    };

    const { addToCart, increment, decrement } = useStoreCart();

    return (
        <React.Fragment>
            {product && (
                <DrawerOption
                    title={product?.nameTH!}
                    imageUri={product?.productImages[0].uri!}
                    onClose={handleClose}
                    open={open} >
                    <div className="flex flex-col gap-2  bg-white p-3">
                        <div className="flex flex-row">
                            <h2 className='font-bold'>{"<โปรโมชั่น>"} {product?.nameTH} {product?.price}</h2>
                            <div className="ml-auto flex flex-row gap-2 items-center">
                                <p className="text-gray-300 line-through">69</p>
                                <p className="font-bold text-sm">{product?.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Tag size={12} className='text-primary' />
                            <span className='text-xs'>฿127 off</span>
                            <span className='text-gray-300 ml-auto text-xs'>Base price</span>
                        </div>
                        <p className="product-description text-xs md:text-sm text-gray-400 shadow-md">
                            {product?.descriptionTH}
                        </p>
                    </div>
                    <Form {...form}>
                        <form className='flex flex-col gap-2 mt-2'>
                            <EachElement
                                of={product?.productOptions || []}
                                render={(option) => <OptionChoice {...option} />}
                            />
                            <div className="p-4 bg-white">
                                <div className="flex items-center justify-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-1 rounded-full"
                                        onClick={() => {
                                            decrement(product.id);
                                        }}
                                        disabled={qty <= 1}
                                    >
                                        <MinusIcon className="h-4 w-4" />
                                        <span className="sr-only">Decrease</span>
                                    </Button>
                                    <div className="text-center">
                                        <div className="text-md md:text-lg font-bold tracking-tighter">
                                            {qty}
                                        </div>
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                                            Quantity
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => increment(product.id)}
                                        disabled={qty >= product.stock.quantity!}
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                        <span className="sr-only">Increase</span>
                                    </Button>
                                </div>
                            </div>
                            <DrawerFooter className="mt-2 bg-white h-full">
                                <Button onClick={() => addToCart({ ...product, quantity: 1 })}>Add to cart</Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                            {/* <div className="bg-white p-4">
                                <FormField
                                    control={form.control}
                                    name=''
                                    render={({ field }) => {
                                        return (
                                            <FormItem className='flex flex-col'>
                                                <FormLabel className='!mt-0' htmlFor={field.name}>รายละเอียดเพิ่มเติม</FormLabel>
                                                <Textarea {...field} id={field.name} cols={1} placeholder="เช่น ไม่เอาผัก" />
                                            </FormItem>
                                        );
                                    }}
                                />
                            </div> */}
                        </form>
                    </Form>
                </DrawerOption>
            )}
        </React.Fragment>
    );
};

export default StoreDrawer;
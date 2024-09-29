'use client';
import { OptionChoiceCart, useStoreCart } from '@/lib/hooks/store-cart';
import { useStoreDrawer } from '@/lib/hooks/store-drawer';
import { toast } from '@/lib/hooks/use-toast';
import { EachElement, totalPrice } from '@/lib/utils';
import DrawerOption from '@/modules/components/ui/drawer-option';
import { MinusIcon, PlusIcon } from 'lucide-react';
import React, { SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import { DrawerClose, DrawerFooter } from '../ui/drawer';
import CheckGroupChoice from './components/check-group-choice';
import RadioGroupChoice from './components/radio-group-choice';
export interface CheckProps<T extends OptionChoiceCart> {
    optionName: string;
    pick: boolean;
    choices: ChoiceModal[];
    defaultValue: T;
    lengthSelect: number;
    setChoice: React.Dispatch<SetStateAction<OptionChoiceCart[]>>;
}
const StoreDrawer = () => {
    const { open, setOpen, product, clearState } = useStoreDrawer();
    const { addToCart, getCart } = useStoreCart();

    const [optionChoice, setOptionChoice] = useState<OptionChoiceCart[]>([]);
    const [qty, setQty] = useState(getCart(product?.id!)?.quantity ?? 1);
    const handleClose = () => {
        setOpen(false);
        setOptionChoice([]);
    };

    const handleAdd = () => {
        product?.productOptions.forEach((v) => {
            if (v.oneMustBeChosen && !optionChoice.find(e => e.optionName === v.optionName)) {
                toast({
                    title: "WARNING",
                    description: v.optionName + " is required",
                    duration: 2 * 1000
                });
                return;
            }
        });
        addToCart({ ...product!, quantity: qty, optionChoice: optionChoice });
        setOpen(false);
        setOptionChoice([]);
    };
    return (
        product && (
            <DrawerOption
                title={product?.nameTH!}
                imageUri={product?.productImages[0].source!}
                onClose={handleClose}
                open={open} >
                <div className="flex flex-col gap-2 mb-2  bg-white p-3">
                    <div className="flex flex-row">
                        <h2 className='font-bold'>{product?.nameTH}</h2>
                        <div className="ml-auto flex flex-row gap-2 items-center">
                            <p className="font-bold text-sm">{product?.price}</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-row gap-2">
                        <Tag size={12} className='text-primary' />
                        <span className='text-xs'>฿127 off</span>
                        <span className='text-gray-300 ml-auto text-xs'>Base price</span>
                    </div> */}
                    <p className="product-description text-xs md:text-sm text-gray-400">
                        {product?.descriptionTH || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla veniam cupiditate perferendis molestiae id beatae qui rem? Soluta, id?"} 
                    </p>
                </div>
                <div className='flex flex-col gap-2 mt-2 h-full bg-gray-200'>
                    <div className="mt-1"></div>
                    <EachElement
                        of={product?.productOptions || []}
                        render={(option, index) => {
                            if (option.manyCanBeChosen) {
                                return <CheckGroupChoice
                                    optionName={option.optionName}
                                    pick={option.oneMustBeChosen}
                                    choices={option.choices}
                                    defaultValue={optionChoice.find(e => e.optionName === option.optionName)!}
                                    setChoice={setOptionChoice}

                                    lengthSelect={option.lengthSelect} />;
                            } else {
                                return <RadioGroupChoice
                                    optionName={option.optionName}
                                    pick={option.oneMustBeChosen}
                                    choices={option.choices}
                                    defaultValue={optionChoice.find(e => e.optionName === option.optionName)!}
                                    setChoice={setOptionChoice}
                                    lengthSelect={option.lengthSelect}
                                />;
                            }
                        }}
                    />

                    <DrawerFooter className=" mt-auto bg-white">
                        <div className="p-4 bg-white">
                            <div className="flex items-center justify-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-1 rounded-full"
                                    onClick={() => setQty(prv => prv - 1)}
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
                                    onClick={() => setQty(prv => prv + 1)}
                                    disabled={qty >= product.stock.quantity!}
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    <span className="sr-only">Increase</span>
                                </Button>
                            </div>
                        </div>
                        <Button onClick={handleAdd}>Add to cart - {totalPrice(product.price * qty, optionChoice)}</Button>
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
                </div>
            </DrawerOption>
        )
    );
};

export default StoreDrawer;
"use client";
import { Button } from "@/modules/components/ui/button";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle
} from "@/modules/components/ui/drawer";
import { useStoreDrawer } from "@/lib/hooks/store-drawer";
import { Minus, Plus } from "lucide-react";
import Image from 'next/image';
import Menu from '@/assets/menu1.jpg';

interface DrawerOptionProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title:string;
    imageUri:string;
}
const DrawerOption = ({
    open,
    onClose,
    children,
    title,
    imageUri
}: DrawerOptionProps) => {
    const handleOnchange = (value: boolean) => {
        if (!value) {
            onClose();
        }
    };
    const handleClick = () => {
        onClose();
    }
    return (
        <Drawer open={open} onOpenChange={handleOnchange}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-md h-[calc(100vh-10rem)] overflow-auto hide-scroll bg-gray-200">
                    <div>
                        <DrawerHeader className="flex flex-col gap-3 bg-white p-2">
                            <DrawerTitle>{title}</DrawerTitle>
                            <div className="h-36 w-full  md:h-52 md:w-full relative">
                                <Image  src={`${process.env.NEXT_PUBLIC_DOMAIN_IMAGE}/${imageUri}`} alt={"menu"} width={300} height={300}  className="h-full w-full object-contain rounded-lg md:rounded-b-none" />
                            </div>
                        </DrawerHeader>
                        <div className="p-0 pb-0 ">
                            {children}
                        </div>
                        <DrawerFooter className="mt-2 bg-white h-full">
                            <Button onClick={handleClick}>Submit</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerOption;
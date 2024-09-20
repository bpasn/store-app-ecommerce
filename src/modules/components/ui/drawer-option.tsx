"use client"
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
import Menu from '@/assets/menu1.jpg'

interface DrawerOptionProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const DrawerOption = ({
    open,
    onClose,
    children
}: DrawerOptionProps) => {
    const handleOnchange = (value: boolean) => {
        if (!value) {
            onClose();
        }

    }
    return (
        <Drawer open={open} onOpenChange={handleOnchange}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-lg h-[calc(100vh-10rem)] overflow-auto bg-gray-200">
                    <DrawerHeader className="flex flex-col gap-3 p-0 bg-white">
                        <DrawerTitle>Title</DrawerTitle>
                        <div className="h-36 w-full  md:h-52 md:w-full relative">
                            <Image fill src={Menu} alt={"menu"} className="h-full object-cover md:object-fill rounded-lg md:rounded-b-none" />
                        </div>
                    </DrawerHeader>
                    <div className="p-0 pb-0">
                        {children}
                    </div>
                    <DrawerFooter className="mt-2 bg-white">
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerOption;
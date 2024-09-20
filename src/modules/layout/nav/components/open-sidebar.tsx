'use client';

import { useStoreSideBar } from "@/lib/hooks/store-side-bar";
import { Menu } from "lucide-react";
import { Dialog, DialogContent } from '@/modules/components/ui/dialog';
import { useState } from "react";
import Aside from "./aside";

const OpenSideBar = () => {
    const sidebar = useStoreSideBar();
    const [open, setOpen] = useState(false);
    return (
        <>
            <Menu className='block mdl:hidden' onClick={() => setOpen(true)} />
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent className="h-full sm:rounded-none w-[290px] left-[35%] ">
                    <div className="pl-2">
                        <Aside />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default OpenSideBar;
'use client';

import { useStoreSideBar } from "@/lib/hooks/store-side-bar";
import { Menu } from "lucide-react";

const OpenSideBar = () => {
    const sidebar = useStoreSideBar();
    return ( 
        <Menu className='block mdl:hidden' onClick={() => sidebar.setOpen(!sidebar.open)} />
     );
}
 
export default OpenSideBar;
'use client'; // Error boundaries must be Client Components

import { Button } from '@/modules/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/modules/components/ui/dialog';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: any & { digest?: string; };
    reset: () => void;
}) {
    // const { open, openModal, closeModal } = useStoreModal();
    useEffect(() => {
        // if (!open) {
        //     openModal((
        //         <div className='flex flex-col'>
        //             {error.message}
        //             <Button onClick={() => {
        //                 reset();
        //                 closeModal()
        //             }}>OK</Button>
        //         </div>
        //     ), error.name)
        // }
    }, [error]);

    return (
        <Dialog open>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>ERROR</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                    {error.message}
                    <Button className='ml-auto' onClick={reset}>Retry</Button>
                </div>
            </DialogContent>
        </Dialog>
    );

}
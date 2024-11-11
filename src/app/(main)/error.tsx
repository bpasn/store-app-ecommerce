"use client"
import { Button } from '@/modules/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/modules/components/ui/dialog';

export default function Error({
    error,
    reset,
}: {
    error: any & { digest?: string; };
    reset: () => void;
}) {
    console.log(error.digest)
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
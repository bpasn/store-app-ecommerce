import { EachElement } from '@/lib/utils';
import { Skeleton } from '@/modules/components/ui/skeleton';
import React from 'react';


const Loading = () => {
    return (
        <div className="py-8 grid grid-cols-1 md:gap-10 md:grid-cols-4">
            <EachElement
                of={Array.from(Array(16).keys())}
                render={() => (
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default Loading;
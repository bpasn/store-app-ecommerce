import { EachElement } from "@/lib/utils";
import { Skeleton } from "@/modules/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/modules/components/ui/table";
import { Separator } from "@radix-ui/react-select";

const Loading = () => {
    return (
        <main className="flex-1 bg-gray-100">
            <div className="border-b">
                <div className='container flex-1 py-12 items-start mdl:grid mdl:grid-cols-[minmax(0,1fr)_400px] mdl:gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10'>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-[2rem] font-bold mb-5"><Skeleton className="h-10 w-[200px] bg-gray-200" /></h1>
                        <Separator className="bg-gray-300" />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[300px]"><Skeleton className="h-10 w-full bg-gray-200" /></TableHead>
                                    <TableHead><Skeleton className="h-10 w-full bg-gray-200" /></TableHead>
                                    <TableHead><Skeleton className="h-10 w-full bg-gray-200" /></TableHead>
                                    <TableHead className="text-right"><Skeleton className="h-10 w-full bg-gray-200" /></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <EachElement
                                    of={Array.from(Array(5).keys())}
                                    render={(cart) => {
                                        return (
                                            <TableRow key={cart} className="broder-b-gray-200">
                                                <TableCell className="font-medium flex flex-row gap-2 items-center">
                                                    <Skeleton className="h-28 w-full bg-gray-200" />
                                                    <Skeleton className="h-10 w-full bg-gray-200" />
                                                </TableCell>
                                                <TableCell className="">
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <Skeleton className="h-10 w-full bg-gray-200" />
                                                        <Skeleton className="h-10 w-[50px] bg-gray-200" />
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Skeleton className="h-10 w-full bg-gray-200" />
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Skeleton className="h-10 w-full bg-gray-200" />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }}
                                />
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex flex-col  gap-5 h-full">
                        <h1 className="text-[2rem] font-bold mb-5"><Skeleton className="h-10 w-[250px] bg-gray-200" /></h1>
                        <Separator className="bg-gray-300" />
                        <div className=" font-normal text-sm flex flex-row justify-between">
                            <Skeleton className="h-10 w-full bg-gray-200" />
                            <Skeleton className="h-10 w-full bg-gray-200" />
                        </div>
                        <div className="flex font-normal text-sm flex-row justify-between">
                            <Skeleton className="h-10 w-full bg-gray-200" />
                            <Skeleton className="h-10 w-full bg-gray-200" />
                        </div>
                        <Separator className="bg-gray-300" />

                        <div className="flex font-normal text-sm flex-row justify-between">
                            <Skeleton className="h-10 w-full bg-gray-200" />
                            <Skeleton className="h-10 w-full bg-gray-200" />
                        </div>

                        <Separator className="bg-gray-300" />
                        <Skeleton className="h-10 w-full bg-gray-200" />
                    </div>

                </div>
            </div>
            {/* <ModalProvider /> */}
        </main>);
};

export default Loading;
import { Separator } from "@/modules/components/ui/separator";
import { Table, TableBody } from "@/modules/components/ui/table";
import Item from "./item";
import { OrderItem } from "@/lib/typing/order";
import { EachElement } from "@/lib/utils";


const Items = ({
    items
}: { items: OrderItem[] }) => {
    
    return (
        <div className="flex flex-col">
            <Separator className="!mb-0" />
            <Table>
                <TableBody data-testid="products-table">
                    <EachElement
                        of={items.toSorted((a: any, b: any) => {
                            return a.created_at > b.created_at ? -1 : 1
                        })}
                        render={(item) => <Item orderItem={item}/>}
                    />
                </TableBody>
            </Table>
        </div>
    );
}

export default Items;
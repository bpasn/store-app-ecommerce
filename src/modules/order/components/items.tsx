import { Separator } from "@/modules/components/ui/separator";
import { Table, TableBody } from "@/modules/components/ui/table";
import Item from "./item";

const Items = () => {
    return (
        <div className="flex flex-col">
            <Separator className="!mb-0" />
            <Table>
                <TableBody data-testid="products-table">
                    {[]
                        .sort((a:any, b:any) => {
                            return a.created_at > b.created_at ? -1 : 1
                        })
                        .map((item) => {
                            return <Item key={1}  />
                        })}
                </TableBody>
            </Table>
        </div>
    );
}

export default Items;
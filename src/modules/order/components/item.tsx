import { OrderItem } from "@/lib/typing/order";
import { TableCell, TableRow } from "@/modules/components/ui/table";
import Thumbnail from "@/modules/product/components/thumbnai";

const Item = ({
    orderItem
}: {
    orderItem: OrderItem
}) => {
    return (
        <TableRow className="w-full" data-testid="product-row">
            <TableCell className="!pl-0 p-4 w-24">
                <div className="flex w-16">
                    <Thumbnail images={orderItem.product.productImages} size="square" />
                </div>
            </TableCell>

            <TableCell className="text-left">
                <h1 className="txt-medium-plus text-ui-fg-base" data-testid="product-name">{orderItem.product.nameTH}</h1>
            </TableCell>

            <TableCell className="!pr-0">
                <span className="!pr-0 flex flex-col items-end h-full justify-center">
                    <span className="flex gap-x-1 ">
                        <h1 className="text-ui-fg-muted"><span data-testid="product-quantity">{orderItem.quantity}</span>x </h1>
                    </span>
                </span>
            </TableCell>
        </TableRow>
    );
}

export default Item;
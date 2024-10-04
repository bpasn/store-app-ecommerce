import { TableCell, TableRow } from "@/modules/components/ui/table";
import Thumbnail from "@/modules/product/components/thumbnai";

const Item = () => {
    return (
        <TableRow className="w-full" data-testid="product-row">
            <TableCell className="!pl-0 p-4 w-24">
                <div className="flex w-16">
                    <Thumbnail thumbnail={null} size="square" />
                </div>
            </TableCell>

            <TableCell className="text-left">
                <h1 className="txt-medium-plus text-ui-fg-base" data-testid="product-name">{"item.title"}</h1>
                <h1 data-testid="product-variant" />
            </TableCell>

            <TableCell className="!pr-0">
                <span className="!pr-0 flex flex-col items-end h-full justify-center">
                    <span className="flex gap-x-1 ">
                        <h1 className="text-ui-fg-muted"><span data-testid="product-quantity">{"item.quantity"}</span>x </h1>
                        <h2  />
                    </span>

                    <h2  />
                </span>
            </TableCell>
        </TableRow>
    );
}

export default Item;
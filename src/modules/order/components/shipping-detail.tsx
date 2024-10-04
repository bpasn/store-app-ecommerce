import { Separator } from '@/modules/components/ui/separator'
import React from 'react'

type Props = {}

const ShippingDetails = (props: Props) => {
    return (
        <div>
            <h1  className="flex flex-row text-3xl-regular my-6">
                Delivery
            </h1>
            <div className="flex items-start gap-x-8">
                <div className="flex flex-col w-1/3" data-testid="shipping-address-summary">
                    <h1 className="txt-medium-plus text-ui-fg-base mb-1">
                        Shipping Address
                    </h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {"order.shipping_address.first_name"}{" "}
                        {"order.shipping_address.last_name"}
                    </h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {"order.shipping_address.address_1"}{" "}
                        {"order.shipping_address.address_2"}
                    </h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {"order.shipping_address.postal_code"}, {"order.shipping_address.city"}
                    </h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {"order.shipping_address.country_code?.toUpperCase()"}
                    </h1>
                </div>

                <div className="flex flex-col w-1/3 " data-testid="shipping-contact-summary">
                    <h1 className="txt-medium-plus text-ui-fg-base mb-1">Contact</h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {"order.shipping_address.phone"}
                    </h1>
                    <h1 className="txt-medium text-ui-fg-subtle">{"order.email"}</h1>
                </div>

                <div className="flex flex-col w-1/3" data-testid="shipping-method-summary">
                    <h1 className="txt-medium-plus text-ui-fg-base mb-1">Method</h1>
                    <h1 className="txt-medium text-ui-fg-subtle">
                        {/* {order.shipping_methods[0].shipping_option?.name} (
                        {formatAmount({
                            amount: order.shipping_methods[0].price,
                            region: order.region,
                            includeTaxes: false,
                        })
                            .replace(/,/g, "")
                            .replace(/\./g, ",")}
                        ) */}
                    </h1>
                </div>
            </div>
            <Separator className="mt-8" />
        </div>
    )
}

export default ShippingDetails
import { cn, EachElement } from "@/lib/utils";
import { Check } from "lucide-react";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { CheckProps } from "../store-drawer";


const CheckGroupChoice = ({
    optionName,
    defaultValue,
    choices,
    onChange,
    lengthSelect,
    pick
}: CheckProps) => {
    return (
        <div className="border p-4  flex flex-col gap-3 bg-white">
            <div className="flex flex-row items-center gap-2">
                <h3 className='font-bold'>{optionName}</h3>
                <span className="text-xs text-gray-400">{pick ? "Pick 1" : ""}</span>
                {defaultValue && defaultValue.choices.length ? (
                    <div className={cn(
                        "p-0 m-0 ml-auto rounded-full h-4 w-4  ring-ring bg-primary align-middle flex items-center justify-center text-white "
                    )}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                ) : null}
            </div>
            <EachElement
                of={choices}
                render={(choice) => {
                    return (
                        <div className="flex inset-0 items-center space-x-2 ">
                            <Checkbox
                                checked={!isValueNull(defaultValue) && defaultValue.choices.map(e => e.id).includes(choice.id)}
                                id={choice.id}
                                onCheckedChange={(checked: boolean) => onChange(checked, choice)}
                            />
                            <Label htmlFor={choice.id} className='!mx-3 !my-0 font-normal cursor-pointer' >{choice.name}</Label>
                            <p className="!mt-0 !mb-0 !ml-auto !mr-2 text-sm text-gray-400">{choice.price}฿</p>
                        </div>
                    );
                }}
            />
        </div>
    );
};


const isValueNull = (value: any) => (value === null || value === undefined);

export default CheckGroupChoice;
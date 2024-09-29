import { OptionChoiceCart } from "@/lib/hooks/store-cart";
import { cn, EachElement } from "@/lib/utils";
import { Check } from "lucide-react";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { CheckProps } from "../store-drawer";

const RadioGroupChoice = <T extends OptionChoiceCart>({
    defaultValue,
    choices,
    optionName,
    pick,
    lengthSelect,
    setChoice,
}: CheckProps<T>) => {
    return (
        <div className="border p-4 flex flex-col gap-3 bg-white">
            <div className="flex flex-row items-center gap-2">
                <h3 className='font-bold'>{optionName}</h3>
                <span className="text-xs text-gray-400">{
                    pick ? "Pick 1" : ""
                }</span>
                {defaultValue !== undefined && (
                    <div className={cn(
                        "p-0 m-0 ml-auto rounded-full h-4 w-4 ring-ring bg-primary align-middle flex items-center justify-center text-white "
                    )}>
                        <Check size={12} strokeWidth={3} />
                    </div>
                )}
            </div>
            <RadioGroup defaultValue={(defaultValue && defaultValue.choices.length) ? defaultValue.choices[0].id : ""}
                onValueChange={(v: string) => {
                    setChoice(prv => [
                        ...prv.filter(e => e.optionName !== optionName),
                        { optionName, choices: [{ id: v, price: choices.find(e => e.id === v)?.price!, name: choices.find(e => e.id === v)?.name! }] }
                    ]);
                }} className=' font-normal text-gray-600'>
                <EachElement
                    of={(choices || []) as ChoiceModal[]}
                    render={(choice) => (
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value={choice.id} className="cursorp" id={choice.id} />
                            <Label htmlFor={choice.id} id={choice.id} className='!mx-3 !my-0 font-normal cursor-pointer' >{choice.name}</Label>
                        </div>
                    )}
                />
            </RadioGroup>
        </div >
    );
};

export default RadioGroupChoice;
"use client";

import { Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { EachElement } from "@/lib/utils";

interface OptionChoiceProps extends ProductOptionModal {

}
const OptionChoice = ({
    optionName,
    oneMustBeChosen,
    choices
}: ProductOptionModal) => {
    return (<div className="bg-white p-4 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
            <h3 className='font-bold'>{optionName}</h3>
            <span className="text-xs text-gray-300">{
                oneMustBeChosen ? "Pick 1" : ""
            }</span>
            <div className={"p-0 m-0 ml-auto rounded-full h-4 w-4 shadow-md ring-ring bg-primary align-middle flex items-center justify-center text-white "}>
                <Check size={12} strokeWidth={3} />
            </div>
        </div>
        <RadioGroup defaultValue="comfortable" className=' font-normal text-gray-500'>
            <EachElement
                of={choices}
                render={(choice) => (
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={choice.name} className="cursorp" id={choice.name} />
                        <Label htmlFor={choice.name} className='font-normal cursor-pointer' >{choice.name}</Label>
                    </div>
                )}
            />
        </RadioGroup>
    </div>);
};

export default OptionChoice;
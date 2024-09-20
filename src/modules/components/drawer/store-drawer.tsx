'use client';
import DrawerOption from '@/modules/components/ui/drawer-option'
import { useStoreDrawer } from '@/lib/hooks/store-drawer'
import React from 'react'
import { Form, FormField, FormItem, FormLabel } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/modules/components/ui/checkbox';
import { Textarea } from '../ui/textarea';


const StoreDrawer = () => {
    const { open, setOpen, } = useStoreDrawer();
    const form = useForm();
    return (
        <DrawerOption onClose={() => setOpen(false)} open={open} >
            <Form {...form}>
                <form className='flex flex-col gap-2 mt-2'>
                    <div className="bg-white p-4">
                        <FormField
                            control={form.control}
                            name=''
                            render={({ field }) => {
                                return (
                                    <FormItem className='flex flex-row gap-4 items-center'>
                                        <Checkbox id={field.name} onChange={field.onChange} />
                                        <FormLabel className='!mt-0' htmlFor={field.name}>Label</FormLabel>
                                    </FormItem>
                                )
                            }}
                        />
                    </div>
                    <div className="bg-white p-4">
                        <FormField
                            control={form.control}
                            name=''
                            render={({ field }) => {
                                return (
                                    <FormItem className='flex flex-col'>
                                        <FormLabel className='!mt-0' htmlFor={field.name}>รายละเอียดเพิ่มเติม</FormLabel>
                                        <Textarea {...field} id={field.name} cols={1} placeholder="เช่น ไม่เอาผัก" />
                                    </FormItem>
                                )
                            }}
                        />
                    </div>

                </form>
            </Form>
        </DrawerOption>
    )
}

export default StoreDrawer
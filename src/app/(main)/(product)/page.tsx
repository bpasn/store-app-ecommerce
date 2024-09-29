import IconLucide from '@/lib/hooks/icon-lucide';
import { getProduct } from '@/lib/services/product.service';
import { EachElement } from '@/lib/utils';
import { Input } from '@/modules/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/modules/components/ui/select';
import { Separator } from '@/modules/components/ui/separator';
import Product from '@/modules/product';


const ProductPage = async () => {
  const categoriesWithProduct = await getProduct();
  return (
    <main className='relative py-6  '>
      <div className="!max-w-[70%] bg-white">
        <div className='flex px-3 py-4 mb-3'>
          <div className="flex flex-row flex-1 gap-2 px-3">
            <div className="border flex-1 flex-row flex items-center border-primary rounded-md px-2 " >
              <IconLucide name="Search" size={18} className='text-gray-600' strokeWidth={2} />
              <Input placeholder='ค้นหาเมนู' className='border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-md' />
            </div>
            <Select>
              <SelectTrigger className="max-w-[180px] focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-0">
                <SelectValue placeholder="เลือกประเภทอาหาร" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='all'>ทั้งหมด</SelectItem>
                  {/* <EachElement
                    of={categories}
                    render={(category) => <SelectItem value={category.id}>{category.name}</SelectItem>}
                  /> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator className='mb-4'/>
        <EachElement
          of={categoriesWithProduct}
          render={(category) => {
            return (
              <div className='flex flex-col gap-4 px-3'>
                <h1 className='text-xl font-bold'>{category.categoryName}</h1>
                <Product products={category.products} />
              </div>
            );
          }}
        />
      </div>
    </main>
  );
};

export default ProductPage;
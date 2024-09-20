import { getProduct } from '@/lib/services/product.service';
import { delay } from '@/lib/utils';
import Product from '@/modules/product';
import React from 'react';


const ProductPage = async () => {
  await delay(5 * 1000);
  const products: ProductModal[] = await getProduct();
  return (
    <React.Fragment>
      <main className='relative py-6 lg:gap-10 lg:py-8'>
        <Product products={products} />
      </main>
    </React.Fragment>
  );
};

export default ProductPage;
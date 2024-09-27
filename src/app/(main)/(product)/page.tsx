import { getProduct } from '@/lib/services/product.service';
import Product from '@/modules/product';
import React, { Suspense } from 'react';


const ProductPage = async () => {
  const products: ProductModal[] = await getProduct();
  return (
    <main className='relative py-6 lg:gap-10 lg:py-8'>
      <Suspense fallback={(<>Loading....</>)}>
        <Product products={products} />
      </Suspense>
    </main>
  );
};

export default ProductPage;
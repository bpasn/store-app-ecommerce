import Aside from '@/modules/layout/nav/components/aside'
import Product from '@/modules/product'
import React from 'react'


const Page = () => {
  return (
    <React.Fragment>
      <div className="hidden md:block">
        <Aside />
      </div>
      <main className='relative py-6 lg:gap-10 lg:py-8'>
        <Product />
      </main>
    </React.Fragment>
  )
}

export default Page
import Nav from '@/modules/layout/nav'
import SideBar from '@/modules/layout/side-bar/index.tsx'
import React from 'react'

type Props = {}

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className=''>
            <SideBar />
            <div className='mdl:ml-[240px]'>
                <Nav />
                <main className="p-0 m-auto mt-[64px] px-5">
                    {children}
                    {/* <ModalProvider /> */}
                </main>
            </div>
        </div>
    )
}

export default layout
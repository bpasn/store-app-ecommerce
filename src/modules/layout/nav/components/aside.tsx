'use client';
import React from 'react'

const Aside = () => {
    return (
        <aside className="fixed top-14 z-30 -ml-2  w-full shrink-0 md:sticky  h-[calc(100vh-3.5rem)]">
            <div className="relative overflow-hidden h-full py-6 pr-6 lg:py-8">
                <div data-radix-scroll-area-viewport="" className="h-full w-full rounded-[inherit]"
                    style={{ "overflow": "hidden scroll" }}>
                    <div style={{ minWidth: "100%", display: "table" }}>
                        <div className="w-full">
                            <div className="pb-4">
                                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Installation</h4>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    <a
                                        className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                                        target="" rel="" href="/docs/installation/next">Next.js</a>
                                </div>
                            </div>
                            <div className="pb-4">
                                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                                <div className="grid grid-flow-row auto-rows-max text-sm">
                                    <a
                                        className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                                        target="" rel="" href="/docs/components/accordion">Accordion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Aside
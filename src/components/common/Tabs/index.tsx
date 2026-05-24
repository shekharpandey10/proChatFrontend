import React from 'react'
import type { TabItem } from './type'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'


interface tabProps {
    tabs: TabItem[],
    activeTab: string,
    onChange: (value: string) => void,
    className?: string
}
function Tabs({ tabs, activeTab, onChange, className }: tabProps) {
    return (
        <div className='flex gap-5'>
            {tabs.map((tab) => {
                const isActive = tab.value === activeTab
                return (
                    <Button key={tab.value} onClick={() => onChange(tab.value)} className={cn(
                        " relative flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all text-black bg-white hover:bg-white",
                    )}>
                        {tab.value}
                        <span
                            className={cn(
                                `
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  transition-all
                  `,

                                isActive
                                    ? "bg-blue-700"
                                    : "bg-transparent"
                            )}
                        />
                    </Button>
                )
            })}
        </div>
    )
}

export default Tabs

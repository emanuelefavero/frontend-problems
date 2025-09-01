'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'

// * Tab Panel - a ui component that allows users to switch between different views or sections by clicking on tabs.

const tabs = [
  {
    id: 1,
    title: 'Home',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo rerum voluptas deleniti dolore hic suscipit ducimus? Cum, vero officiis unde itaque suscipit fuga placeat recusandae ab, earum velit assumenda? Earum maxime ex nulla suscipit quidem, quisquam ipsum dolore quaerat beatae libero! Quo, numquam veritatis. Dolor, laboriosam, rerum facere necessitatibus vero sunt illo autem, tenetur temporibus ad cum delectus consequatur facilis modi incidunt. Exercitationem repudiandae amet placeat unde, suscipit in omnis magnam odit nostrum illo culpa quia aspernatur nesciunt architecto consequuntur labore illum, aut aliquam tempora soluta. Doloremque ipsa dicta libero voluptatibus, quam tempore delectus sint at corrupti dolor amet expedita molestiae facilis sed magni recusandae voluptatem quaerat quod ea culpa. Molestias omnis labore iure aspernatur distinctio, ab itaque blanditiis nisi? Nostrum provident error facilis velit aliquid tenetur autem hic nisi modi mollitia ut molestias culpa nam, quidem molestiae facere quisquam soluta. Sit in perspiciatis laborum aut, cum amet commodi officia deleniti dolor magni, vel corrupti accusantium eum repudiandae harum repellat blanditiis eius voluptatem temporibus. Sunt velit sit maxime cum laudantium dolore modi, exercitationem officiis perspiciatis ducimus error repudiandae pariatur tempora quos enim sapiente quo delectus consequatur nemo sint nobis iure beatae! Iste neque non hic deserunt officia ad architecto. Accusantium soluta quod adipisci sapiente repellat quaerat? Amet inventore veniam repudiandae quas placeat, autem distinctio porro similique sunt. Dolorum ipsum suscipit repudiandae, exercitationem esse iste error commodi rem hic recusandae qui nulla nihil assumenda officiis quam rerum autem, eveniet corporis enim aliquid, minima optio aut. Quod facilis ratione dolor repudiandae minus?',
  },
  {
    id: 2,
    title: 'Profile',
    content: 'Tab Content 2',
  },
  { id: 3, title: 'Settings', content: 'Tab Content 3' },
  { id: 4, title: 'Sign Out', content: 'Tab Content 4' },
]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='grid h-[336px] max-w-xl grid-cols-[auto_1fr]'>
      <nav
        role='tablist'
        aria-orientation='vertical'
        aria-label='Tabs'
        className='h-full max-w-[136px] overflow-y-auto overflow-x-hidden bg-slate-900'
      >
        {tabs.map((tab) => (
          <div
            key={`tab-${tab.id}`}
            role='tab'
            id={`tab-${tab.id}`}
            title={tab.title}
            tabIndex={0}
            aria-selected={activeTab === tab.id}
            className={cn(
              'cursor-pointer truncate border-l-4 border-r-[1px] border-l-transparent border-r-slate-700 px-6 py-8 text-sm font-semibold uppercase transition duration-200 ease-in-out',
              activeTab !== tab.id && 'text-slate-400 hover:bg-slate-800/30',
              activeTab === tab.id &&
                'border-l-orange-400 border-r-transparent bg-slate-800 text-orange-400',
            )}
            onKeyDown={(e) => e.key === 'Enter' && setActiveTab(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </nav>

      <div className='h-full overflow-auto bg-slate-800'>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={`tab-panel-${tab.id}`}
                role='tabpanel'
                id={`tab-panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                hidden={activeTab !== tab.id}
                tabIndex={0}
                className='p-4'
              >
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  )
}

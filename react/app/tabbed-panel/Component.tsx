'use client'

import { useState } from 'react'

// * Tab Panel - a ui component that allows users to switch between different views or sections by clicking on tabs.

const tabs = [
  { id: 1, title: 'Home', content: 'Tab Content 1' },
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
    <div className='grid grid-cols-[auto_1fr]'>
      <nav className='bg-red-500'>
        {tabs.map((tab) => (
          <div
            role='button'
            key={`tab-title-${tab.id}`}
            className={`cursor-pointer ${activeTab === tab.id && 'bg-green-500'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </nav>

      <div className='h-[300px] overflow-auto bg-blue-500'>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={`tab-content-${tab.id}`}>{tab.content}</div>
            ),
        )}
      </div>
    </div>
  )
}

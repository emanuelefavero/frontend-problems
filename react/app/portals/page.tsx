'use client'

import { useState } from 'react'
import PortalComponent from './PortalComponent'

// TIP: Portals are useful for Modals but should only be used when necessary as they could introduce layout shifts and decrease CLS scores (Cumulative Layout Shift)

export default function Page() {
  const [showPortal, setShowPortal] = useState(false)

  return (
    <>
      <h1>Portals</h1>

      <button onClick={() => setShowPortal(!showPortal)}>Toggle Portal</button>

      {showPortal && (
        <PortalComponent>
          <p className='p-4'>
            This is a portal component! This component will be appended to the{' '}
            <code>document.body</code> instead of being rendered here (inspect
            the <code>Elements</code> panel in DevTools)
          </p>
        </PortalComponent>
      )}
    </>
  )
}

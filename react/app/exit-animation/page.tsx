import Component from './Component'
import Component2 from './Component2'

export default function Page() {
  return (
    <>
      <h1>Exit Animation</h1>

      {/* This component implements a simple exit animation */}
      <Component />

      {/* This component uses the custom `useExitAnimation` hook */}
      <Component2 />
    </>
  )
}

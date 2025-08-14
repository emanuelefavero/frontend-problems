import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to handle exit animations before unmounting a component.
 * @param duration Duration of the exit animation in ms
 * @returns [show, disappearing, toggle]
 */

type Params = {
  duration?: number
}
type Return = [boolean, boolean, () => void]

export function useExitAnimation({ duration = 250 }: Params): Return {
  const [show, setShow] = useState(false)
  const [disappearing, setDisappearing] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const toggle = () => {
    // If the element is not currently shown, show it
    if (!show) return setShow(true)

    // If the element is currently shown, start the exit animation and then hide it
    setDisappearing(true)
    timeout.current = setTimeout(() => {
      setShow(false)
      setDisappearing(false)
    }, duration)
  }

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  return [show, disappearing, toggle]
}

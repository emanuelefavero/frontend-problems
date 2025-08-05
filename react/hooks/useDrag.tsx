import { useCallback, useEffect, useState } from 'react'

interface Props {
  ref: React.RefObject<HTMLDivElement | null>
  calculateFor?: 'topLeft' | 'bottomRight'
}

interface DragInfo {
  startX: number
  startY: number
  top: number
  left: number
  width: number
  height: number
}

interface Position {
  x: number
  y: number
}

export function useDrag({ ref, calculateFor = 'topLeft' }: Props) {
  const [dragInfo, setDragInfo] = useState<DragInfo>({} as DragInfo)
  const [finalPosition, setFinalPosition] = useState({})
  const [isDragging, setIsDragging] = useState(false)

  const updateFinalPosition = useCallback(
    (width: number, height: number, x: number, y: number) => {
      if (calculateFor === 'bottomRight') {
        setFinalPosition({
          x: Math.max(
            Math.min(
              window.innerWidth - width,
              window.innerWidth - (x + width)
            ),
            0
          ),
          y: Math.max(
            Math.min(
              window.innerHeight - height,
              window.innerHeight - (y + height)
            ),
            0
          ),
        })

        return
      }

      setFinalPosition({
        x: Math.min(Math.max(0, x), window.innerWidth - width),
        y: Math.min(Math.max(0, y), window.innerHeight - height),
      })
    },
    [calculateFor]
  )

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()

    setIsDragging(false)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()

    const { clientX, clientY } = e
    const { current: draggableElement } = ref

    if (!draggableElement) return

    const { top, left, width, height } =
      draggableElement.getBoundingClientRect()

    setIsDragging(true)
    setDragInfo({
      startX: clientX,
      startY: clientY,
      top,
      left,
      width,
      height,
    })
  }

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { current: draggableElement } = ref

      if (!isDragging || !draggableElement) return

      e.preventDefault()

      const { clientX, clientY } = e

      const position = {
        x: dragInfo.startX - clientX,
        y: dragInfo.startY - clientY,
      }

      const { top, left, width, height } = dragInfo

      updateFinalPosition(width, height, left - position.x, top - position.y)
    },
    [isDragging, dragInfo, ref, updateFinalPosition]
  )

  const recalculate = (width: number, height: number) => {
    const { current: draggableElement } = ref
    if (!draggableElement) return

    const {
      top,
      left,
      width: boundingWidth,
      height: boundingHeight,
    } = draggableElement.getBoundingClientRect()

    updateFinalPosition(
      width ?? boundingWidth,
      height ?? boundingHeight,
      left,
      top
    )
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove as any)
    document.addEventListener('mouseup', handleMouseUp as any)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove as any)
      document.removeEventListener('mouseup', handleMouseUp as any)
    }
  }, [handleMouseMove])

  return {
    position: finalPosition as Position,
    handleMouseDown,
    recalculate,
  }
}

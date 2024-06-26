'use client'

import React, { useEffect, useRef } from 'react'

const frameCount = 148
const currentFrame = (index: number) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, '0')}.jpg`

export default function AppleScrollEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef(new Image())

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    canvas.width = 1158
    canvas.height = 770

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
      }
    }

    const updateImage = (index: number) => {
      imgRef.current.src = currentFrame(index)
      imgRef.current.onload = () => {
        context.drawImage(imgRef.current, 0, 0)
      }
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      )

      requestAnimationFrame(() => updateImage(frameIndex + 1))
    }

    window.addEventListener('scroll', handleScroll)
    preloadImages()
    updateImage(1)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='h-[500vh] bg-black'>
      <canvas
        ref={canvasRef}
        id='hero-lightpass'
        className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-screen z-10'
      />
    </div>
  )
}

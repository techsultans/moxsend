'use client'

import { useEffect, useRef } from 'react'

export default function GridCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return

    const ctx = cv.getContext('2d')
    let W, H, offset = 0
    let animId

    function resize() {
      W = cv.offsetWidth
      H = cv.offsetHeight
      cv.width = W * devicePixelRatio
      cv.height = H * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    function drawGrid() {
      ctx.clearRect(0, 0, W, H)
      const sp = 40
      ctx.fillStyle = 'rgba(56,189,248,0.10)'
      const yo = offset % sp
      for (let x = 0; x < W + sp; x += sp) {
        for (let y = -sp + yo; y < H + sp; y += sp) {
          ctx.beginPath()
          ctx.arc(x, y, 1.1, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function animate() {
      offset += 0.25
      drawGrid()
      animId = requestAnimationFrame(animate)
    }

    function handleResize() {
      resize()
    }

    window.addEventListener('resize', handleResize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

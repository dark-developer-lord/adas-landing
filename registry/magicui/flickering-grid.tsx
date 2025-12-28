"use client"

import * as React from "react"

type Props = {
  className?: string
  squareSize?: number
  gridGap?: number
  color?: string
  maxOpacity?: number
  flickerChance?: number
  height?: number
  width?: number
}

export function FlickeringGrid({
  className,
  squareSize = 8,
  gridGap = 6,
  color = "#60A5FA",
  maxOpacity = 0.35,
  flickerChance = 0.08,
  height = 1200,
  width = 1600,
}: Props) {
  const ref = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0

    const dpr = window.devicePixelRatio || 1
    function resize() {
      if (!canvas || !ctx) return
      const w = width
      const h = height
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    const cols = Math.ceil(width / (squareSize + gridGap))
    const rows = Math.ceil(height / (squareSize + gridGap))

    const baseAlpha = (maxOpacity || 0.3) * 0.6

    const cells = new Array(rows * cols).fill(0).map(() => ({ alpha: Math.random() * baseAlpha }))

    function draw() {
      if (!ctx) return
      if (document.hidden) {
        raf = requestAnimationFrame(draw)
        return
      }
      
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = color

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c
          if (Math.random() < flickerChance!) {
            // small random flicker
            cells[i].alpha = Math.min(maxOpacity!, Math.max(0, cells[i].alpha + (Math.random() - 0.5) * 0.08))
          }
          const alpha = cells[i].alpha
          if (alpha <= 0.001) continue
          ctx.globalAlpha = alpha
          const x = c * (squareSize + gridGap)
          const y = r * (squareSize + gridGap)
          ctx.fillRect(x, y, squareSize, squareSize)
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(raf)
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width])

  return <canvas ref={ref} className={className} aria-hidden />
}

export default FlickeringGrid

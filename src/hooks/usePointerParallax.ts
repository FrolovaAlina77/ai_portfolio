import { useMotionValue, useSpring } from 'framer-motion'
import type { PointerEvent } from 'react'

export function usePointerParallax(amount = 6) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 180, damping: 24, mass: .3 })
  const y = useSpring(rawY, { stiffness: 180, damping: 24, mass: .3 })
  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    rawX.set(((rect.width / 2 - (event.clientX - rect.left)) / rect.width) * amount * 2)
    rawY.set(((rect.height / 2 - (event.clientY - rect.top)) / rect.height) * amount * 2)
  }
  const reset = () => { rawX.set(0); rawY.set(0) }
  return { style: { x, y }, onPointerMove: move, onPointerLeave: reset }
}

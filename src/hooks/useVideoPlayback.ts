import { useEffect, useRef, useState } from 'react'

export function useVideoPlayback(alwaysPlayInViewport = false) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inViewport, setInViewport] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateHover = () => setCanHover(hoverQuery.matches)
    updateHover()
    hoverQuery.addEventListener('change', updateHover)
    if (reducedMotion.matches) return () => hoverQuery.removeEventListener('change', updateHover)
    const observer = new IntersectionObserver(([entry]) => setInViewport(entry.isIntersecting), { rootMargin: '180px', threshold: 0.05 })
    observer.observe(video)
    return () => { observer.disconnect(); hoverQuery.removeEventListener('change', updateHover) }
  }, [])
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const shouldPlay = inViewport && (alwaysPlayInViewport || !canHover || hovered)
    if (shouldPlay) video.play().catch(() => undefined)
    else video.pause()
  }, [canHover, hovered, inViewport])
  return { ref, onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) }
}

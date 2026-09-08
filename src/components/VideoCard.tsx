import { Play } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { useVideoPlayback } from '../hooks/useVideoPlayback'
import { usePointerParallax } from '../hooks/usePointerParallax'

function getAspectRatio(project: Project) {
  switch (project.aspectRatio) {
    case 'portrait':
      return '9 / 16'

    case 'square':
      return '1 / 1'

    case 'wide':
      return '21 / 9'

    case 'landscape':
    default:
      return '16 / 9'
  }
}

export function VideoCard({
  project,
  onOpen,
  className = '',
}: {
  project: Project
  onOpen: (p: Project) => void
  className?: string
}) {
  const playback = useVideoPlayback()
  const parallax = usePointerParallax(6)

  return (
    <motion.button
      layout
      onClick={() => onOpen(project)}
      onPointerEnter={playback.onPointerEnter}
      onPointerLeave={() => {
        playback.onPointerLeave()
        parallax.onPointerLeave()
      }}
      onPointerMove={parallax.onPointerMove}
      style={{
        aspectRatio: getAspectRatio(project),
      }}
      className={`group relative block shrink-0 overflow-hidden rounded-[2rem] bg-[#171717] text-left outline-none transition-[opacity,filter] duration-500 focus:ring-1 focus:ring-[#d7e2ea] group-hover/rail:opacity-75 group-hover/rail:blur-[.15px] hover:!opacity-100 hover:!blur-0 ${className}`}
      whileHover={{
        y: -8,
        scale: 1.035,
        zIndex: 10,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.video
        ref={playback.ref}
        style={parallax.style}
        src={project.src}
        poster={project.thumbnail}
        muted
        loop
        playsInline
        preload="none"
        className="h-full w-full scale-[1.03] object-cover transition-[filter,transform] duration-500 group-hover:scale-[1.1] group-hover:brightness-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[.16em]">
          {project.title}
        </span>

        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7e2ea] text-[#0c0c0c] opacity-0 transition group-hover:opacity-100">
          <Play size={14} fill="currentColor" />
        </span>
      </div>
    </motion.button>
  )
}
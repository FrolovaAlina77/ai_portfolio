import { Expand } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { usePointerParallax } from '../hooks/usePointerParallax'

export function PhotoCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const parallax = usePointerParallax(4)
  return <motion.button onClick={() => onOpen(project)} onPointerMove={parallax.onPointerMove} onPointerLeave={parallax.onPointerLeave} className="group relative block w-full overflow-hidden rounded-[1.5rem] bg-[#171717] text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6, scale: 1.015 }}><motion.img style={parallax.style} src={project.src} alt={project.title} loading="lazy" className="h-full w-full scale-[1.02] object-cover transition duration-500 group-hover:scale-[1.07]" /><span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-black/35 opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100"><Expand size={14}/></span></motion.button>
}

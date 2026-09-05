import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Category, Project } from '../data/projects'
import { VideoCard } from './VideoCard'

const layouts: Record<Category, string[]> = {
  films: ['h-[58svh] w-[min(73vw,980px)]', 'h-[50svh] w-[min(34vw,470px)]', 'h-[62svh] w-[min(62vw,840px)]', 'h-[48svh] w-[min(42vw,560px)]'],
  ads: ['h-[48svh] w-[min(42vw,560px)]', 'h-[62svh] w-[min(68vw,900px)]', 'h-[54svh] w-[min(31vw,420px)]', 'h-[46svh] w-[min(56vw,760px)]'],
  live: ['h-[58svh] w-[min(62vw,820px)]', 'h-[52svh] w-[min(47vw,620px)]', 'h-[58svh] w-[min(62vw,820px)]'],
  creative: ['h-[62svh] w-[min(39vw,520px)]', 'h-[52svh] w-[min(72vw,960px)]', 'h-[57svh] w-[min(48vw,650px)]'],
  characters: ['h-[63svh] w-[min(34vw,440px)]', 'h-[55svh] w-[min(68vw,900px)]', 'h-[60svh] w-[min(38vw,500px)]'],
  photo: [],
}

const travel: Record<Category, string> = { films: '-63%', ads: '-69%', live: '-55%', creative: '-66%', characters: '-61%', photo: '-60%' }

export function VideoGrid({ items, category, onOpen }: { items: Project[]; category: Category; onOpen: (project: Project) => void }) {
  const section = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: section, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0.18, .82], ['0%', travel[category]])
  const cards = items.map((item, index) => <VideoCard key={item.id} project={item} onOpen={onOpen} className={layouts[category][index % layouts[category].length]} />)
  return <>
    <div className="md:hidden -mr-4 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"><div className="flex w-max snap-x snap-mandatory gap-4 pr-4">{items.map((item, index) => <VideoCard key={item.id} project={item} onOpen={onOpen} className={`h-[58svh] w-[82vw] snap-start ${index % 3 === 1 ? 'w-[62vw]' : ''}`} />)}</div></div>
    <div ref={section} className="relative hidden h-[210vh] md:block"><div className="sticky top-0 flex h-svh items-center overflow-hidden"><motion.div style={{ x: reduceMotion ? 0 : x }} className="group/rail flex w-max items-center gap-6 px-[8vw]">{cards}</motion.div></div></div>
  </>
}

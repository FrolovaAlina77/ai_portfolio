import { motion } from 'framer-motion'
import type { Category, Project } from '../data/projects'
import { MediaPlaceholder } from './MediaPlaceholder'
import { VideoGrid } from './VideoGrid'

export function CategorySection({ category, title, items, onOpen }: { category: Category; title: string; items: Project[]; onOpen: (project: Project) => void }) {
  return <section id={category} className="scroll-mt-16 px-4 py-20 sm:px-7 md:py-32 lg:px-12">
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: .7 }} className="mb-8 flex items-end justify-between gap-5 md:mb-12"><h2 className="text-[17vw] font-black leading-[.72] tracking-[-.075em] md:text-[11vw]">{title}</h2><span className="mb-1 text-[10px] uppercase tracking-[.18em] text-[#d7e2ea]/45">{String(items.length).padStart(2, '0')} works</span></motion.div>
    {items.length ? <VideoGrid items={items} category={category} onOpen={onOpen} /> : <div className="grid gap-4 md:grid-cols-12"><div className="md:col-span-8"><MediaPlaceholder category={category} featured /></div><div className="grid gap-4 md:col-span-4"><MediaPlaceholder category={category} /><MediaPlaceholder category={category} /></div></div>}
  </section>
}

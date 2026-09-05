import { Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { categories, projects, type Project } from './data/projects'
import { CategorySection } from './components/CategorySection'
import { FullscreenMediaViewer } from './components/FullscreenMediaViewer'
import { MediaPlaceholder } from './components/MediaPlaceholder'
import { PhotoGrid } from './components/PhotoGrid'
import { useVideoPlayback } from './hooks/useVideoPlayback'

function Hero({ featured, onOpen }: { featured?: Project; onOpen: (p: Project) => void }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 110])
  const video = useVideoPlayback(true)
  return <section className="relative flex min-h-svh items-end overflow-hidden px-4 pb-6 pt-24 sm:px-7 sm:pb-7 lg:px-12 lg:pb-12">
    <motion.div style={{ y }} className="absolute inset-4 overflow-hidden rounded-[2rem] bg-[#151515] sm:inset-7 lg:inset-12">
      {featured?.type === 'video' ? <video ref={video.ref} src={featured.src} poster={featured.thumbnail} autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover" /> : <MediaPlaceholder category="films" featured />}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),transparent_45%,rgba(0,0,0,.75))]" />
      {featured && <button aria-label="Open featured film" onClick={() => onOpen(featured)} className="absolute inset-0 cursor-pointer" />}
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .8 }} className="relative z-10 flex w-full items-end justify-between px-4 sm:px-8"><div><p className="mb-1 text-[10px] font-medium uppercase tracking-[.25em] text-[#d7e2ea]/65">AI Creator</p><h1 className="text-[18vw] font-black leading-[.7] tracking-[-.09em] sm:text-[13vw]">VISUAL<br/>WORLDS</h1></div><span className="hidden text-[10px] uppercase tracking-[.16em] text-[#d7e2ea]/60 sm:block">Scroll to explore</span></motion.div>
  </section>
}

function App() {
  const [open, setOpen] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const marqueeX = useTransform(scrollY, [0, 1400], ['0%', '-20%'])
  const featured = projects.find((p) => p.src.includes('/Featured/') && p.type === 'video') ?? projects.find((p) => p.type === 'video')
  const photos = projects.filter((p) => p.type === 'photo')
  const openItem = (item: Project) => { setOpen(item); setMenuOpen(false) }
  const navigate = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  return <main>
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-normal sm:px-9"><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-semibold tracking-[-.04em]">A/</button><nav className="hidden items-center gap-5 lg:flex">{categories.map((c) => <button key={c.id} onClick={() => navigate(c.id)} className="text-[10px] uppercase tracking-[.13em] text-[#d7e2ea]/70 transition hover:text-[#d7e2ea]">{c.label}</button>)}</nav><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/20 lg:hidden">{menuOpen ? <X size={17}/> : <Menu size={17}/>}</button></header>
    {menuOpen && <nav className="fixed inset-0 z-30 flex flex-col justify-center gap-5 bg-[#0c0c0c] px-7 pt-16 lg:hidden">{categories.map((c) => <button key={c.id} onClick={() => navigate(c.id)} className="text-left text-5xl font-black leading-none tracking-[-.07em]">{c.label}</button>)}</nav>}
    <Hero featured={featured} onOpen={openItem}/>
    <section aria-hidden="true" className="overflow-hidden py-16"><motion.div style={{ x: marqueeX }} className="flex w-max gap-5 whitespace-nowrap text-[14vw] font-black leading-none tracking-[-.08em] text-[#d7e2ea]/10">AI FILMS — AI ADS — LIVE ACTION — CREATIVE — CHARACTERS — PHOTO — AI FILMS — AI ADS — LIVE ACTION — CREATIVE — CHARACTERS — PHOTO —</motion.div></section>
    {categories.filter((c) => c.id !== 'photo').map((category) => <CategorySection key={category.id} category={category.id} title={category.title} items={projects.filter((p) => p.category === category.id && p.type === 'video')} onOpen={openItem}/>) }
    <section id="photo" className="scroll-mt-16 px-4 py-20 sm:px-7 md:py-32 lg:px-12"><h2 className="mb-12 text-[18vw] font-black leading-[.7] tracking-[-.09em] md:text-[13vw]">AI PHOTO</h2>{photos.length ? <PhotoGrid items={photos} onOpen={openItem}/> : <div className="grid grid-cols-2 gap-4 md:grid-cols-4"><MediaPlaceholder category="photo" type="photo"/><MediaPlaceholder category="photo" type="photo"/><MediaPlaceholder category="photo" type="photo"/><MediaPlaceholder category="photo" type="photo"/></div>}</section>
    <footer className="flex items-center justify-between px-4 py-7 text-[10px] uppercase tracking-[.16em] text-[#d7e2ea]/45 sm:px-7 lg:px-12"><span>AI Creator Portfolio</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button></footer>
    <FullscreenMediaViewer item={open} items={projects.filter((p) => p.type === open?.type)} onClose={() => setOpen(null)} onNavigate={setOpen}/>
  </main>
}

export default App

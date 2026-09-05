import { Film, Image as ImageIcon, Plus } from 'lucide-react'
import type { Category, MediaType } from '../data/projects'

const folder: Record<Category, string> = { films: 'Video/Films', ads: 'Video/Ads', live: 'Video/Live', creative: 'Video/Creative', characters: 'Video/Characters', photo: 'Images/Photo' }

export function MediaPlaceholder({ category, type = 'video', featured = false }: { category: Category; type?: MediaType; featured?: boolean }) {
  const Icon = type === 'photo' ? ImageIcon : Film
  return <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] ${featured ? 'min-h-[62vh]' : 'min-h-[42vh]'}`}>
    <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_20%,#29353c_0,transparent_33%),radial-gradient(circle_at_80%_80%,#20252e_0,transparent_40%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,.04)_48%,transparent_100%)]" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-[#d7e2ea]/55">
      <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15"><Icon size={18} /></span>
      <span className="max-w-48 text-xs font-medium uppercase tracking-[.18em]">{type === 'photo' ? 'Photo slot' : 'Video slot'}</span>
      <span className="text-[10px] uppercase tracking-[.1em] text-[#d7e2ea]/30">/{folder[category]}</span>
    </div>
    <span className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-[#d7e2ea]/40"><Plus size={14} /></span>
  </div>
}

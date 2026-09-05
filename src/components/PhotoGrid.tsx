import type { Project } from '../data/projects'
import { PhotoCard } from './PhotoCard'

export function PhotoGrid({ items, onOpen }: { items: Project[]; onOpen: (project: Project) => void }) {
  return <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
    {items.map((item) => <div key={item.id} className="mb-4 break-inside-avoid"><PhotoCard project={item} onOpen={onOpen} /></div>)}
  </div>
}

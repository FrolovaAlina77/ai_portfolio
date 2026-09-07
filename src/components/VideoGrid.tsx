import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import type { Category, Project } from '../data/projects'
import { VideoCard } from './VideoCard'

const layouts: Record<Category, string[]> = {
  films: [
    'h-[58svh] aspect-[16/9]',
    'h-[50svh] aspect-[16/9]',
    'h-[62svh] aspect-[16/9]',
    'h-[48svh] aspect-[16/9]',
  ],
  ads: [
    'h-[48svh] aspect-[16/9]',
    'h-[62svh] aspect-[16/9]',
    'h-[54svh] aspect-[16/9]',
    'h-[46svh] aspect-[16/9]',
  ],
  design: [
    'h-[58svh] aspect-[16/9]',
    'h-[52svh] aspect-[16/9]',
    'h-[58svh] aspect-[16/9]',
  ],
  creative: [
    'h-[62svh] aspect-[16/9]',
    'h-[52svh] aspect-[16/9]',
    'h-[57svh] aspect-[16/9]',
  ],
  characters: [
    'h-[63svh] aspect-[16/9]',
    'h-[55svh] aspect-[16/9]',
    'h-[60svh] aspect-[16/9]',
  ],
  photo: [],
}

export function VideoGrid({
  items,
  category,
  onOpen,
}: {
  items: Project[]
  category: Category
  onOpen: (project: Project) => void
}) {
  const section = useRef<HTMLDivElement>(null)
  const rail = useRef<HTMLDivElement>(null)

  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start start', 'end end'],
  })

  /*
   * Горизонтальное движение рассчитывается по фактической
   * ширине rail через CSS.
   *
   * Значение "100%" здесь означает ширину самого rail,
   * поэтому движение больше не зависит от количества карточек.
   */
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ['0%', '-75%'],
  )

  const cards = items.map((item, index) => {
    const layout = layouts[category]

    const fallback =
      layout.length > 0
        ? layout[index % layout.length]
        : 'h-[58svh] aspect-[16/9]'

    return (
      <VideoCard
        key={item.id}
        project={item}
        onOpen={onOpen}
        className={fallback}
      />
    )
  })

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden -mr-4 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max snap-x snap-mandatory items-start gap-4 pr-4">
          {items.map((item, index) => {
            const mobileClass =
              item.aspectRatio === 'portrait'
                ? 'w-[48vw] aspect-[9/16]'
                : item.aspectRatio === 'square'
                  ? 'w-[70vw] aspect-square'
                  : item.aspectRatio === 'wide'
                    ? 'w-[88vw] aspect-[21/9]'
                    : `w-[82vw] aspect-[16/9] ${
                        index % 3 === 1 ? 'w-[62vw]' : ''
                      }`

            return (
              <VideoCard
                key={item.id}
                project={item}
                onOpen={onOpen}
                className={`snap-start ${mobileClass}`}
              />
            )
          })}
        </div>
      </div>

      {/* DESKTOP */}
      <div
        ref={section}
        className="relative hidden h-[210vh] md:block"
      >
        <div className="sticky top-0 flex h-svh items-center overflow-hidden">
          <motion.div
            ref={rail}
            style={{
              x: reduceMotion ? 0 : x,
            }}
            className="group/rail flex w-max items-center gap-6 px-[8vw]"
          >
            {cards}
          </motion.div>
        </div>
      </div>
    </>
  )
}
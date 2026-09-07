import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import type { Category, Project } from '../data/projects'
import { PhotoCard } from './PhotoCard'

export function PhotoGrid({
  items,
  category,
  onOpen,
}: {
  items: Project[]
  category: Category
  onOpen: (project: Project) => void
}) {
  const section = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-75%'],
  )

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden -mr-4 overflow-x-auto pb-4 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max snap-x snap-mandatory items-start gap-4 pr-4">
          {items.map((item) => (
            <PhotoCard
              key={item.id}
              project={item}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div
        ref={section}
        className="relative hidden h-[210vh] md:block"
      >
        <div className="sticky top-0 flex h-svh items-center overflow-hidden">
          <motion.div
            style={{
              x: reduceMotion ? 0 : x,
            }}
            className="flex w-max items-center gap-6 px-[8vw]"
          >
            {items.map((item) => (
              <PhotoCard
                key={item.id}
                project={item}
                onOpen={onOpen}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
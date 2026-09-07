import { Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { categories, projects, type Project } from './data/projects'
import { CategorySection } from './components/CategorySection'
import { FullscreenMediaViewer } from './components/FullscreenMediaViewer'
import { MediaPlaceholder } from './components/MediaPlaceholder'
import { PhotoGrid } from './components/PhotoGrid'
import { useVideoPlayback } from './hooks/useVideoPlayback'

/*
 * ============================================================
 * НАСТРОЙКИ КАТЕГОРИЙ
 * ============================================================
 *
 * Здесь определяется, какие категории являются видео,
 * а какие — фотографиями.
 */

const VIDEO_CATEGORIES = [
  'films',
  'ads',
  'live',
  'creative',
]

const IMAGE_CATEGORIES = [
  'characters',
  'photo',
]

function Hero({
  featured,
  onOpen,
}: {
  featured?: Project
  onOpen: (p: Project) => void
}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 110])
  const video = useVideoPlayback(true)

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden px-4 pb-6 pt-24 sm:px-7 sm:pb-7 lg:px-12 lg:pb-12">
      <motion.div
        style={{ y }}
        className="absolute inset-4 overflow-hidden rounded-[2rem] bg-[#151515] sm:inset-7 lg:inset-12"
      >
        {featured?.type === 'video' ? (
          <video
            ref={video.ref}
            src={featured.src}
            poster={featured.thumbnail}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        ) : (
          <MediaPlaceholder
            category="films"
            featured
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),transparent_45%,rgba(0,0,0,.75))]" />

        {featured && (
          <button
            aria-label="Open featured film"
            onClick={() => onOpen(featured)}
            className="absolute inset-0 cursor-pointer"
          />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.8,
        }}
        className="relative z-10 flex w-full items-end justify-between px-4 sm:px-8"
      >
        <div>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[.25em] text-[#d7e2ea]/65">
            AI Creator
          </p>

          <h1 className="text-[18vw] font-black leading-[.7] tracking-[-.06em] sm:text-[13vw]">
            VISUAL
            <br />
            WORLDS
          </h1>
        </div>

        <span className="hidden text-[10px] uppercase tracking-[.16em] text-[#d7e2ea]/60 sm:block">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}

function App() {
  const [open, setOpen] = useState<Project | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const { scrollY } = useScroll()

  const marqueeX = useTransform(
    scrollY,
    [0, 1400],
    ['0%', '-20%'],
  )

  const featured =
    projects.find(
      (p) =>
        p.src.includes('/Featured/') &&
        p.type === 'video',
    ) ??
    projects.find(
      (p) => p.type === 'video',
    )

  const openItem = (item: Project) => {
    setOpen(item)
    setMenuOpen(false)
  }

  const navigate = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
      })

    setMenuOpen(false)
  }

  /*
   * ============================================================
   * КАТЕГОРИИ
   * ============================================================
   */

  const videoCategories = categories.filter(
    (category) =>
      VIDEO_CATEGORIES.includes(category.id),
  )

  const imageCategories = categories.filter(
    (category) =>
      IMAGE_CATEGORIES.includes(category.id),
  )

  return (
    <main>
      {/* ======================================================
          HEADER
          ====================================================== */}

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 mix-blend-normal sm:px-9">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="text-sm font-semibold tracking-[-.04em]"
        >
          A/
        </button>

        <nav className="hidden items-center gap-5 lg:flex">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => navigate(c.id)}
              className="text-[10px] uppercase tracking-[.13em] text-[#d7e2ea]/70 transition hover:text-[#d7e2ea]"
            >
              {c.label}
            </button>
          ))}

          <button
            onClick={() => navigate('contact')}
            className="text-[10px] uppercase tracking-[.13em] text-[#d7e2ea]/70 transition hover:text-[#d7e2ea]"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/20 lg:hidden"
        >
          {menuOpen ? (
            <X size={17} />
          ) : (
            <Menu size={17} />
          )}
        </button>
      </header>

      {/* ======================================================
          MOBILE MENU
          ====================================================== */}

      {menuOpen && (
        <nav className="fixed inset-0 z-30 flex flex-col justify-center gap-5 bg-[#0c0c0c] px-7 pt-16 lg:hidden">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => navigate(c.id)}
              className="text-left text-5xl font-black leading-none tracking-[-.07em]"
            >
              {c.label}
            </button>
          ))}

          <button
            onClick={() => navigate('contact')}
            className="text-left text-5xl font-black leading-none tracking-[-.07em]"
          >
            CONTACT
          </button>
        </nav>
      )}

      {/* ======================================================
          HERO
          ====================================================== */}

      <Hero
        featured={featured}
        onOpen={openItem}
      />

      {/* ======================================================
          MARQUEE
          ====================================================== */}

      <section
        aria-hidden="true"
        className="overflow-hidden py-16"
      >
        <motion.div
          style={{ x: marqueeX }}
          className="flex w-max gap-5 whitespace-nowrap text-[14vw] font-black leading-none tracking-[-.08em] text-[#d7e2ea]/10"
        >
          AI FILMS — AI ADS — AI DESIGN — CREATIVE —
          CHARACTERS — PHOTO — AI FILMS — AI ADS —
          AI DESIGN — CREATIVE — CHARACTERS — PHOTO —
        </motion.div>
      </section>

      {/* ======================================================
          VIDEO CATEGORIES
          ====================================================== */}

      {videoCategories.map((category) => (
        <CategorySection
          key={category.id}
          category={category.id}
          title={category.title}
          items={projects.filter(
            (project) =>
              project.category === category.id &&
              project.type === 'video',
          )}
          onOpen={openItem}
        />
      ))}

      {/* ======================================================
          IMAGE CATEGORIES
          ====================================================== */}

      {imageCategories.map((category) => {
        const images = projects.filter(
          (project) =>
            project.category === category.id &&
            project.type === 'photo',
        )

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-16 px-4 py-20 sm:px-7 md:py-32 lg:px-12"
          >
            <h2 className="mb-12 text-[18vw] font-black leading-[.7] tracking-[-.09em] md:text-[13vw]">
              {category.title}
            </h2>

            {images.length > 0 ? (
              <PhotoGrid
                items={images}
                category={category.id}
                onOpen={openItem}
              />
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <MediaPlaceholder
                  category={category.id}
                  type="photo"
                />

                <MediaPlaceholder
                  category={category.id}
                  type="photo"
                />

                <MediaPlaceholder
                  category={category.id}
                  type="photo"
                />

                <MediaPlaceholder
                  category={category.id}
                  type="photo"
                />
              </div>
            )}
          </section>
        )
      })}

      {/* ======================================================
          CONTACT
          ====================================================== */}

      <section
        id="contact"
        className="scroll-mt-16 px-4 py-24 sm:px-7 md:py-40 lg:px-12"
      >
        <div className="border-t border-white/10 pt-8">
          <p className="mb-6 text-[10px] uppercase tracking-[.25em] text-[#d7e2ea]/45">
            Contact
          </p>

          <h2 className="max-w-[1100px] text-[15vw] font-black leading-[.78] tracking-[-.09em] md:text-[11vw]">
            LET'S
            <br />
            CREATE
            <br />
            TOGETHER.
          </h2>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 md:mt-24 md:grid-cols-4">

            {/* EMAIL */}
            <a
              href="mailto:frolovaalina052622@gmail.com"
              className="group"
            >
              <p className="mb-2 text-[9px] uppercase tracking-[.2em] text-[#d7e2ea]/40">
                Email
              </p>

              <p className="text-sm transition-opacity group-hover:opacity-60">
                frolovaalina052622@gmail.com
              </p>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/frolovaag_fag/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <p className="mb-2 text-[9px] uppercase tracking-[.2em] text-[#d7e2ea]/40">
                Instagram
              </p>

              <p className="text-sm transition-opacity group-hover:opacity-60">
                @frolovaag_fag
              </p>
            </a>

            {/* PHONE */}
            <a
              href="tel:+79828776351"
              className="group"
            >
              <p className="mb-2 text-[9px] uppercase tracking-[.2em] text-[#d7e2ea]/40">
                Phone
              </p>

              <p className="text-sm transition-opacity group-hover:opacity-60">
                +7 982 877-63-51
              </p>
            </a>

            {/* AVAILABLE FOR */}
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[.2em] text-[#d7e2ea]/40">
                Available for
              </p>

              <p className="text-sm">
                AI Content · Creative Projects
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
          ====================================================== */}

      <footer className="flex items-center justify-between px-4 py-7 text-[10px] uppercase tracking-[.16em] text-[#d7e2ea]/45 sm:px-7 lg:px-12">
        <span>AI Creator Portfolio</span>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          Back to top ↑
        </button>
      </footer>

      {/* ======================================================
          FULLSCREEN VIEWER
          ====================================================== */}

      <FullscreenMediaViewer
        item={open}
        items={projects.filter(
          (project) =>
            project.type === open?.type,
        )}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
      />
    </main>
  )
}

export default App
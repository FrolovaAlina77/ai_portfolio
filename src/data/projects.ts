export type Category = 'films' | 'ads' | 'live' | 'creative' | 'characters' | 'photo'
export type MediaType = 'video' | 'photo'

export type Project = {
  id: string
  title: string
  category: Category
  type: MediaType
  src: string
  thumbnail?: string
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide'
}

export const categories: { id: Category; label: string; title: string }[] = [
  { id: 'films', label: 'FILMS', title: 'AI FILMS' },
  { id: 'ads', label: 'ADS', title: 'AI ADS' },
  { id: 'live', label: 'LIVE', title: 'LIVE' },
  { id: 'creative', label: 'CREATIVE', title: 'CREATIVE' },
  { id: 'characters', label: 'CHARACTERS', title: 'CHARACTERS' },
  { id: 'photo', label: 'PHOTO', title: 'AI PHOTO' },
]

// Add a work here after placing it in public media folders. Example:
// { id: 'film-01', title: 'UNTITLED 01', category: 'films', type: 'video', src: '/media/video/Films/film-01.mp4', aspectRatio: 'landscape' }
export const projects: Project[] = []

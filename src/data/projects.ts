export type Category = 'films' | 'ads' | 'design' | 'creative' | 'characters' | 'photo'
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
  { id: 'design', label: 'DESIGN', title: 'DESIGN' },
  { id: 'creative', label: 'CREATIVE', title: 'CREATIVE' },
  { id: 'characters', label: 'CHARACTERS', title: 'CHARACTERS' },
  { id: 'photo', label: 'PHOTO', title: 'AI PHOTO' },
]

// Add a work here after placing it in public media folders. Example:
// { id: 'film-01', title: '01 MULT', category: 'films', type: 'video', src: '/media/video/Films/film-01.mp4', aspectRatio: 'landscape' }
export const projects: Project[] = [
  {
    id: 'create-01',
    title: '01 MULT',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/test.mp4',
    aspectRatio: 'landscape',
  },

  {
    id: 'hero-01',
    title: 'HERO',
    category: 'creative',
    type: 'video',
    src: '/media/video/Featured/hero.MOV',
    aspectRatio: 'landscape',
  },

  {
    id: 'film-01',
    title: 'FILM 1',
    category: 'films',
    type: 'video',
    src: '/media/video/Films/film1.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'film-02',
    title: 'FILM 2',
    category: 'films',
    type: 'video',
    src: '/media/video/Films/film2.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'film-03',
    title: 'FILM 3',
    category: 'films',
    type: 'video',
    src: '/media/video/Films/film3.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'film-04',
    title: 'FILM 4',
    category: 'films',
    type: 'video',
    src: '/media/video/Films/film4.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'film-05',
    title: 'FILM 5',
    category: 'films',
    type: 'video',
    src: '/media/video/Films/film5.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-01',
    title: 'ADS 1',
    category: 'ads',
    type: 'video',
    src: 'https://pub-7654bc85f1f14b22a5a4452eaada764d.r2.dev/ads1.mp4',
    aspectRatio: 'landscape',
  },

  {
    id: 'ads-02',
    title: 'ADS 2',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads2.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-08',
    title: 'ADS 8',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads8.mp4',
    aspectRatio: 'landscape',
  },

  {
    id: 'ads-03',
    title: 'ADS 3',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads3.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-19',
    title: 'ADS 19',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads19.MOV',
    aspectRatio: 'landscape',
  },

  {
    id: 'ads-04',
    title: 'ADS 4',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads4.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-05',
    title: 'ADS 5',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads5.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-07',
    title: 'ADS 7',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads7.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'des-06',
    title: 'DES 6',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des6.MOV',
    aspectRatio: 'landscape',
  },

  {
    id: 'des-01',
    title: 'DES 1',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des1.mp4',
    aspectRatio: 'portrait',
  },
  
  {
    id: 'des-02',
    title: 'DES 2',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des2.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'des-03',
    title: 'DES 3',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des3.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'des-04',
    title: 'DES 4',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des4.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'des-05',
    title: 'DES 5',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des5.mp4',
    aspectRatio: 'portrait',
  },

  {
    id: 'des-07',
    title: 'DES 7',
    category: 'design',
    type: 'video',
    src: '/media/video/Design/des7.MOV',
    aspectRatio: 'portrait',
  },


  {
    id: 'ads-09',
    title: 'ADS 9',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads9.MP4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-10',
    title: 'ADS 10',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads10.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-11',
    title: 'ADS 11',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads11.MP4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-12',
    title: 'ADS 12',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads12.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-13',
    title: 'ADS 13',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads13.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-14',
    title: 'ADS 14',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads14.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-15',
    title: 'ADS 15',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads15.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-16',
    title: 'ADS 16',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads16.MP4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-17',
    title: 'ADS 17',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads17.MP4',
    aspectRatio: 'portrait',
  },

  {
    id: 'ads-18',
    title: 'ADS 18',
    category: 'ads',
    type: 'video',
    src: '/media/video/Ads/ads18.MP4',
    aspectRatio: 'portrait',
  },

  {
    id: 'create-02',
    title: 'CREATIVE 2',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create1.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'create-04',
    title: 'CREATIVE 4',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create3.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-03',
    title: 'CREATIVE 3',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create2.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'create-05',
    title: 'CREATIVE 5',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create4.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-06',
    title: 'CREATIVE 6',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create5.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-07',
    title: 'CREATIVE 7',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create6.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-08',
    title: 'CREATIVE 8',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create7.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-09',
    title: 'CREATIVE 9',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create8.MP4',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-10',
    title: 'CREATIVE 10',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create9.MOV',
    aspectRatio: 'landscape',
  },
  
  {
    id: 'create-11',
    title: 'CREATIVE 11',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create10.MOV',
    aspectRatio: 'landscape',
  },

  {
    id: 'create-12',
    title: 'CREATIVE 12',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create11.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'create-13',
    title: 'CREATIVE 13',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create12.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'create-14',
    title: 'CREATIVE 14',
    category: 'creative',
    type: 'video',
    src: '/media/video/Creative/create13.MOV',
    aspectRatio: 'portrait',
  },

  {
    id: 'characters-1',
    title: 'CHARACTERS 1',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo01.jpg',
    aspectRatio: 'landscape',
  },

  {
    id: 'characters-2',
    title: 'CHARACTERS 2',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo02.jpg',
    aspectRatio: 'portrait',
  },

  {
    id: 'characters-3',
    title: 'CHARACTERS 3',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo03.jpg',
    aspectRatio: 'portrait',
  },

  {
    id: 'characters-4',
    title: 'CHARACTERS 4',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo04.jpg',
    aspectRatio: 'portrait',
  },

  {
    id: 'characters-5',
    title: 'CHARACTERS 5',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo05.jpg',
    aspectRatio: 'landscape',
  },

  {
    id: 'characters-6',
    title: 'CHARACTERS 6',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo06.jpg',
    aspectRatio: 'landscape',
  },

  {
    id: 'characters-7',
    title: 'CHARACTERS 7',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo07.jpg',
    aspectRatio: 'landscape',
  },

  {
    id: 'characters-8',
    title: 'CHARACTERS 8',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo08.jpg',
    aspectRatio: 'portrait',
  },

  {
    id: 'characters-9',
    title: 'CHARACTERS 9',
    category: 'characters',
    type: 'photo',
    src: '/media/video/Characters/photo09.jpg',
    aspectRatio: 'portrait',
  },

  {
    id: 'photo-1',
    title: 'AI PHOTO 1',
    category: 'photo',
    type: 'photo',
    src: '/media/video/AI Photo/aiphoto1.jpg',
    aspectRatio: 'portrait',
  },
  
  {
    id: 'photo-2',
    title: 'AI PHOTO 2',
    category: 'photo',
    type: 'photo',
    src: '/media/video/AI Photo/aiphoto2.png',
    aspectRatio: 'portrait',
  },

  {
    id: 'photo-3',
    title: 'AI PHOTO 3',
    category: 'photo',
    type: 'photo',
    src: '/media/video/AI Photo/aiphoto3.png',
    aspectRatio: 'portrait',
  },

  {
    id: 'photo-4',
    title: 'AI PHOTO 4',
    category: 'photo',
    type: 'photo',
    src: '/media/video/AI Photo/aiphoto4.png',
    aspectRatio: 'portrait',
  },
  
  
  
]
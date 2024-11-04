export const specialtyCategories = {
  SURGICAL: 'Cerrahi Branşlar',
  INTERNAL: 'Dahili Branşlar',
  BASIC_SCIENCE: 'Temel Tıp Bilimleri',
  DIAGNOSTIC: 'Tanısal Branşlar'
} as const;

export type SpecialtyCategory = typeof specialtyCategories[keyof typeof specialtyCategories];
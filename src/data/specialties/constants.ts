// Ortak sabit değerler
export const IMPORTANCE_LEVELS = {
  CRITICAL: 'critical',
  MAJOR: 'major',
  MINOR: 'minor'
} as const;

export const WORKLOAD_LEVELS = {
  LIGHT: 'light',
  MODERATE: 'moderate',
  HEAVY: 'heavy'
} as const;

export const FLEXIBILITY_LEVELS = {
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high'
} as const;

export const NIGHT_SHIFT_FREQUENCY = {
  RARE: 'rare',
  OCCASIONAL: 'occasional',
  FREQUENT: 'frequent'
} as const;

export const TEAM_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
} as const;

export const PATIENT_INTERACTION = {
  MINIMAL: 'minimal',
  MODERATE: 'moderate',
  EXTENSIVE: 'extensive'
} as const;

export const TECHNOLOGY_USE = {
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high'
} as const;
import { Specialty, CategoryScore } from '../../types';

const PERSONALITY_WEIGHTS = {
  perfect: 1.0,
  good: 0.7,
  neutral: 0.4,
  challenging: 0.2
};

export function calculatePersonalityScore(
  mbtiType: string,
  specialty: Specialty
): CategoryScore {
  const details: Record<string, TraitScore> = {};
  let matchLevel: keyof typeof PERSONALITY_WEIGHTS;

  if (specialty.mbtiPreferences.perfect.includes(mbtiType)) {
    matchLevel = 'perfect';
  } else if (specialty.mbtiPreferences.good.includes(mbtiType)) {
    matchLevel = 'good';
  } else if (specialty.mbtiPreferences.challenging.includes(mbtiType)) {
    matchLevel = 'challenging';
  } else {
    matchLevel = 'neutral';
  }

  const score = PERSONALITY_WEIGHTS[matchLevel] * 100;

  details.mbtiMatch = {
    score,
    weight: 1,
    importance: 'critical'
  };

  return {
    score,
    details
  };
}
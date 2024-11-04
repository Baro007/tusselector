import { Specialty } from '../../types';
import { specialties } from '../../data/specialties';
import { calculateTraitScore } from './scores/traitScore';
import { calculateLifestyleScore } from './scores/lifestyleScore';
import { calculatePersonalityScore } from './scores/personalityScore';
import { calculateCareerScore } from './scores/careerScore';
import { SCORE_WEIGHTS } from './constants';

interface MatchResult {
  specialty: Specialty;
  matchPercentage: number;
  scores: {
    trait: number;
    lifestyle: number;
    personality: number;
    career: number;
  };
}

export function calculateSpecialtyMatches(responses: Record<string, any>): Specialty[] {
  if (!responses || Object.keys(responses).length === 0) {
    console.error('No responses provided for matching');
    return [];
  }

  try {
    const results: MatchResult[] = specialties.map(specialty => {
      const scores = calculateScores(responses, specialty);
      const matchPercentage = calculateTotalScore(scores);

      return {
        specialty: {
          ...specialty,
          matchPercentage
        },
        matchPercentage,
        scores
      };
    });

    const sortedResults = results
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .map(result => result.specialty);

    return sortedResults;
  } catch (error) {
    console.error('Error in calculateSpecialtyMatches:', error);
    return [];
  }
}

function calculateScores(responses: Record<string, any>, specialty: Specialty) {
  try {
    return {
      trait: calculateTraitScore(responses, specialty),
      lifestyle: calculateLifestyleScore(responses, specialty),
      personality: calculatePersonalityScore(responses, specialty),
      career: calculateCareerScore(responses, specialty)
    };
  } catch (error) {
    console.error(`Error calculating scores for ${specialty.name}:`, error);
    return {
      trait: 0,
      lifestyle: 0,
      personality: 0,
      career: 0
    };
  }
}

function calculateTotalScore(scores: MatchResult['scores']): number {
  const weightedScore = 
    scores.trait * SCORE_WEIGHTS.TRAITS +
    scores.lifestyle * SCORE_WEIGHTS.LIFESTYLE +
    scores.personality * SCORE_WEIGHTS.PERSONALITY +
    scores.career * SCORE_WEIGHTS.CAREER;

  return Math.round(Math.min(100, Math.max(0, weightedScore)));
}
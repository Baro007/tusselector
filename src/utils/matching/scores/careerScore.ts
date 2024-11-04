import { Specialty } from '../../../types';
import { CAREER_WEIGHTS } from '../constants';

export function calculateCareerScore(responses: Record<string, any>, specialty: Specialty): number {
  try {
    let score = 0;
    const opportunities = specialty.careerOpportunities;

    if (responses.academic_interest && opportunities.academic) {
      score += CAREER_WEIGHTS.academic;
    }

    if (responses.private_practice_interest && opportunities.private) {
      score += CAREER_WEIGHTS.private;
    }

    if (responses.hospital_interest && opportunities.hospital) {
      score += CAREER_WEIGHTS.hospital;
    }

    if (responses.research_interest && opportunities.research) {
      score += CAREER_WEIGHTS.research;
    }

    return Math.min(100, score);
  } catch (error) {
    console.error(`Error calculating career score for ${specialty.name}:`, error);
    return 0;
  }
}
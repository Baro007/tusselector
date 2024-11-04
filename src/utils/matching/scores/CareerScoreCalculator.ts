import { Specialty } from '../../../types';
import { CAREER_WEIGHTS } from '../constants';
import { BaseScoreCalculator } from './BaseScoreCalculator';

export class CareerScoreCalculator extends BaseScoreCalculator {
  calculate(): number {
    try {
      let score = 0;
      const opportunities = this.specialty.careerOpportunities;

      if (this.responses.academic_interest && opportunities.academic) {
        score += CAREER_WEIGHTS.academic;
      }

      if (this.responses.private_practice_interest && opportunities.private) {
        score += CAREER_WEIGHTS.private;
      }

      if (this.responses.hospital_interest && opportunities.hospital) {
        score += CAREER_WEIGHTS.hospital;
      }

      if (this.responses.research_interest && opportunities.research) {
        score += CAREER_WEIGHTS.research;
      }

      return this.validateScore(score);
    } catch (error) {
      console.error(`Error calculating career score for ${this.specialty.name}:`, error);
      return 0;
    }
  }
}
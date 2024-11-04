import { Specialty } from '../../../types';
import { SCORE_WEIGHTS } from '../constants';
import { TraitScoreCalculator } from './TraitScoreCalculator';
import { LifestyleScoreCalculator } from './LifestyleScoreCalculator';
import { PersonalityScoreCalculator } from './PersonalityScoreCalculator';
import { CareerScoreCalculator } from './CareerScoreCalculator';

export class ScoreCalculator {
  private responses: Record<string, any>;
  private specialty: Specialty;

  constructor(responses: Record<string, any>, specialty: Specialty) {
    this.responses = responses;
    this.specialty = specialty;
  }

  public calculateTotalScore(): number {
    try {
      const traitScore = new TraitScoreCalculator(this.responses, this.specialty).calculate();
      const lifestyleScore = new LifestyleScoreCalculator(this.responses, this.specialty).calculate();
      const personalityScore = new PersonalityScoreCalculator(this.responses, this.specialty).calculate();
      const careerScore = new CareerScoreCalculator(this.responses, this.specialty).calculate();

      const weightedScore = 
        traitScore * SCORE_WEIGHTS.TRAITS +
        lifestyleScore * SCORE_WEIGHTS.LIFESTYLE +
        personalityScore * SCORE_WEIGHTS.PERSONALITY +
        careerScore * SCORE_WEIGHTS.CAREER;

      return Math.round(Math.min(100, Math.max(0, weightedScore)));
    } catch (error) {
      console.error(`Error calculating total score for ${this.specialty.name}:`, error);
      return 0;
    }
  }
}
import { Specialty } from '../../../types';

export abstract class BaseScoreCalculator {
  protected responses: Record<string, any>;
  protected specialty: Specialty;

  constructor(responses: Record<string, any>, specialty: Specialty) {
    this.responses = responses;
    this.specialty = specialty;
  }

  abstract calculate(): number;

  protected validateScore(score: number): number {
    return Math.min(100, Math.max(0, score));
  }

  protected logCalculation(component: string, score: number): void {
    console.log(`${component} score for ${this.specialty.name}:`, score);
  }
}
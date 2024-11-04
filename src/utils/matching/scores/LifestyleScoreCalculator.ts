import { Specialty } from '../../../types';
import { LIFESTYLE_WEIGHTS } from '../constants';
import { BaseScoreCalculator } from './BaseScoreCalculator';

export class LifestyleScoreCalculator extends BaseScoreCalculator {
  calculate(): number {
    try {
      const workloadScore = this.calculateWorkloadScore();
      const nightShiftScore = this.calculateNightShiftScore();
      const flexibilityScore = this.calculateFlexibilityScore();

      const totalScore = 
        workloadScore * LIFESTYLE_WEIGHTS.workload +
        nightShiftScore * LIFESTYLE_WEIGHTS.nightShifts +
        flexibilityScore * LIFESTYLE_WEIGHTS.flexibility;

      return this.validateScore(totalScore);
    } catch (error) {
      console.error(`Error calculating lifestyle score for ${this.specialty.name}:`, error);
      return 0;
    }
  }

  private calculateWorkloadScore(): number {
    const preferredWorkload = this.responses.workload_preference;
    const specialtyWorkload = this.specialty.workLifeBalance.workload;

    const workloadMap = {
      light: 1,
      moderate: 2,
      heavy: 3
    };

    const difference = Math.abs(
      workloadMap[specialtyWorkload] - workloadMap[preferredWorkload]
    );

    return Math.max(0, 100 - difference * 33);
  }

  private calculateNightShiftScore(): number {
    const nightShiftPreference = this.responses.night_shift_preference;
    const specialtyNightShifts = this.specialty.workLifeBalance.nightShifts;

    if (nightShiftPreference === specialtyNightShifts) return 100;
    if (nightShiftPreference === 'occasional' || specialtyNightShifts === 'occasional') return 50;
    return 0;
  }

  private calculateFlexibilityScore(): number {
    const flexibilityPreference = this.responses.flexibility_preference;
    const specialtyFlexibility = this.specialty.workLifeBalance.flexibility;

    if (flexibilityPreference === specialtyFlexibility) return 100;
    if (flexibilityPreference === 'moderate' || specialtyFlexibility === 'moderate') return 50;
    return 0;
  }
}
import { Specialty } from '../../../types';
import { LIFESTYLE_WEIGHTS } from '../constants';

export function calculateLifestyleScore(responses: Record<string, any>, specialty: Specialty): number {
  try {
    const workloadScore = calculateWorkloadScore(responses, specialty);
    const nightShiftScore = calculateNightShiftScore(responses, specialty);
    const flexibilityScore = calculateFlexibilityScore(responses, specialty);

    const totalScore = 
      workloadScore * LIFESTYLE_WEIGHTS.workload +
      nightShiftScore * LIFESTYLE_WEIGHTS.nightShifts +
      flexibilityScore * LIFESTYLE_WEIGHTS.flexibility;

    return Math.min(100, Math.max(0, totalScore));
  } catch (error) {
    console.error(`Error calculating lifestyle score for ${specialty.name}:`, error);
    return 0;
  }
}

function calculateWorkloadScore(responses: Record<string, any>, specialty: Specialty): number {
  const workloadMap = {
    light: 1,
    moderate: 2,
    heavy: 3
  };

  const preferredWorkload = responses.workload_preference;
  const specialtyWorkload = specialty.workLifeBalance.workload;

  const difference = Math.abs(
    workloadMap[specialtyWorkload] - workloadMap[preferredWorkload]
  );

  return Math.max(0, 100 - difference * 33);
}

function calculateNightShiftScore(responses: Record<string, any>, specialty: Specialty): number {
  const nightShiftPreference = responses.night_shift_preference;
  const specialtyNightShifts = specialty.workLifeBalance.nightShifts;

  if (nightShiftPreference === specialtyNightShifts) return 100;
  if (nightShiftPreference === 'occasional' || specialtyNightShifts === 'occasional') return 50;
  return 0;
}

function calculateFlexibilityScore(responses: Record<string, any>, specialty: Specialty): number {
  const flexibilityPreference = responses.flexibility_preference;
  const specialtyFlexibility = specialty.workLifeBalance.flexibility;

  if (flexibilityPreference === specialtyFlexibility) return 100;
  if (flexibilityPreference === 'moderate' || specialtyFlexibility === 'moderate') return 50;
  return 0;
}
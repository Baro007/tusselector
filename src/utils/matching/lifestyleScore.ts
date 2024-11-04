import { Specialty, CategoryScore } from '../../types';
import { LIFESTYLE_ASPECT_WEIGHTS } from './constants';

export function calculateLifestyleScore(
  responses: Record<string, string | number>,
  specialty: Specialty
): CategoryScore {
  const details: Record<string, TraitScore> = {};
  let totalScore = 0;

  // Workload compatibility
  const workloadScore = calculateWorkloadCompatibility(responses, specialty);
  details.workload = {
    score: workloadScore,
    weight: LIFESTYLE_ASPECT_WEIGHTS.workload,
    importance: 'major'
  };

  // Night shifts compatibility
  const nightShiftScore = calculateNightShiftCompatibility(responses, specialty);
  details.nightShifts = {
    score: nightShiftScore,
    weight: LIFESTYLE_ASPECT_WEIGHTS.nightShifts,
    importance: 'major'
  };

  // Flexibility compatibility
  const flexibilityScore = calculateFlexibilityCompatibility(responses, specialty);
  details.flexibility = {
    score: flexibilityScore,
    weight: LIFESTYLE_ASPECT_WEIGHTS.flexibility,
    importance: 'major'
  };

  totalScore = (
    workloadScore * LIFESTYLE_ASPECT_WEIGHTS.workload +
    nightShiftScore * LIFESTYLE_ASPECT_WEIGHTS.nightShifts +
    flexibilityScore * LIFESTYLE_ASPECT_WEIGHTS.flexibility
  );

  return {
    score: totalScore,
    details
  };
}

function calculateWorkloadCompatibility(
  responses: Record<string, string | number>,
  specialty: Specialty
): number {
  const workloadPreference = Number(responses['values_1'] || 3);
  const workload = specialty.workLifeBalance.workload;

  if (workload === 'light' && workloadPreference > 3) return 100;
  if (workload === 'moderate' && workloadPreference === 3) return 100;
  if (workload === 'heavy' && workloadPreference < 3) return 100;

  return 50; // Partial match
}

function calculateNightShiftCompatibility(
  responses: Record<string, string | number>,
  specialty: Specialty
): number {
  const nightShiftResponse = responses['lifestyle_2'];
  const nightShifts = specialty.workLifeBalance.nightShifts;

  if (nightShifts === 'rare' && nightShiftResponse === 'Evet, sorun olur') return 100;
  if (nightShifts === 'frequent' && nightShiftResponse === 'Hayır, sorun olmaz') return 100;

  return 50; // Partial match
}

function calculateFlexibilityCompatibility(
  responses: Record<string, string | number>,
  specialty: Specialty
): number {
  const flexibilityPreference = Number(responses['values_1'] || 3);
  const flexibility = specialty.workLifeBalance.flexibility;

  if (flexibility === 'high' && flexibilityPreference > 3) return 100;
  if (flexibility === 'low' && flexibilityPreference < 3) return 100;
  if (flexibility === 'moderate') return 75;

  return 50; // Partial match
}
import { Specialty } from '../../../types';
import { TRAIT_WEIGHTS } from '../constants';

export function calculateTraitScore(responses: Record<string, any>, specialty: Specialty): number {
  try {
    let totalScore = 0;
    let totalWeight = 0;

    Object.entries(specialty.traits).forEach(([trait, details]) => {
      const traitScore = calculateSingleTraitScore(responses, trait);
      const weight = TRAIT_WEIGHTS[details.importance] * details.weight;

      totalScore += traitScore * weight;
      totalWeight += weight;
    });

    return totalWeight > 0 ? (totalScore / totalWeight) : 0;
  } catch (error) {
    console.error(`Error calculating trait score for ${specialty.name}:`, error);
    return 0;
  }
}

function calculateSingleTraitScore(responses: Record<string, any>, trait: string): number {
  const relevantResponses = getRelevantResponses(responses, trait);
  if (relevantResponses.length === 0) return 50;

  const scores = relevantResponses.map(response => normalizeResponse(response));
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

function getRelevantResponses(responses: Record<string, any>, trait: string): any[] {
  const traitQuestions = getTraitQuestions(trait);
  return traitQuestions
    .map(question => responses[question])
    .filter(response => response !== undefined);
}

function normalizeResponse(response: any): number {
  if (typeof response === 'number') {
    return Math.min(100, response * 20);
  }

  if (typeof response === 'boolean') {
    return response ? 100 : 0;
  }

  if (Array.isArray(response)) {
    return Math.min(100, (response.length / 5) * 100);
  }

  const responseMap: Record<string, number> = {
    'high': 100,
    'moderate': 60,
    'low': 20,
    'yes': 100,
    'no': 0,
    'maybe': 50,
    'extensive': 100,
    'minimal': 20
  };

  return responseMap[String(response).toLowerCase()] ?? 50;
}

function getTraitQuestions(trait: string): string[] {
  const traitMap: Record<string, string[]> = {
    surgicalSkills: ['manual_dexterity', 'surgical_interest'],
    patientCare: ['patient_interaction', 'empathy'],
    research: ['research_interest', 'academic_interest'],
    technology: ['tech_interest', 'tech_comfort'],
    leadership: ['team_management', 'decision_making'],
    analyticalThinking: ['problem_solving', 'critical_thinking'],
    communication: ['patient_communication', 'team_interaction'],
    stressManagement: ['stress_tolerance', 'emergency_handling'],
    attention: ['detail_orientation', 'focus'],
    technicalSkills: ['technical_ability', 'manual_skills']
  };

  return traitMap[trait] || [];
}
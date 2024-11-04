import { Specialty } from '../../../types';
import { PERSONALITY_WEIGHTS } from '../constants';

export function calculatePersonalityScore(responses: Record<string, any>, specialty: Specialty): number {
  try {
    const mbtiType = calculateMBTIType(responses);
    return calculateMBTIScore(mbtiType, specialty);
  } catch (error) {
    console.error(`Error calculating personality score for ${specialty.name}:`, error);
    return 0;
  }
}

function calculateMBTIType(responses: Record<string, any>): string {
  const e_i = calculateDichotomy(responses, 'E_I');
  const s_n = calculateDichotomy(responses, 'S_N');
  const t_f = calculateDichotomy(responses, 'T_F');
  const j_p = calculateDichotomy(responses, 'J_P');

  return `${e_i}${s_n}${t_f}${j_p}`;
}

function calculateDichotomy(responses: Record<string, any>, dimension: string): string {
  const questionMap: Record<string, string[]> = {
    'E_I': ['personality_1', 'social_preference'],
    'S_N': ['learning_style', 'problem_solving'],
    'T_F': ['decision_making', 'empathy'],
    'J_P': ['work_style', 'planning']
  };

  const relevantResponses = questionMap[dimension]
    .map(q => responses[q])
    .filter(r => r !== undefined);

  if (relevantResponses.length === 0) {
    return dimension.split('_')[0];
  }

  const score = relevantResponses.reduce((sum, resp) => sum + normalizeMBTIResponse(resp), 0);
  return score > 0 ? dimension.split('_')[0] : dimension.split('_')[1];
}

function normalizeMBTIResponse(response: any): number {
  if (typeof response === 'number') {
    return response > 3 ? 1 : -1;
  }

  const responseMap: Record<string, number> = {
    'extrovert': 1,
    'introvert': -1,
    'sensing': 1,
    'intuitive': -1,
    'thinking': 1,
    'feeling': -1,
    'judging': 1,
    'perceiving': -1
  };

  return responseMap[String(response).toLowerCase()] ?? 0;
}

function calculateMBTIScore(mbtiType: string, specialty: Specialty): number {
  const { perfect, good, challenging } = specialty.mbtiPreferences;

  if (perfect.includes(mbtiType)) return 100 * PERSONALITY_WEIGHTS.perfect;
  if (good.includes(mbtiType)) return 100 * PERSONALITY_WEIGHTS.good;
  if (challenging.includes(mbtiType)) return 100 * PERSONALITY_WEIGHTS.challenging;
  
  return 50 * PERSONALITY_WEIGHTS.neutral;
}
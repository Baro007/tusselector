import { Specialty } from '../../../types';
import { MBTI_MATCH_WEIGHTS } from '../constants';
import { BaseScoreCalculator } from './BaseScoreCalculator';

export class PersonalityScoreCalculator extends BaseScoreCalculator {
  calculate(): number {
    try {
      const mbtiType = this.calculateMBTIType();
      return this.calculateMBTIScore(mbtiType);
    } catch (error) {
      console.error(`Error calculating personality score for ${this.specialty.name}:`, error);
      return 0;
    }
  }

  private calculateMBTIType(): string {
    const e_i = this.calculateDichotomy('E_I');
    const s_n = this.calculateDichotomy('S_N');
    const t_f = this.calculateDichotomy('T_F');
    const j_p = this.calculateDichotomy('J_P');

    return `${e_i}${s_n}${t_f}${j_p}`;
  }

  private calculateDichotomy(dimension: string): string {
    const responses = this.getMBTIResponses(dimension);
    const score = responses.reduce((sum, resp) => sum + resp, 0);
    
    switch (dimension) {
      case 'E_I': return score > 0 ? 'E' : 'I';
      case 'S_N': return score > 0 ? 'S' : 'N';
      case 'T_F': return score > 0 ? 'T' : 'F';
      case 'J_P': return score > 0 ? 'J' : 'P';
      default: return '';
    }
  }

  private getMBTIResponses(dimension: string): number[] {
    const questionMap: Record<string, string[]> = {
      'E_I': ['personality_1', 'social_preference'],
      'S_N': ['learning_style', 'problem_solving'],
      'T_F': ['decision_making', 'empathy'],
      'J_P': ['work_style', 'planning']
    };

    return questionMap[dimension]
      .map(q => this.responses[q])
      .filter(r => r !== undefined)
      .map(r => this.normalizeMBTIResponse(r, dimension));
  }

  private normalizeMBTIResponse(response: any, dimension: string): number {
    // Implement MBTI response normalization logic
    return 0;
  }

  private calculateMBTIScore(mbtiType: string): number {
    const { perfect, good, challenging } = this.specialty.mbtiPreferences;

    if (perfect.includes(mbtiType)) return 100 * MBTI_MATCH_WEIGHTS.perfect;
    if (good.includes(mbtiType)) return 100 * MBTI_MATCH_WEIGHTS.good;
    if (challenging.includes(mbtiType)) return 100 * MBTI_MATCH_WEIGHTS.challenging;
    
    return 50;
  }
}
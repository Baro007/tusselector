import { Specialty } from '../../../types';
import { TRAIT_WEIGHTS } from '../constants';
import { BaseScoreCalculator } from './BaseScoreCalculator';

export class TraitScoreCalculator extends BaseScoreCalculator {
  calculate(): number {
    try {
      let totalScore = 0;
      let totalWeight = 0;

      Object.entries(this.specialty.traits).forEach(([trait, details]) => {
        const score = this.calculateTraitScore(trait);
        const weight = TRAIT_WEIGHTS[details.importance] * details.weight;

        totalScore += score * weight;
        totalWeight += weight;
      });

      return totalWeight > 0 ? (totalScore / totalWeight) : 0;
    } catch (error) {
      console.error(`Error calculating trait score for ${this.specialty.name}:`, error);
      return 0;
    }
  }

  private calculateTraitScore(trait: string): number {
    const relevantResponses = this.getRelevantResponses(trait);
    if (relevantResponses.length === 0) return 50;

    const scores = relevantResponses.map(response => this.normalizeResponse(response));
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

  private getRelevantResponses(trait: string): any[] {
    const traitQuestions = this.getTraitQuestions(trait);
    return traitQuestions
      .map(question => this.responses[question])
      .filter(response => response !== undefined);
  }

  private normalizeResponse(response: any): number {
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

  private getTraitQuestions(trait: string): string[] {
    const traitMap: Record<string, string[]> = {
      surgicalSkills: ['manual_dexterity', 'surgical_interest'],
      patientCare: ['patient_interaction', 'empathy'],
      research: ['research_interest', 'academic_interest'],
      technology: ['tech_interest', 'tech_comfort'],
      leadership: ['team_management', 'decision_making']
      // Add more mappings as needed
    };

    return traitMap[trait] || [];
  }
}
import { Specialty, TraitScore, CategoryScore } from '../../types';
import { TRAIT_IMPORTANCE_WEIGHTS } from './constants';
import { traitQuestionMap } from './traitQuestionMap';

export function calculateTraitScores(
  responses: Record<string, string | number>,
  specialty: Specialty
): CategoryScore {
  const details: Record<string, TraitScore> = {};
  let totalScore = 0;
  let totalWeight = 0;

  // Her trait için puanlama yap
  Object.entries(specialty.traits).forEach(([trait, info]) => {
    const traitScore = calculateSingleTraitScore(responses, trait);
    const weight = TRAIT_IMPORTANCE_WEIGHTS[info.importance] * info.weight;
    
    // Trait özelinde ek ağırlıklandırma
    const adjustedScore = adjustTraitScore(traitScore, trait, responses);
    
    details[trait] = {
      score: adjustedScore,
      weight,
      importance: info.importance
    };

    totalScore += adjustedScore * weight;
    totalWeight += weight;
  });

  // Normalize edilmiş toplam skor
  const normalizedScore = totalWeight > 0 ? (totalScore / totalWeight) * 100 : 0;

  return {
    score: Math.min(100, Math.max(0, normalizedScore)), // 0-100 arasında sınırla
    details
  };
}

function calculateSingleTraitScore(
  responses: Record<string, string | number>,
  trait: string
): number {
  const relatedQuestions = traitQuestionMap[trait] || [];
  if (relatedQuestions.length === 0) return 50; // Default orta değer

  let totalScore = 0;
  let validResponses = 0;

  relatedQuestions.forEach(questionId => {
    const response = responses[questionId];
    if (response !== undefined) {
      totalScore += normalizeResponse(response);
      validResponses++;
    }
  });

  return validResponses > 0 ? (totalScore / validResponses) : 50;
}

function adjustTraitScore(
  baseScore: number, 
  trait: string, 
  responses: Record<string, string | number>
): number {
  let adjustedScore = baseScore;

  // Trait özelinde özel ayarlamalar
  switch (trait) {
    case 'surgicalSkills':
      if (responses['manual_dexterity'] === 5) adjustedScore *= 1.2;
      break;
      
    case 'patientCare':
      if (responses['empathy'] === 5) adjustedScore *= 1.15;
      break;
      
    case 'research':
      if (responses['academic_interest'] === 'Evet') adjustedScore *= 1.1;
      break;
      
    case 'leadership':
      if (responses['team_management'] === 5) adjustedScore *= 1.1;
      break;
  }

  // Skor sınırlarını kontrol et
  return Math.min(100, Math.max(0, adjustedScore));
}

function normalizeResponse(value: string | number): number {
  if (typeof value === 'number') {
    return value * 20; // 1-5 arası değerleri 20-100 arasına dönüştür
  }
  
  // String yanıtları sayısal değerlere dönüştür
  const responseValues: Record<string, number> = {
    'Evet': 100,
    'Hayır': 0,
    'Kararsızım': 50,
    'Uzun süreli hasta takibi': 90,
    'Kısa süreli akut bakım': 70,
    'Minimal hasta teması': 30
  };

  return responseValues[value] ?? 50;
}
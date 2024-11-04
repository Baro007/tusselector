import { Specialty } from '../../types';

export function calculateCareerScore(
  responses: Record<string, string | number>,
  specialty: Specialty
): number {
  let score = 0;
  const careerOpps = specialty.careerOpportunities;

  // Akademik kariyer uyumu
  if (responses['career_1'] === 'Evet' && careerOpps.academic) score += 25;
  
  // Özel pratik uyumu
  if (responses['values_3'] === 'Özel klinik' && careerOpps.private) score += 25;
  
  // Araştırma uyumu
  if (responses['career_2'] === 'Evet' && careerOpps.research) score += 25;
  
  // Hastane bazlı çalışma uyumu
  if (responses['values_3'] === 'Hastane temelli' && careerOpps.hospital) score += 25;

  return score;
}
// src/utils/matching/mbti/index.ts

interface MBTIIndicators {
  E_I: number;
  S_N: number;
  T_F: number;
  J_P: number;
}

export function calculateMBTIType(
  responses: Record<string, string | number>
): string | null {
  try {
    const indicators = calculateIndicators(responses);

    const e_i = indicators.E_I > 0 ? 'E' : 'I';
    const s_n = indicators.S_N > 0 ? 'S' : 'N';
    const t_f = indicators.T_F > 0 ? 'T' : 'F';
    const j_p = indicators.J_P > 0 ? 'J' : 'P';

    return `${e_i}${s_n}${t_f}${j_p}`;
  } catch (error) {
    console.error('Error calculating MBTI type:', error);
    return null;
  }
}

function calculateIndicators(
  responses: Record<string, string | number>
): MBTIIndicators {
  const indicators: MBTIIndicators = {
    E_I: 0,
    S_N: 0,
    T_F: 0,
    J_P: 0,
  };

  try {
    // E/I Dimension (Extraversion vs Introversion)
    if (responses.personality_1 === 'İnsanlarla etkileşimden')
      indicators.E_I += 2;
    if (responses.values_14 === 5) indicators.E_I += 1;
    if (responses.patient_1 === 'Uzun süreli hasta takibi') indicators.E_I += 1;

    // S/N Dimension (Sensing vs Intuition)
    if (
      responses.personality_2 ===
      'Detaylara odaklanarak, somut gerçeklere dayanarak'
    ) {
      indicators.S_N += 2;
    }
    if (responses.values_9 === 5) indicators.S_N -= 1;
    if (responses.research_1 === 5) indicators.S_N -= 1;

    // T/F Dimension (Thinking vs Feeling)
    if (responses.personality_3 === 'Mantık ve objektif analize dayanarak') {
      indicators.T_F += 2;
    }
    if (responses.values_11 === 5) indicators.T_F -= 1;
    if (responses.skills_8 === 5) indicators.T_F -= 1;

    // J/P Dimension (Judging vs Perceiving)
    if (responses.personality_4 === 'Planlı ve organize bir şekilde') {
      indicators.J_P += 2;
    }
    if (responses.values_7 === 5) indicators.J_P -= 1;
    if (responses.lifestyle_1 === 'Evet') indicators.J_P += 1;

    return indicators;
  } catch (error) {
    console.error('Error calculating MBTI indicators:', error);
    return indicators;
  }
}

// Debug yardımcı fonksiyonu
export function debugMBTI(responses: Record<string, string | number>): void {
  const indicators = calculateIndicators(responses);
  const type = calculateMBTIType(responses);

  console.log('MBTI Calculation Debug:');
  console.log('Indicators:', indicators);
  console.log('Final Type:', type);
}

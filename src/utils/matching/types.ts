export interface TraitScore {
  score: number;
  weight: number;
  importance: 'critical' | 'major' | 'minor';
}

export interface CategoryScore {
  score: number;
  details: {
    [key: string]: TraitScore;
  };
}

export interface MatchResult {
  totalScore: number;
  categoryScores: {
    traits: CategoryScore;
    lifestyle: CategoryScore;
    personality: CategoryScore;
    career: CategoryScore;
  };
}
export interface FormState {
  responses: Record<string, any>;
  preferences?: UserPreferences;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  matchPercentage: number;
  traits: Record<
    string,
    {
      weight: number;
      importance: 'critical' | 'major' | 'minor';
      description: string;
      requiredSkills: string[];
    }
  >;
  workLifeBalance: {
    workload: 'light' | 'moderate' | 'heavy';
    nightShifts: string;
    flexibility: string;
    averageHoursPerWeek: number;
    weekendWork: boolean;
    holidayWork: boolean;
  };
  mbtiPreferences: {
    perfect: string[];
    good: string[];
    challenging: string[];
    reasoning: {
      perfect: string;
      good: string;
      challenging: string;
    };
  };
  // ... diğer özellikler
}

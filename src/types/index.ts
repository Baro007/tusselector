// ... mevcut tipler ...

export interface UserPreferences {
  workloadPreference: 'light' | 'moderate' | 'heavy';
  patientInteractionPreference: 'minimal' | 'moderate' | 'extensive';
  procedurePreference: 'low' | 'moderate' | 'high';
  technologyPreference: 'low' | 'moderate' | 'high';
  researchInterest: boolean;
  teachingInterest: boolean;
}
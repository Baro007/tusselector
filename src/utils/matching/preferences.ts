import { UserPreferences } from '../../types';

export function calculatePreferences(responses: Record<string, string | number>): UserPreferences {
  return {
    workloadPreference: calculateWorkloadPreference(responses),
    patientInteractionPreference: calculatePatientInteractionPreference(responses),
    procedurePreference: calculateProcedurePreference(responses),
    technologyPreference: calculateTechnologyPreference(responses),
    researchInterest: calculateResearchInterest(responses),
    teachingInterest: calculateTeachingInterest(responses)
  };
}

function calculateWorkloadPreference(responses: Record<string, string | number>): 'light' | 'moderate' | 'heavy' {
  const workLifeBalance = Number(responses['values_1'] || 3);
  const nightShiftPreference = responses['lifestyle_2'];
  const workloadResponse = responses['values_3'];

  if (workLifeBalance > 4 || nightShiftPreference === 'Evet, sorun olur') {
    return 'light';
  } else if (workLifeBalance < 2 && nightShiftPreference === 'Hayır, sorun olmaz') {
    return 'heavy';
  } else if (workloadResponse === 'Akademik ortam') {
    return 'moderate';
  }
  return 'moderate';
}

function calculatePatientInteractionPreference(responses: Record<string, string | number>): 'minimal' | 'moderate' | 'extensive' {
  const patientInteraction = responses['patient_1'];
  const patientAgePreference = responses['patient_2'];
  
  if (patientInteraction === 'Minimal hasta teması' || 
      responses['values_3'] === 'Araştırma merkezi') {
    return 'minimal';
  } else if (patientInteraction === 'Uzun süreli hasta takibi' || 
             Array.isArray(patientAgePreference) && patientAgePreference.length > 2) {
    return 'extensive';
  }
  return 'moderate';
}

function calculateProcedurePreference(responses: Record<string, string | number>): 'low' | 'moderate' | 'high' {
  const procedureTypes = responses['skills_2'];
  const manualSkills = Number(responses['skills_3'] || 3);
  
  if (Array.isArray(procedureTypes)) {
    if (procedureTypes.includes('Majör cerrahi prosedürler') || manualSkills > 4) {
      return 'high';
    } else if (procedureTypes.includes('Minimal invaziv işlemler') || 
               procedureTypes.includes('Görüntüleme rehberliğinde işlemler')) {
      return 'moderate';
    }
  }
  return 'low';
}

function calculateTechnologyPreference(responses: Record<string, string | number>): 'low' | 'moderate' | 'high' {
  const techInterest = Number(responses['tech_1'] || 3);
  const techTools = responses['tech_2'];
  const workEnvironment = responses['values_3'];
  
  if (techInterest > 4 || 
      (Array.isArray(techTools) && techTools.length > 3) ||
      workEnvironment === 'Araştırma merkezi') {
    return 'high';
  } else if (techInterest < 2 && 
             (!Array.isArray(techTools) || techTools.length === 0)) {
    return 'low';
  }
  return 'moderate';
}

function calculateResearchInterest(responses: Record<string, string | number>): boolean {
  const researchInterest = Number(responses['research_1'] || 3);
  const academicGoals = responses['career_1'];
  const researchActivities = responses['research_2'];
  
  return researchInterest > 3 || 
         academicGoals === 'Evet' || 
         (Array.isArray(researchActivities) && researchActivities.length > 2);
}

function calculateTeachingInterest(responses: Record<string, string | number>): boolean {
  const academicInterest = responses['career_1'];
  const workEnvironment = responses['values_3'];
  
  return academicInterest === 'Evet' || workEnvironment === 'Akademik ortam';
}
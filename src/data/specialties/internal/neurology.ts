import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const neurology: Specialty = {
  id: 'noroloji',
  name: 'Nöroloji',
  category: specialtyCategories.INTERNAL,
  description: 'Beyin, omurilik ve periferik sinir sisteminin hastalıklarını tanı ve tedavi eder. İnme, epilepsi, baş ağrıları, multiple skleroz, nörodejeneratif hastalıklar ve hareket bozukluklarının yönetimini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    neurologicalExamination: {
      weight: 0.95,
      importance: 'critical',
      description: 'Detaylı nörolojik muayene'
    },
    diagnosticAbility: {
      weight: 0.9,
      importance: 'critical',
      description: 'Karmaşık semptomları analiz etme'
    },
    patientCommunication: {
      weight: 0.85,
      importance: 'major',
      description: 'Kronik hasta iletişimi'
    },
    researchAptitude: {
      weight: 0.85,
      importance: 'major',
      description: 'Bilimsel gelişmeleri takip'
    },
    procedureSkills: {
      weight: 0.8,
      importance: 'major',
      description: 'EMG ve LP becerileri'
    },
    clinicalReasoning: {
      weight: 0.9,
      importance: 'critical',
      description: 'Kompleks vaka analizi'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 50,
    weekendWork: true
  },
  careerPath: {
    duration: {
      residency: 5,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 28000,
      max: 65000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['INTJ', 'INTP', 'ISTJ'],
    good: ['INFJ', 'ISTP', 'ENTJ'],
    challenging: ['ESFP', 'ENFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Nörovasküler Hastalıklar',
      description: 'İnme ve damar hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Epilepsi',
      description: 'Nöbet hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Hareket Bozuklukları',
      description: 'Parkinson ve benzeri hastalıklar',
      additionalTraining: 2
    },
    {
      name: 'Nöroimmünoloji',
      description: 'MS ve otoimmün hastalıklar',
      additionalTraining: 2
    },
    {
      name: 'Nöromüsküler Hastalıklar',
      description: 'Kas ve sinir hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Baş Ağrısı',
      description: 'Migren ve diğer baş ağrıları',
      additionalTraining: 1
    }
  ]
};
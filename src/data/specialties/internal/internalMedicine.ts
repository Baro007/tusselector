import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const internalMedicine: Specialty = {
  id: 'ic-hastaliklari',
  name: 'İç Hastalıkları',
  category: specialtyCategories.INTERNAL,
  description: 'Yetişkinlerde görülen hastalıkların tanı ve tedavisi ile ilgilenir. Diyabet, hipertansiyon, kalp hastalıkları gibi kronik hastalıkların yönetimini sağlar.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Analitik düşünme yeteneği'
    },
    patientCare: {
      weight: 0.85,
      importance: 'critical',
      description: 'Hasta bakım becerileri'
    },
    communication: {
      weight: 0.85,
      importance: 'major',
      description: 'İletişim becerileri'
    },
    clinicalJudgment: {
      weight: 0.9,
      importance: 'critical',
      description: 'Klinik karar verme'
    },
    continuousLearning: {
      weight: 0.8,
      importance: 'major',
      description: 'Sürekli öğrenme'
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
      residency: 4,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 25000,
      max: 45000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'extensive',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISFJ', 'INTJ'],
    good: ['ESTJ', 'INFJ', 'ENTJ'],
    challenging: ['ESTP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Gastroenteroloji',
      description: 'Sindirim sistemi hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Endokrinoloji',
      description: 'Hormon hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Nefroloji',
      description: 'Böbrek hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Hematoloji',
      description: 'Kan hastalıkları',
      additionalTraining: 3
    }
  ]
};
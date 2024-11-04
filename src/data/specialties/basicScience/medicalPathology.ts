import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalPathology: Specialty = {
  id: 'tibbi-patoloji',
  name: 'Tıbbi Patoloji',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'Hastalıkların hücresel ve dokusal düzeyde tanısını koyar. Biyopsi ve cerrahi örneklerin mikroskobik incelemesi, kanser tanısı ve evrelemesi, otopsi incelemeleri ve moleküler patoloji çalışmalarını yürütür.',
  matchPercentage: 0,
  traits: {
    visualDiagnosis: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikroskobik görsel tanı koyma'
    },
    attention: {
      weight: 0.95,
      importance: 'critical',
      description: 'Detaylara üst düzey dikkat'
    },
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Analitik düşünme ve problem çözme'
    },
    clinicalCorrelation: {
      weight: 0.85,
      importance: 'major',
      description: 'Klinik-patolojik korelasyon'
    },
    labManagement: {
      weight: 0.85,
      importance: 'major',
      description: 'Laboratuvar yönetimi'
    },
    research: {
      weight: 0.8,
      importance: 'major',
      description: 'Araştırma becerileri'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'rare',
    flexibility: 'high',
    averageHoursPerWeek: 45,
    weekendWork: false
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
      max: 55000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'minimal',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'ISTP'],
    good: ['INTP', 'ESTJ', 'ISFJ'],
    challenging: ['ENFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Cerrahi Patoloji',
      description: 'Cerrahi örneklerin incelenmesi',
      additionalTraining: 2
    },
    {
      name: 'Sitopatoloji',
      description: 'Hücre düzeyinde inceleme',
      additionalTraining: 1
    },
    {
      name: 'Moleküler Patoloji',
      description: 'Genetik ve moleküler testler',
      additionalTraining: 2
    },
    {
      name: 'Dermatopatoloji',
      description: 'Deri hastalıkları patolojisi',
      additionalTraining: 2
    },
    {
      name: 'Nöropatoloji',
      description: 'Sinir sistemi patolojisi',
      additionalTraining: 2
    },
    {
      name: 'Hematolojik Patoloji',
      description: 'Kan hastalıkları patolojisi',
      additionalTraining: 2
    }
  ]
};
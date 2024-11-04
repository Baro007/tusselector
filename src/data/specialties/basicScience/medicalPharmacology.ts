import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalPharmacology: Specialty = {
  id: 'tibbi-farmakoloji',
  name: 'Tıbbi Farmakoloji',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'İlaçların etki mekanizmalarını, yan etkilerini, etkileşimlerini ve klinik kullanımlarını inceler. İlaç geliştirme, klinik araştırmalar ve akılcı ilaç kullanımı konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Analitik düşünme ve araştırma'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Klinik araştırma metodolojisi'
    },
    dataAnalysis: {
      weight: 0.9,
      importance: 'critical',
      description: 'İstatistiksel analiz ve yorumlama'
    },
    teaching: {
      weight: 0.85,
      importance: 'major',
      description: 'Eğitim ve danışmanlık'
    },
    clinicalJudgment: {
      weight: 0.85,
      importance: 'major',
      description: 'Klinik farmakoloji'
    },
    labSkills: {
      weight: 0.8,
      importance: 'major',
      description: 'Laboratuvar teknikleri'
    }
  },
  workLifeBalance: {
    workload: 'light',
    nightShifts: 'rare',
    flexibility: 'high',
    averageHoursPerWeek: 40,
    weekendWork: false
  },
  careerPath: {
    duration: {
      residency: 4
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 22000,
      max: 45000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'minimal',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['INTJ', 'INTP', 'ISTJ'],
    good: ['ENTJ', 'ISTP', 'ENTP'],
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
      name: 'Klinik Farmakoloji',
      description: 'İlaç tedavisi optimizasyonu',
      additionalTraining: 2
    },
    {
      name: 'İlaç Araştırmaları',
      description: 'Klinik ilaç çalışmaları',
      additionalTraining: 2
    },
    {
      name: 'Toksikoloji',
      description: 'İlaç ve zehir etkilerinin araştırılması',
      additionalTraining: 2
    },
    {
      name: 'Farmakogenetik',
      description: 'Genetik temelli ilaç yanıtları',
      additionalTraining: 2
    },
    {
      name: 'Farmakovijilans',
      description: 'İlaç güvenliliği takibi',
      additionalTraining: 1
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const forensicMedicine: Specialty = {
  id: 'adli-tip',
  name: 'Adli Tıp',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Tıp ve hukuk arasında köprü görevi görür. Adli olayların tıbbi yönden incelenmesi, otopsi, yaralanmaların değerlendirilmesi, cinsel saldırı muayenesi ve adli raporların hazırlanması konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    forensicKnowledge: {
      weight: 0.95,
      importance: 'critical',
      description: 'Adli tıp bilgisi'
    },
    attention: {
      weight: 0.95,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Analitik düşünme'
    },
    documentation: {
      weight: 0.9,
      importance: 'critical',
      description: 'Rapor yazımı'
    },
    objectivity: {
      weight: 0.85,
      importance: 'major',
      description: 'Tarafsız değerlendirme'
    },
    stressManagement: {
      weight: 0.85,
      importance: 'major',
      description: 'Stres yönetimi'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 45,
    weekendWork: true
  },
  careerPath: {
    duration: {
      residency: 4
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 25000,
      max: 50000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'minimal',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'ISTP'],
    good: ['ESTJ', 'INTP', 'ENTJ'],
    challenging: ['ENFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: false,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Klinik Adli Tıp',
      description: 'Yaşayan kişilerde adli değerlendirme',
      additionalTraining: 2
    },
    {
      name: 'Otopsi Patolojisi',
      description: 'Ölüm nedeni araştırması',
      additionalTraining: 2
    },
    {
      name: 'Adli Toksikoloji',
      description: 'Zehirlenme araştırmaları',
      additionalTraining: 2
    },
    {
      name: 'Adli Psikiyatri',
      description: 'Psikiyatrik adli değerlendirme',
      additionalTraining: 2
    },
    {
      name: 'Adli Antropoloji',
      description: 'Kemik kalıntıları incelemesi',
      additionalTraining: 1
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalBiochemistry: Specialty = {
  id: 'tibbi-biyokimya',
  name: 'Tıbbi Biyokimya',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'Vücuttaki biyokimyasal süreçleri ve metabolik hastalıkları inceler. Laboratuvar testlerinin yönetimi, kalite kontrolü ve yorumlanması ile hastalıkların tanı ve takibinde önemli rol oynar.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Analitik düşünme ve problem çözme'
    },
    labManagement: {
      weight: 0.9,
      importance: 'critical',
      description: 'Laboratuvar yönetimi'
    },
    qualityControl: {
      weight: 0.9,
      importance: 'critical',
      description: 'Kalite kontrol ve standardizasyon'
    },
    dataAnalysis: {
      weight: 0.85,
      importance: 'major',
      description: 'Veri analizi ve yorumlama'
    },
    technicalSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Laboratuvar cihazları kullanımı'
    },
    research: {
      weight: 0.8,
      importance: 'major',
      description: 'Araştırma metodolojisi'
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
      min: 22000,
      max: 45000
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
    perfect: ['ISTJ', 'INTJ', 'INTP'],
    good: ['ISFJ', 'ESTJ', 'ENTJ'],
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
      name: 'Klinik Biyokimya',
      description: 'Rutin ve özel test analizleri',
      additionalTraining: 2
    },
    {
      name: 'Moleküler Tanı',
      description: 'Genetik ve moleküler testler',
      additionalTraining: 2
    },
    {
      name: 'Metabolik Hastalıklar',
      description: 'Doğumsal metabolizma hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Toksikoloji',
      description: 'Zehir ve ilaç düzeyi analizleri',
      additionalTraining: 1
    },
    {
      name: 'Endokrinoloji Laboratuvarı',
      description: 'Hormon testleri ve değerlendirmesi',
      additionalTraining: 1
    }
  ]
};
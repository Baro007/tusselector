import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const radiology: Specialty = {
  id: 'radyoloji',
  name: 'Radyoloji',
  category: specialtyCategories.DIAGNOSTIC,
  description: 'Görüntüleme yöntemleri kullanarak hastalıkların tanısını koyar. MR, BT, ultrason, mamografi ve konvansiyonel radyografi gibi teknolojileri kullanarak vücudun iç yapılarını görüntüler ve yorumlar.',
  matchPercentage: 0,
  traits: {
    visualSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Görsel algı ve yorumlama'
    },
    technology: {
      weight: 0.9,
      importance: 'critical',
      description: 'İleri teknoloji kullanımı'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    analyticalThinking: {
      weight: 0.85,
      importance: 'major',
      description: 'Analitik düşünme'
    },
    communication: {
      weight: 0.8,
      importance: 'major',
      description: 'Klinik konsültasyon'
    },
    decisionMaking: {
      weight: 0.85,
      importance: 'major',
      description: 'Tanısal karar verme'
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
      residency: 5,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 28000,
      max: 70000
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
    good: ['INTP', 'ESTJ', 'ENTJ'],
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
      name: 'Nöroradyoloji',
      description: 'Beyin ve sinir sistemi görüntüleme',
      additionalTraining: 2
    },
    {
      name: 'Girişimsel Radyoloji',
      description: 'Görüntüleme eşliğinde minimal invaziv işlemler',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Radyoloji',
      description: 'Çocuk hastalıklarında görüntüleme',
      additionalTraining: 2
    },
    {
      name: 'Meme Radyolojisi',
      description: 'Meme hastalıkları görüntüleme',
      additionalTraining: 1
    },
    {
      name: 'Kardiyovasküler Radyoloji',
      description: 'Kalp ve damar sistemi görüntüleme',
      additionalTraining: 2
    },
    {
      name: 'Kas-İskelet Radyolojisi',
      description: 'Ortopedik görüntüleme',
      additionalTraining: 1
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const aviationMedicine: Specialty = {
  id: 'hava-uzay-hekimligi',
  name: 'Hava ve Uzay Hekimliği',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Havacılık ve uzay ortamının insan sağlığı üzerindeki etkilerini inceler. Pilot ve uçuş ekibi sağlığı, yüksek irtifa fizyolojisi, uzay tıbbı ve havacılık kazalarının önlenmesi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    aerospaceMedicine: {
      weight: 0.95,
      importance: 'critical',
      description: 'Havacılık ve uzay tıbbı bilgisi'
    },
    physiology: {
      weight: 0.9,
      importance: 'critical',
      description: 'İleri fizyoloji bilgisi'
    },
    preventiveMedicine: {
      weight: 0.9,
      importance: 'critical',
      description: 'Önleyici tıp yaklaşımı'
    },
    riskAssessment: {
      weight: 0.85,
      importance: 'major',
      description: 'Risk değerlendirmesi'
    },
    occupationalHealth: {
      weight: 0.85,
      importance: 'major',
      description: 'Meslek sağlığı'
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
    averageHoursPerWeek: 40,
    weekendWork: false
  },
  careerPath: {
    duration: {
      residency: 3
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 25000,
      max: 60000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'moderate',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'ESTJ'],
    good: ['ISTP', 'ENTJ', 'INTP'],
    challenging: ['ENFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: false,
    research: true
  },
  subspecialties: [
    {
      name: 'Havacılık Tıbbı',
      description: 'Pilot ve uçuş ekibi sağlığı',
      additionalTraining: 1
    },
    {
      name: 'Uzay Tıbbı',
      description: 'Uzay ortamı fizyolojisi',
      additionalTraining: 2
    },
    {
      name: 'Yüksek İrtifa Fizyolojisi',
      description: 'Yükseklik etkileri ve adaptasyon',
      additionalTraining: 1
    },
    {
      name: 'Havacılık Kazaları',
      description: 'Kaza önleme ve araştırma',
      additionalTraining: 1
    }
  ]
};
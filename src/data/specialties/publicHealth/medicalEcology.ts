import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalEcology: Specialty = {
  id: 'tibbi-ekoloji',
  name: 'Tıbbi Ekoloji ve Hidroklimatoloji',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Çevresel faktörlerin insan sağlığı üzerindeki etkilerini ve doğal tedavi yöntemlerini inceler. Kaplıca tıbbı, klimaterapi, talassoterapi ve çevresel sağlık risk değerlendirmesi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    environmentalHealth: {
      weight: 0.95,
      importance: 'critical',
      description: 'Çevre sağlığı bilgisi'
    },
    naturalMedicine: {
      weight: 0.9,
      importance: 'critical',
      description: 'Doğal tedavi yöntemleri'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Araştırma metodolojisi'
    },
    preventiveCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Koruyucu hekimlik'
    },
    patientEducation: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta eğitimi'
    },
    riskAssessment: {
      weight: 0.8,
      importance: 'major',
      description: 'Çevresel risk değerlendirmesi'
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
      residency: 3
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 20000,
      max: 45000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'moderate',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISFJ', 'INTJ'],
    good: ['INFJ', 'ESTJ', 'ISTP'],
    challenging: ['ENFP', 'ESTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: false,
    research: true
  },
  subspecialties: [
    {
      name: 'Kaplıca Tıbbı',
      description: 'Termal su tedavileri',
      additionalTraining: 1
    },
    {
      name: 'Klimaterapi',
      description: 'İklim tedavileri',
      additionalTraining: 1
    },
    {
      name: 'Talassoterapi',
      description: 'Deniz tedavileri',
      additionalTraining: 1
    },
    {
      name: 'Çevresel Toksikoloji',
      description: 'Çevresel toksinlerin etkileri',
      additionalTraining: 2
    }
  ]
};
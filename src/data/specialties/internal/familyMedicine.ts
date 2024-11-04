import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const familyMedicine: Specialty = {
  id: 'aile-hekimligi',
  name: 'Aile Hekimliği',
  category: specialtyCategories.INTERNAL,
  description: 'Tüm yaş gruplarına birinci basamak sağlık hizmeti sunar. Koruyucu hekimlik, kronik hastalık takibi, aşılama, anne-çocuk sağlığı ve yaşlı bakımı gibi geniş bir yelpazede hizmet verir.',
  matchPercentage: 0,
  traits: {
    comprehensiveCare: {
      weight: 0.95,
      importance: 'critical',
      description: 'Kapsamlı hasta bakımı'
    },
    communication: {
      weight: 0.95,
      importance: 'critical',
      description: 'Aile ve toplum iletişimi'
    },
    preventiveCare: {
      weight: 0.9,
      importance: 'critical',
      description: 'Koruyucu hekimlik'
    },
    clinicalJudgment: {
      weight: 0.85,
      importance: 'major',
      description: 'Genel klinik değerlendirme'
    },
    continuity: {
      weight: 0.85,
      importance: 'major',
      description: 'Sürekli hasta takibi'
    },
    culturalAwareness: {
      weight: 0.8,
      importance: 'major',
      description: 'Kültürel duyarlılık'
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
      min: 22000,
      max: 45000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'extensive',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['ESFJ', 'ISFJ', 'ENFJ'],
    good: ['INFJ', 'ESTJ', 'ISTJ'],
    challenging: ['INTP', 'ISTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Geriatrik Bakım',
      description: 'Yaşlı sağlığı ve bakımı',
      additionalTraining: 1
    },
    {
      name: 'Spor Hekimliği',
      description: 'Sporcu sağlığı ve egzersiz tıbbı',
      additionalTraining: 2
    },
    {
      name: 'Palyatif Bakım',
      description: 'Yaşam sonu bakım hizmetleri',
      additionalTraining: 1
    },
    {
      name: 'İşyeri Hekimliği',
      description: 'İş sağlığı ve güvenliği',
      additionalTraining: 1
    },
    {
      name: 'Seyahat Tıbbı',
      description: 'Seyahat sağlığı ve aşılama',
      additionalTraining: 1
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const publicHealth: Specialty = {
  id: 'halk-sagligi',
  name: 'Halk Sağlığı',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Toplum sağlığının korunması ve geliştirilmesi, hastalıkların önlenmesi, epidemiyolojik araştırmalar ve sağlık politikalarının geliştirilmesi ile ilgilenir. Çevre sağlığı, bulaşıcı hastalık kontrolü ve sağlık eğitimi konularında çalışır.',
  matchPercentage: 0,
  traits: {
    epidemiology: {
      weight: 0.95,
      importance: 'critical',
      description: 'Epidemiyolojik düşünme ve analiz'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Araştırma metodolojisi'
    },
    communication: {
      weight: 0.9,
      importance: 'critical',
      description: 'Toplum iletişimi'
    },
    leadership: {
      weight: 0.85,
      importance: 'major',
      description: 'Program yönetimi'
    },
    dataAnalysis: {
      weight: 0.85,
      importance: 'major',
      description: 'İstatistiksel analiz'
    },
    policyMaking: {
      weight: 0.8,
      importance: 'major',
      description: 'Sağlık politikası geliştirme'
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
      residency: 4
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 20000,
      max: 45000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'minimal',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['INTJ', 'ENTJ', 'ISTJ'],
    good: ['ENFJ', 'INFJ', 'ESTJ'],
    challenging: ['ISFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: false,
    hospital: false,
    research: true
  },
  subspecialties: [
    {
      name: 'Epidemiyoloji',
      description: 'Hastalık dağılımı ve kontrolü',
      additionalTraining: 2
    },
    {
      name: 'Çevre Sağlığı',
      description: 'Çevresel risk faktörleri',
      additionalTraining: 2
    },
    {
      name: 'İş Sağlığı',
      description: 'Meslek hastalıkları ve iş güvenliği',
      additionalTraining: 2
    },
    {
      name: 'Sağlık Yönetimi',
      description: 'Sağlık sistemleri ve politikaları',
      additionalTraining: 2
    },
    {
      name: 'Toplum Beslenmesi',
      description: 'Toplumsal beslenme programları',
      additionalTraining: 1
    }
  ]
};
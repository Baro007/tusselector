import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const psychiatry: Specialty = {
  id: 'psikiyatri',
  name: 'Psikiyatri',
  category: specialtyCategories.INTERNAL,
  description: 'Ruhsal hastalıkların tanı ve tedavisi ile ilgilenir. Depresyon, anksiyete bozuklukları, şizofreni, bipolar bozukluk, kişilik bozuklukları ve diğer psikiyatrik durumların değerlendirme ve tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    empathy: {
      weight: 0.95,
      importance: 'critical',
      description: 'Yüksek empati yeteneği'
    },
    communication: {
      weight: 0.95,
      importance: 'critical',
      description: 'Etkili iletişim becerileri'
    },
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Analitik düşünme'
    },
    emotionalStability: {
      weight: 0.9,
      importance: 'critical',
      description: 'Duygusal denge'
    },
    patientManagement: {
      weight: 0.85,
      importance: 'major',
      description: 'Uzun süreli hasta takibi'
    },
    boundaryMaintenance: {
      weight: 0.85,
      importance: 'major',
      description: 'Profesyonel sınırları koruma'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
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
      min: 28000,
      max: 70000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'extensive',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['INFJ', 'ENFJ', 'INFP'],
    good: ['ISFJ', 'ENFP', 'INTJ'],
    challenging: ['ESTP', 'ISTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Çocuk ve Ergen Psikiyatrisi',
      description: 'Çocuk ve ergenlerde ruhsal hastalıklar',
      additionalTraining: 3
    },
    {
      name: 'Bağımlılık Psikiyatrisi',
      description: 'Madde bağımlılığı ve davranışsal bağımlılıklar',
      additionalTraining: 2
    },
    {
      name: 'Geropsikiyatri',
      description: 'Yaşlılarda ruhsal hastalıklar',
      additionalTraining: 2
    },
    {
      name: 'Konsültasyon-Liyezon Psikiyatrisi',
      description: 'Tıbbi hastalıklara eşlik eden psikiyatrik durumlar',
      additionalTraining: 2
    },
    {
      name: 'Adli Psikiyatri',
      description: 'Hukuki süreçlerde psikiyatrik değerlendirme',
      additionalTraining: 2
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const anesthesiology: Specialty = {
  id: 'anesteziyoloji-reanimasyon',
  name: 'Anesteziyoloji ve Reanimasyon',
  category: specialtyCategories.INTERNAL,
  description: 'Cerrahi işlemler sırasında anestezi uygulaması, yoğun bakım hasta takibi, ağrı tedavisi ve kritik hasta bakımı ile ilgilenir. Ameliyat öncesi değerlendirme, ameliyat sırası hasta takibi ve ameliyat sonrası bakım hizmetlerini yürütür.',
  matchPercentage: 0,
  traits: {
    quickDecision: {
      weight: 0.95,
      importance: 'critical',
      description: 'Hızlı karar verme yeteneği'
    },
    stressManagement: {
      weight: 0.95,
      importance: 'critical',
      description: 'Kriz yönetimi'
    },
    technicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'İleri teknik beceriler'
    },
    multitasking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Çoklu görev yönetimi'
    },
    teamwork: {
      weight: 0.85,
      importance: 'major',
      description: 'Ekip çalışması'
    },
    vigilance: {
      weight: 0.95,
      importance: 'critical',
      description: 'Sürekli dikkat ve uyanıklık'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'frequent',
    flexibility: 'low',
    averageHoursPerWeek: 60,
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
      min: 30000,
      max: 75000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'moderate',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISTP', 'ESTJ'],
    good: ['INTJ', 'ESTP', 'ENTJ'],
    challenging: ['ENFP', 'INFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Yoğun Bakım',
      description: 'Kritik hasta bakımı',
      additionalTraining: 2
    },
    {
      name: 'Algoloji',
      description: 'Ağrı tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Anestezi',
      description: 'Çocuk hastalar için anestezi',
      additionalTraining: 2
    },
    {
      name: 'Kardiyak Anestezi',
      description: 'Kalp cerrahisi anestezisi',
      additionalTraining: 2
    },
    {
      name: 'Rejyonel Anestezi',
      description: 'Bölgesel anestezi teknikleri',
      additionalTraining: 1
    }
  ]
};
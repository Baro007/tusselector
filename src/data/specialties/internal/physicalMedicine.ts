import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const physicalMedicine: Specialty = {
  id: 'fiziksel-tip-rehabilitasyon',
  name: 'Fiziksel Tıp ve Rehabilitasyon',
  category: specialtyCategories.INTERNAL,
  description: 'Kas-iskelet sistemi hastalıkları, nörolojik hastalıklar, ortopedik problemler ve kronik ağrı durumlarının tanı ve rehabilitasyonu ile ilgilenir. Fizik tedavi, egzersiz reçeteleme, ortez-protez uygulamaları ve ağrı yönetimi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    patientCare: {
      weight: 0.95,
      importance: 'critical',
      description: 'Uzun süreli hasta takibi ve rehabilitasyon'
    },
    physicalExamination: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylı fizik muayene becerisi'
    },
    communication: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hasta motivasyonu ve eğitimi'
    },
    procedureSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Enjeksiyon ve manuel terapi'
    },
    teamwork: {
      weight: 0.85,
      importance: 'major',
      description: 'Multidisipliner ekip yönetimi'
    },
    problemSolving: {
      weight: 0.8,
      importance: 'major',
      description: 'Fonksiyonel problem çözme'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'rare',
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
      min: 25000,
      max: 60000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'extensive',
    technologyUse: 'moderate'
  },
  mbtiPreferences: {
    perfect: ['ISFJ', 'ESFJ', 'ISTJ'],
    good: ['ENFJ', 'INFJ', 'ESTJ'],
    challenging: ['INTP', 'ENTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Pediatrik Rehabilitasyon',
      description: 'Çocuk rehabilitasyonu ve gelişimsel bozukluklar',
      additionalTraining: 2
    },
    {
      name: 'Nörorehabilitasyon',
      description: 'İnme ve omurilik yaralanmaları rehabilitasyonu',
      additionalTraining: 2
    },
    {
      name: 'Spor Hekimliği',
      description: 'Sporcu sağlığı ve rehabilitasyonu',
      additionalTraining: 2
    },
    {
      name: 'Geriatrik Rehabilitasyon',
      description: 'Yaşlı hasta rehabilitasyonu',
      additionalTraining: 1
    },
    {
      name: 'Ağrı Tedavisi',
      description: 'Kronik ağrı yönetimi',
      additionalTraining: 1
    },
    {
      name: 'Kardiyopulmoner Rehabilitasyon',
      description: 'Kalp ve akciğer hastalıkları rehabilitasyonu',
      additionalTraining: 1
    }
  ]
};
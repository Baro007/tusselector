import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const pediatrics: Specialty = {
  id: 'cocuk-sagligi-ve-hastaliklari',
  name: 'Çocuk Sağlığı ve Hastalıkları',
  category: specialtyCategories.INTERNAL,
  description: 'Doğumdan ergenlik dönemine kadar çocukların sağlığı, gelişimi ve hastalıklarının tanı ve tedavisi ile ilgilenir. Büyüme-gelişme takibi, aşılama, akut ve kronik hastalıkların yönetimi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    patientCare: {
      weight: 0.95,
      importance: 'critical',
      description: 'Çocuk hasta yönetimi'
    },
    communication: {
      weight: 0.95,
      importance: 'critical',
      description: 'Aile ve çocukla iletişim'
    },
    developmentalKnowledge: {
      weight: 0.9,
      importance: 'critical',
      description: 'Gelişimsel değerlendirme'
    },
    clinicalJudgment: {
      weight: 0.9,
      importance: 'critical',
      description: 'Yaşa özgü klinik değerlendirme'
    },
    emotionalStability: {
      weight: 0.85,
      importance: 'major',
      description: 'Duygusal dayanıklılık'
    },
    preventiveCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Koruyucu pediatri'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'frequent',
    flexibility: 'low',
    averageHoursPerWeek: 55,
    weekendWork: true
  },
  careerPath: {
    duration: {
      residency: 4,
      fellowship: 3
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 28000,
      max: 65000
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
    perfect: ['ISFJ', 'ESFJ', 'ENFJ'],
    good: ['INFJ', 'ENFP', 'ISTJ'],
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
      name: 'Pediatrik Kardiyoloji',
      description: 'Çocukluk çağı kalp hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Neonatoloji',
      description: 'Yenidoğan yoğun bakım',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Endokrinoloji',
      description: 'Çocukluk çağı hormon hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Hematoloji-Onkoloji',
      description: 'Çocukluk çağı kan hastalıkları ve kanserleri',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Gastroenteroloji',
      description: 'Çocukluk çağı sindirim sistemi hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Nöroloji',
      description: 'Çocukluk çağı sinir sistemi hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Allerji-İmmünoloji',
      description: 'Çocukluk çağı alerji ve bağışıklık sistemi hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Nefroloji',
      description: 'Çocukluk çağı böbrek hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Pediatrik Enfeksiyon Hastalıkları',
      description: 'Çocukluk çağı enfeksiyon hastalıkları',
      additionalTraining: 3
    }
  ]
};
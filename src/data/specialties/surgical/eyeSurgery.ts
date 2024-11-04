import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const eyeSurgery: Specialty = {
  id: 'goz-hastaliklari',
  name: 'Göz Hastalıkları',
  category: specialtyCategories.SURGICAL,
  description: 'Göz ve görme sistemi hastalıklarının tanı ve tedavisi ile ilgilenir. Katarakt, glokom, retina hastalıkları, şaşılık, kornea hastalıkları ve göz travmalarının medikal ve cerrahi tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    microsurgicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikrocerrahi hassasiyeti'
    },
    visualAcuity: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mükemmel görme keskinliği'
    },
    handSteadiness: {
      weight: 0.95,
      importance: 'critical',
      description: 'El titremesizliği'
    },
    patientCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta bakım ve takibi'
    },
    technicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'İleri teknoloji kullanımı'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
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
      min: 30000,
      max: 80000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISFJ', 'INTJ'],
    good: ['ISTP', 'INFJ', 'ESTJ'],
    challenging: ['ENFP', 'ESTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Retina',
      description: 'Retina hastalıkları ve vitreoretinal cerrahi',
      additionalTraining: 2
    },
    {
      name: 'Kornea ve Refraktif Cerrahi',
      description: 'Kornea hastalıkları ve görme kusuru cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Glokom',
      description: 'Göz tansiyonu hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Oftalmoloji',
      description: 'Çocuk göz hastalıkları ve şaşılık',
      additionalTraining: 2
    },
    {
      name: 'Okuloplastik Cerrahi',
      description: 'Göz kapağı ve orbita cerrahisi',
      additionalTraining: 1
    },
    {
      name: 'Nörooftalmoloji',
      description: 'Görme siniri ve beyin kaynaklı göz hastalıkları',
      additionalTraining: 1
    }
  ]
};
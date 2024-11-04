import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const orthopedicSurgery: Specialty = {
  id: 'ortopedi-ve-travmatoloji',
  name: 'Ortopedi ve Travmatoloji',
  category: specialtyCategories.SURGICAL,
  description: 'Kas-iskelet sisteminin doğumsal ve edinsel hastalıkları, travmaları ve deformitelerinin tanı ve tedavisi ile ilgilenir. Kırıklar, eklem hastalıkları, spor yaralanmaları ve omurga problemlerinin cerrahi ve cerrahi dışı tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Güçlü cerrahi beceriler'
    },
    physicalStrength: {
      weight: 0.85,
      importance: 'major',
      description: 'Fiziksel güç ve dayanıklılık'
    },
    spatialAwareness: {
      weight: 0.9,
      importance: 'critical',
      description: '3 boyutlu düşünme yeteneği'
    },
    mechanicalAptitude: {
      weight: 0.85,
      importance: 'major',
      description: 'Mekanik düşünme yeteneği'
    },
    problemSolving: {
      weight: 0.85,
      importance: 'major',
      description: 'Karmaşık problemleri çözme'
    },
    technicalSkills: {
      weight: 0.8,
      importance: 'major',
      description: 'İmplant ve enstrüman kullanımı'
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
      min: 35000,
      max: 90000
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
    good: ['ESTP', 'ENTJ', 'INTJ'],
    challenging: ['INFP', 'ENFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Artroplasti',
      description: 'Eklem protez cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Spor Cerrahisi',
      description: 'Spor yaralanmalarının tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Omurga Cerrahisi',
      description: 'Omurga hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Ortopedi',
      description: 'Çocuk kas-iskelet sistemi hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'El Cerrahisi',
      description: 'El ve üst ekstremite cerrahisi',
      additionalTraining: 1
    },
    {
      name: 'Travma',
      description: 'Karmaşık kırık ve yaralanmaların tedavisi',
      additionalTraining: 1
    }
  ]
};
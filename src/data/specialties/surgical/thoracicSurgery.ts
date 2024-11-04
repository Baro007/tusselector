import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const thoracicSurgery: Specialty = {
  id: 'gogus-cerrahisi',
  name: 'Göğüs Cerrahisi',
  category: specialtyCategories.SURGICAL,
  description: 'Akciğerler, göğüs duvarı, mediasten ve özofagus hastalıklarının cerrahi tedavisi ile ilgilenir. Akciğer kanseri, pnömotoraks, göğüs duvarı deformiteleri ve özofagus hastalıklarının cerrahi tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'İleri cerrahi beceriler'
    },
    anatomicalKnowledge: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylı anatomi bilgisi'
    },
    technicalAbility: {
      weight: 0.85,
      importance: 'major',
      description: 'Minimal invaziv cerrahi becerileri'
    },
    decisionMaking: {
      weight: 0.85,
      importance: 'major',
      description: 'Klinik karar verme'
    },
    patientCare: {
      weight: 0.8,
      importance: 'major',
      description: 'Perioperatif hasta bakımı'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 55,
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
      max: 65000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'moderate',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISTP', 'ESTJ'],
    good: ['INTJ', 'ENTJ', 'ESTP'],
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
      name: 'Torasik Onkoloji',
      description: 'Göğüs kafesi tümörlerinin cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Minimal İnvaziv Göğüs Cerrahisi',
      description: 'VATS ve robotik cerrahi',
      additionalTraining: 2
    },
    {
      name: 'Özofagus Cerrahisi',
      description: 'Yemek borusu hastalıklarının cerrahi tedavisi',
      additionalTraining: 1
    }
  ]
};
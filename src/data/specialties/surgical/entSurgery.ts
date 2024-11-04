import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const entSurgery: Specialty = {
  id: 'kulak-burun-bogaz',
  name: 'Kulak Burun Boğaz',
  category: specialtyCategories.SURGICAL,
  description: 'Baş ve boyun bölgesinin cerrahi ve medikal tedavisi ile ilgilenir. İşitme ve denge bozuklukları, sinüs hastalıkları, ses ve yutma problemleri, baş-boyun tümörleri ve kulak-burun-boğaz enfeksiyonlarının tanı ve tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    microsurgicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikrocerrahi becerileri'
    },
    handEyeCoordination: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hassas el-göz koordinasyonu'
    },
    spatialAwareness: {
      weight: 0.85,
      importance: 'major',
      description: 'Karmaşık anatomi bilgisi'
    },
    diagnosticAbility: {
      weight: 0.85,
      importance: 'major',
      description: 'Tanısal yetenek'
    },
    patientCommunication: {
      weight: 0.8,
      importance: 'major',
      description: 'Hasta iletişimi'
    },
    technicalSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Endoskopik cerrahi becerileri'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 50,
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
      min: 28000,
      max: 70000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISFJ', 'ISTP'],
    good: ['ESTJ', 'INTJ', 'ENTJ'],
    challenging: ['ENFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Otoloji',
      description: 'Kulak hastalıkları ve işitme bozuklukları',
      additionalTraining: 2
    },
    {
      name: 'Rinoloji',
      description: 'Burun ve sinüs hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Baş ve Boyun Cerrahisi',
      description: 'Baş-boyun tümörleri ve rekonstrüktif cerrahi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik KBB',
      description: 'Çocuk KBB hastalıkları',
      additionalTraining: 1
    },
    {
      name: 'Larengoloji',
      description: 'Ses ve yutma bozuklukları',
      additionalTraining: 1
    }
  ]
};
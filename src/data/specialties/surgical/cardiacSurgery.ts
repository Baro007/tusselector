import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const cardiacSurgery: Specialty = {
  id: 'kalp-ve-damar-cerrahisi',
  name: 'Kalp ve Damar Cerrahisi',
  category: specialtyCategories.SURGICAL,
  description: 'Kalp, büyük damarlar ve periferik damar sisteminin cerrahi tedavisi ile ilgilenir. Koroner bypass, kalp kapak ameliyatları, aort cerrahisi ve periferik damar hastalıklarının tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Üst düzey mikrocerrahi beceri'
    },
    stressManagement: {
      weight: 0.95,
      importance: 'critical',
      description: 'Yüksek stres altında çalışabilme'
    },
    precision: {
      weight: 0.95,
      importance: 'critical',
      description: 'Milimetrik hassasiyet'
    },
    stamina: {
      weight: 0.9,
      importance: 'critical',
      description: 'Uzun ameliyatlarda fiziksel dayanıklılık'
    },
    quickThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hızlı karar verme yeteneği'
    },
    teamLeadership: {
      weight: 0.85,
      importance: 'major',
      description: 'Ekip liderliği'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'frequent',
    flexibility: 'low',
    averageHoursPerWeek: 70,
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
      max: 85000
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
    perfect: ['ISTJ', 'INTJ', 'ESTJ'],
    good: ['ENTJ', 'ISTP', 'INTP'],
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
      name: 'Pediatrik Kalp Cerrahisi',
      description: 'Doğumsal kalp hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Minimal İnvaziv Kalp Cerrahisi',
      description: 'Küçük kesilerle yapılan kalp ameliyatları',
      additionalTraining: 2
    },
    {
      name: 'Aort Cerrahisi',
      description: 'Aort hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Periferik Vasküler Cerrahi',
      description: 'Periferik damar hastalıklarının cerrahi tedavisi',
      additionalTraining: 1
    }
  ]
};
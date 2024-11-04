import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const brainSurgery: Specialty = {
  id: 'beyin-ve-sinir-cerrahisi',
  name: 'Beyin ve Sinir Cerrahisi',
  category: specialtyCategories.SURGICAL,
  description: 'Merkezi ve periferik sinir sistemi hastalıklarının cerrahi tedavisi ile ilgilenir. Beyin tümörleri, omurga hastalıkları, travmatik beyin yaralanmaları, serebrovasküler hastalıklar ve doğumsal anomalilerin cerrahi tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Üst düzey mikrocerrahi beceri'
    },
    handEyeCoordination: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mükemmel el-göz koordinasyonu'
    },
    stressManagement: {
      weight: 0.9,
      importance: 'critical',
      description: 'Yüksek stres altında çalışabilme'
    },
    decisionMaking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Kritik karar verme yeteneği'
    },
    attention: {
      weight: 0.95,
      importance: 'critical',
      description: 'Detaylara üst düzey dikkat'
    },
    spatialAwareness: {
      weight: 0.9,
      importance: 'critical',
      description: '3 boyutlu düşünme yeteneği'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'frequent',
    flexibility: 'low',
    averageHoursPerWeek: 65,
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
      max: 80000
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
    perfect: ['ISTJ', 'INTJ', 'ISTP'],
    good: ['ESTJ', 'ENTJ', 'INTP'],
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
      name: 'Pediatrik Nöroşirürji',
      description: 'Çocuklarda görülen beyin ve sinir sistemi hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Spinal Cerrahi',
      description: 'Omurga ve omurilik hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Nöroonkoloji',
      description: 'Beyin ve sinir sistemi tümörlerinin cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Vasküler Nöroşirürji',
      description: 'Beyin damar hastalıklarının cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Fonksiyonel Nöroşirürji',
      description: 'Epilepsi, hareket bozuklukları ve ağrı tedavisi',
      additionalTraining: 2
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const childPsychiatry: Specialty = {
  id: 'cocuk-ve-ergen-ruh-sagligi',
  name: 'Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları',
  category: specialtyCategories.INTERNAL,
  description: 'Çocuk ve ergenlerde görülen ruhsal ve davranışsal bozuklukların tanı ve tedavisi ile ilgilenir. Otizm, DEHB, anksiyete, depresyon, davranış bozuklukları ve gelişimsel sorunların değerlendirme ve tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    childCommunication: {
      weight: 0.95,
      importance: 'critical',
      description: 'Çocuk ve ergenlerle iletişim'
    },
    familyDynamics: {
      weight: 0.9,
      importance: 'critical',
      description: 'Aile dinamiklerini anlama'
    },
    developmentalKnowledge: {
      weight: 0.9,
      importance: 'critical',
      description: 'Gelişimsel psikoloji bilgisi'
    },
    patience: {
      weight: 0.9,
      importance: 'critical',
      description: 'Sabır ve empati'
    },
    diagnosticSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Psikiyatrik değerlendirme'
    },
    therapeuticSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Terapi becerileri'
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
    perfect: ['INFJ', 'ENFJ', 'ISFJ'],
    good: ['INFP', 'ENFP', 'ESFJ'],
    challenging: ['ISTJ', 'ESTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Nörogelişimsel Bozukluklar',
      description: 'Otizm spektrum bozukluğu ve DEHB',
      additionalTraining: 2
    },
    {
      name: 'Ergen Psikiyatrisi',
      description: 'Ergenlik dönemi ruhsal sorunları',
      additionalTraining: 1
    },
    {
      name: 'Bebek Ruh Sağlığı',
      description: 'Bebeklik dönemi ruhsal gelişimi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Konsültasyon-Liyezon',
      description: 'Kronik hastalıklarda psikiyatrik destek',
      additionalTraining: 1
    },
    {
      name: 'Travma ve İlişkili Bozukluklar',
      description: 'Çocukluk çağı travmaları',
      additionalTraining: 1
    }
  ]
};
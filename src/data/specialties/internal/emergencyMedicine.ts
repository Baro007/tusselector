import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const emergencyMedicine: Specialty = {
  id: 'acil-tip',
  name: 'Acil Tıp',
  category: specialtyCategories.INTERNAL,
  description: 'Hızlı tempolu, yüksek stresli ortamda akut bakım ve hızlı karar verme gerektirir. Travmatik yaralanmalar, kalp krizi, inme gibi acil durumlarla ilgilenir.',
  matchPercentage: 0,
  traits: {
    decisionMaking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Hızlı ve doğru karar verme'
    },
    stressManagement: {
      weight: 0.95,
      importance: 'critical',
      description: 'Yüksek stres altında çalışabilme'
    },
    manualSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Pratik beceriler'
    },
    communication: {
      weight: 0.8,
      importance: 'major',
      description: 'Etkili iletişim'
    },
    teamwork: {
      weight: 0.9,
      importance: 'critical',
      description: 'Ekip çalışması'
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
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 25000,
      max: 45000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ESTJ', 'ESTP', 'ENTJ'],
    good: ['ISTJ', 'ISTP', 'ENTP'],
    challenging: ['INFP', 'ISFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Travma',
      description: 'Ağır yaralanmaların yönetimi',
      additionalTraining: 2
    },
    {
      name: 'Toksikoloji',
      description: 'Zehirlenme vakalarının yönetimi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Acil',
      description: 'Çocuk acil vakalarının yönetimi',
      additionalTraining: 2
    }
  ]
};
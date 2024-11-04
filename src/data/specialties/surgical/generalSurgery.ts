import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const generalSurgery: Specialty = {
  id: 'genel-cerrahi',
  name: 'Genel Cerrahi',
  category: specialtyCategories.SURGICAL,
  description: 'Karın içi organlar, meme, tiroid ve diğer yumuşak doku hastalıklarının cerrahi tedavisi ile ilgilenir. Minimal invaziv tekniklerden açık cerrahiye kadar geniş bir yelpazede ameliyatlar gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Temel ve ileri cerrahi beceriler'
    },
    adaptability: {
      weight: 0.85,
      importance: 'major',
      description: 'Farklı cerrahi tekniklere adaptasyon'
    },
    decisionMaking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hızlı ve doğru karar verme'
    },
    teamwork: {
      weight: 0.8,
      importance: 'major',
      description: 'Ekip çalışması'
    },
    physicalStamina: {
      weight: 0.85,
      importance: 'major',
      description: 'Fiziksel dayanıklılık'
    },
    technicalSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Laparoskopik ve robotik cerrahi becerileri'
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
      min: 30000,
      max: 70000
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
    perfect: ['ISTJ', 'ESTJ', 'ENTJ'],
    good: ['INTJ', 'ISTP', 'ESTP'],
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
      name: 'Cerrahi Onkoloji',
      description: 'Kanser cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Minimal İnvaziv Cerrahi',
      description: 'Laparoskopik ve robotik cerrahi',
      additionalTraining: 2
    },
    {
      name: 'Hepatopankreatobilier Cerrahi',
      description: 'Karaciğer, pankreas ve safra yolları cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Kolorektal Cerrahi',
      description: 'Kalın bağırsak ve rektum cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Meme Cerrahisi',
      description: 'Meme hastalıkları cerrahisi',
      additionalTraining: 1
    }
  ]
};
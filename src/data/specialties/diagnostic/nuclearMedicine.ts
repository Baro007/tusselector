import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const nuclearMedicine: Specialty = {
  id: 'nukleer-tip',
  name: 'Nükleer Tıp',
  category: specialtyCategories.DIAGNOSTIC,
  description: 'Radyoaktif maddeler kullanarak hastalıkların tanı ve tedavisi ile ilgilenir. PET/CT görüntüleme, tiroid hastalıkları tedavisi ve moleküler görüntüleme konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    technicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'İleri görüntüleme teknolojisi kullanımı'
    },
    radiationSafety: {
      weight: 0.95,
      importance: 'critical',
      description: 'Radyasyon güvenliği'
    },
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Görüntü yorumlama ve analiz'
    },
    patientCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta takibi ve tedavi yönetimi'
    },
    research: {
      weight: 0.85,
      importance: 'major',
      description: 'Araştırma ve geliştirme'
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
      min: 25000,
      max: 60000
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
    good: ['INTP', 'ESTJ', 'ENTJ'],
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
      name: 'PET/CT Görüntüleme',
      description: 'Kanser tanı ve takibi',
      additionalTraining: 2
    },
    {
      name: 'Tiroid Hastalıkları',
      description: 'Tiroid kanseri ve hipertiroidi tedavisi',
      additionalTraining: 1
    },
    {
      name: 'Kardiyak Görüntüleme',
      description: 'Kalp perfüzyon çalışmaları',
      additionalTraining: 1
    },
    {
      name: 'Pediatrik Nükleer Tıp',
      description: 'Çocuklarda nükleer tıp uygulamaları',
      additionalTraining: 2
    }
  ]
};
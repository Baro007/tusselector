import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const radiationOncology: Specialty = {
  id: 'radyasyon-onkolojisi',
  name: 'Radyasyon Onkolojisi',
  category: specialtyCategories.DIAGNOSTIC,
  description: 'Kanser tedavisinde radyoterapi uygulamaları ile ilgilenir. Tümör hedefleme, tedavi planlaması ve yan etki yönetimi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    technicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Radyoterapi teknolojisi kullanımı'
    },
    patientCare: {
      weight: 0.9,
      importance: 'critical',
      description: 'Kanser hasta bakımı'
    },
    precision: {
      weight: 0.95,
      importance: 'critical',
      description: 'Hassas tedavi planlama'
    },
    teamwork: {
      weight: 0.85,
      importance: 'major',
      description: 'Multidisipliner ekip çalışması'
    },
    research: {
      weight: 0.8,
      importance: 'major',
      description: 'Klinik araştırmalar'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'rare',
    flexibility: 'moderate',
    averageHoursPerWeek: 45,
    weekendWork: false
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
      max: 65000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'large',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'ISFJ'],
    good: ['ESTJ', 'ENTJ', 'INFJ'],
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
      name: 'Stereotaktik Radyocerrahi',
      description: 'Hassas tümör tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Radyasyon Onkolojisi',
      description: 'Çocukluk çağı kanserleri',
      additionalTraining: 2
    },
    {
      name: 'Brakiterapi',
      description: 'İnternal radyoterapi',
      additionalTraining: 1
    },
    {
      name: 'Proton Tedavisi',
      description: 'İleri radyoterapi teknikleri',
      additionalTraining: 2
    }
  ]
};
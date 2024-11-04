import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const physiology: Specialty = {
  id: 'fizyoloji',
  name: 'Fizyoloji',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'İnsan vücudundaki sistemlerin normal işleyişini, hücresel mekanizmaları ve organ sistemleri arasındaki etkileşimleri inceler. Hastalık mekanizmalarının anlaşılması ve tedavi yaklaşımlarının geliştirilmesi için temel oluşturur.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Analitik düşünme yeteneği'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Araştırma metodolojisi'
    },
    teaching: {
      weight: 0.9,
      importance: 'critical',
      description: 'Eğitim ve öğretim'
    },
    labSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Laboratuvar becerileri'
    },
    dataAnalysis: {
      weight: 0.85,
      importance: 'major',
      description: 'Veri analizi ve yorumlama'
    },
    scientificWriting: {
      weight: 0.8,
      importance: 'major',
      description: 'Bilimsel yazım'
    }
  },
  workLifeBalance: {
    workload: 'light',
    nightShifts: 'rare',
    flexibility: 'high',
    averageHoursPerWeek: 40,
    weekendWork: false
  },
  careerPath: {
    duration: {
      residency: 4
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 20000,
      max: 40000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'minimal',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['INTJ', 'INTP', 'ISTJ'],
    good: ['INFJ', 'ISTP', 'ENTJ'],
    challenging: ['ESFP', 'ENFP']
  },
  careerOpportunities: {
    academic: true,
    private: false,
    hospital: false,
    research: true
  },
  subspecialties: [
    {
      name: 'Nörofizyoloji',
      description: 'Sinir sistemi fizyolojisi',
      additionalTraining: 2
    },
    {
      name: 'Kardiyovasküler Fizyoloji',
      description: 'Kalp ve damar sistemi fizyolojisi',
      additionalTraining: 2
    },
    {
      name: 'Endokrin Fizyoloji',
      description: 'Hormon sistemleri fizyolojisi',
      additionalTraining: 2
    },
    {
      name: 'Hücresel Fizyoloji',
      description: 'Hücre düzeyinde fizyolojik mekanizmalar',
      additionalTraining: 2
    }
  ]
};
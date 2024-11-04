import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalMicrobiology: Specialty = {
  id: 'tibbi-mikrobiyoloji',
  name: 'Tıbbi Mikrobiyoloji',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'Enfeksiyon hastalıklarına neden olan mikroorganizmaları inceler, tanı testlerini yönetir ve antimikrobiyal tedavi stratejilerinin geliştirilmesine katkıda bulunur. Bakteriyoloji, viroloji, mikoloji ve parazitoloji alanlarında laboratuvar hizmetleri sunar.',
  matchPercentage: 0,
  traits: {
    labSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikrobiyolojik laboratuvar teknikleri'
    },
    analyticalThinking: {
      weight: 0.9,
      importance: 'critical',
      description: 'Analitik düşünme ve problem çözme'
    },
    qualityControl: {
      weight: 0.9,
      importance: 'critical',
      description: 'Laboratuvar kalite kontrolü'
    },
    research: {
      weight: 0.85,
      importance: 'major',
      description: 'Araştırma ve geliştirme'
    },
    infectionControl: {
      weight: 0.85,
      importance: 'major',
      description: 'Enfeksiyon kontrol prensipleri'
    },
    consultation: {
      weight: 0.8,
      importance: 'major',
      description: 'Klinik konsültasyon becerileri'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 45,
    weekendWork: true
  },
  careerPath: {
    duration: {
      residency: 4
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 22000,
      max: 45000
    },
    privatePracticeOpportunity: false,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'medium',
    patientInteraction: 'minimal',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'INTP'],
    good: ['ISFJ', 'ESTJ', 'ISTP'],
    challenging: ['ENFP', 'ESFP']
  },
  careerOpportunities: {
    academic: true,
    private: false,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Klinik Bakteriyoloji',
      description: 'Bakteriyel enfeksiyonların tanısı',
      additionalTraining: 2
    },
    {
      name: 'Viroloji',
      description: 'Viral hastalıkların tanısı',
      additionalTraining: 2
    },
    {
      name: 'Mikoloji',
      description: 'Mantar enfeksiyonlarının tanısı',
      additionalTraining: 1
    },
    {
      name: 'Parazitoloji',
      description: 'Paraziter hastalıkların tanısı',
      additionalTraining: 1
    },
    {
      name: 'Moleküler Mikrobiyoloji',
      description: 'Moleküler tanı yöntemleri',
      additionalTraining: 2
    },
    {
      name: 'Hastane Enfeksiyonları',
      description: 'Nozokomiyal enfeksiyon kontrolü',
      additionalTraining: 1
    }
  ]
};
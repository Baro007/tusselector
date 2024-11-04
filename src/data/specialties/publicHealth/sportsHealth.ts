import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const sportsHealth: Specialty = {
  id: 'spor-hekimligi',
  name: 'Spor Hekimliği',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Sporcuların sağlığının korunması, performans değerlendirmesi, spor yaralanmalarının önlenmesi ve tedavisi ile ilgilenir. Egzersiz fizyolojisi, spor beslenmesi ve rehabilitasyon konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    sportsKnowledge: {
      weight: 0.95,
      importance: 'critical',
      description: 'Spor bilimi ve fizyolojisi'
    },
    clinicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Klinik değerlendirme'
    },
    rehabilitation: {
      weight: 0.9,
      importance: 'critical',
      description: 'Rehabilitasyon yönetimi'
    },
    preventiveCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Yaralanma önleme'
    },
    teamwork: {
      weight: 0.85,
      importance: 'major',
      description: 'Spor ekibi ile çalışma'
    },
    emergencyResponse: {
      weight: 0.8,
      importance: 'major',
      description: 'Acil durum yönetimi'
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
      min: 25000,
      max: 60000
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
    perfect: ['ESTJ', 'ISTJ', 'ESTP'],
    good: ['ENTJ', 'ISTP', 'ENFJ'],
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
      name: 'Performans Tıbbı',
      description: 'Sporcu performans değerlendirmesi',
      additionalTraining: 2
    },
    {
      name: 'Spor Travmatolojisi',
      description: 'Spor yaralanmaları tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Spor Kardiyolojisi',
      description: 'Sporcu kalp sağlığı',
      additionalTraining: 2
    },
    {
      name: 'Spor Beslenmesi',
      description: 'Sporcu beslenmesi ve ergojenik destekler',
      additionalTraining: 1
    }
  ]
};
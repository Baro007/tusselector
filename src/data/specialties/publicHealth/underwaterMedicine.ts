import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const underwaterMedicine: Specialty = {
  id: 'sualti-hekimligi',
  name: 'Sualtı Hekimliği ve Hiperbarik Tıp',
  category: specialtyCategories.PUBLIC_HEALTH,
  description: 'Dalış tıbbı, hiperbarik oksijen tedavisi ve basınç ile ilişkili hastalıkların tanı ve tedavisi ile ilgilenir. Dalgıç sağlığı, dekompresyon hastalığı ve yara iyileşmesi konularında uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    technicalKnowledge: {
      weight: 0.95,
      importance: 'critical',
      description: 'Basınç fizyolojisi ve ekipman'
    },
    emergencyMedicine: {
      weight: 0.9,
      importance: 'critical',
      description: 'Acil durum yönetimi'
    },
    clinicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Klinik değerlendirme'
    },
    riskAssessment: {
      weight: 0.85,
      importance: 'major',
      description: 'Risk değerlendirmesi'
    },
    procedureSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Hiperbarik tedavi yönetimi'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 40,
    weekendWork: true
  },
  careerPath: {
    duration: {
      residency: 3
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 25000,
      max: 55000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'moderate',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISTP', 'ESTJ'],
    good: ['ESTP', 'INTJ', 'ENTJ'],
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
      name: 'Dalış Tıbbı',
      description: 'Profesyonel dalış sağlığı',
      additionalTraining: 1
    },
    {
      name: 'Yara İyileşmesi',
      description: 'Kronik yara tedavisi',
      additionalTraining: 1
    },
    {
      name: 'Hiperbarik Onkoloji',
      description: 'Radyasyon nekrozu tedavisi',
      additionalTraining: 1
    }
  ]
};
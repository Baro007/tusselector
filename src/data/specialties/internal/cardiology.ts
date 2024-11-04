import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const cardiology: Specialty = {
  id: 'kardiyoloji',
  name: 'Kardiyoloji',
  category: specialtyCategories.INTERNAL,
  description: 'Kalp ve damar hastalıklarının tanı ve tedavisi ile ilgilenir. Koroner arter hastalığı, kalp yetmezliği, ritim bozuklukları, hipertansiyon gibi kardiyovasküler sistem hastalıklarının tanı, tedavi ve takibini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    clinicalJudgment: {
      weight: 0.95,
      importance: 'critical',
      description: 'Kritik klinik karar verme'
    },
    technicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Girişimsel işlem becerileri'
    },
    stressManagement: {
      weight: 0.9,
      importance: 'critical',
      description: 'Acil durum yönetimi'
    },
    patientCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Kronik hasta takibi'
    },
    interpretationSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'EKG ve görüntüleme yorumlama'
    },
    procedureSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Kateterizasyon becerileri'
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
      residency: 4,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 30000,
      max: 80000
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
    perfect: ['ISTJ', 'ESTJ', 'INTJ'],
    good: ['ENTJ', 'ISFJ', 'ISTP'],
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
      name: 'Girişimsel Kardiyoloji',
      description: 'Koroner anjiyografi ve stent işlemleri',
      additionalTraining: 2
    },
    {
      name: 'Elektrofizyoloji',
      description: 'Ritim bozuklukları ve pacemaker tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Ekokardiyografi',
      description: 'İleri kardiyak görüntüleme',
      additionalTraining: 1
    },
    {
      name: 'Kalp Yetmezliği',
      description: 'İleri kalp yetmezliği tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Preventif Kardiyoloji',
      description: 'Kardiyovasküler hastalık önleme',
      additionalTraining: 1
    }
  ]
};
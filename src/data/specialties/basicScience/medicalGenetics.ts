import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const medicalGenetics: Specialty = {
  id: 'tibbi-genetik',
  name: 'Tıbbi Genetik',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'Genetik hastalıkların tanı, tedavi ve önlenmesi ile ilgilenir. Kromozom analizi, genetik testler, genetik danışmanlık ve doğum öncesi tanı hizmetleri sunar.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Karmaşık genetik verileri analiz etme'
    },
    communication: {
      weight: 0.9,
      importance: 'critical',
      description: 'Genetik danışmanlık becerileri'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Bilimsel araştırma yeteneği'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    labSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Laboratuvar teknikleri'
    },
    empathy: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta ve aile iletişimi'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'rare',
    flexibility: 'high',
    averageHoursPerWeek: 40,
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
    perfect: ['INTJ', 'INTP', 'ISTJ'],
    good: ['INFJ', 'ENTJ', 'ENTP'],
    challenging: ['ESFP', 'ENFP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Klinik Genetik',
      description: 'Genetik hastalıkların tanı ve yönetimi',
      additionalTraining: 2
    },
    {
      name: 'Sitogenetik',
      description: 'Kromozom analizi ve anomalileri',
      additionalTraining: 2
    },
    {
      name: 'Moleküler Genetik',
      description: 'DNA/RNA düzeyinde genetik analiz',
      additionalTraining: 2
    },
    {
      name: 'Prenatal Genetik',
      description: 'Doğum öncesi genetik tanı',
      additionalTraining: 2
    },
    {
      name: 'Kanser Genetiği',
      description: 'Kalıtsal kanser sendromları',
      additionalTraining: 2
    }
  ]
};
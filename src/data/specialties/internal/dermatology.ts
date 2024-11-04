import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const dermatology: Specialty = {
  id: 'dermatoloji',
  name: 'Dermatoloji',
  category: specialtyCategories.INTERNAL,
  description: 'Deri, tırnak, saç ve mukoza hastalıklarının tanı ve tedavisi ile ilgilenir. Akne, egzama, sedef hastalığı, deri kanserleri, alerjik reaksiyonlar ve kozmetik dermatoloji alanlarında hizmet verir.',
  matchPercentage: 0,
  traits: {
    visualDiagnosis: {
      weight: 0.95,
      importance: 'critical',
      description: 'Görsel tanı koyma yeteneği'
    },
    procedureSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Dermatolojik işlem becerileri'
    },
    patientCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta bakımı ve takibi'
    },
    aestheticSense: {
      weight: 0.8,
      importance: 'major',
      description: 'Estetik algı'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    technicalSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Lazer ve diğer cihaz kullanımı'
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
      min: 30000,
      max: 90000
    },
    privatePracticeOpportunity: true,
    academicPotential: true
  },
  workEnvironment: {
    teamSize: 'small',
    patientInteraction: 'extensive',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'ISFJ', 'ISTP'],
    good: ['ESTJ', 'ESFJ', 'INTJ'],
    challenging: ['ENFP', 'ENTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Kozmetik Dermatoloji',
      description: 'Estetik işlemler ve anti-aging tedaviler',
      additionalTraining: 1
    },
    {
      name: 'Dermatolojik Cerrahi',
      description: 'Deri tümörleri ve rekonstrüktif işlemler',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Dermatoloji',
      description: 'Çocuk deri hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Fototerapi ve Lazer',
      description: 'Işık ve lazer tedavileri',
      additionalTraining: 1
    },
    {
      name: 'Dermatolojik Onkoloji',
      description: 'Deri kanserleri tedavisi',
      additionalTraining: 2
    }
  ]
};
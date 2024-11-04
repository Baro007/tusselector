import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const pulmonology: Specialty = {
  id: 'gogus-hastaliklari',
  name: 'Göğüs Hastalıkları',
  category: specialtyCategories.INTERNAL,
  description: 'Akciğer ve solunum yolu hastalıklarının tanı ve tedavisi ile ilgilenir. Astım, KOAH, akciğer kanseri, tüberküloz, interstisyel akciğer hastalıkları ve uyku bozukluklarının tanı, tedavi ve takibini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    clinicalJudgment: {
      weight: 0.9,
      importance: 'critical',
      description: 'Klinik değerlendirme'
    },
    procedureSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Bronkoskopi becerileri'
    },
    patientCare: {
      weight: 0.9,
      importance: 'critical',
      description: 'Kronik hasta yönetimi'
    },
    diagnosticAbility: {
      weight: 0.85,
      importance: 'major',
      description: 'Görüntüleme yorumlama'
    },
    communication: {
      weight: 0.8,
      importance: 'major',
      description: 'Hasta eğitimi ve iletişim'
    },
    researchAptitude: {
      weight: 0.75,
      importance: 'minor',
      description: 'Klinik araştırma'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 50,
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
    perfect: ['ISTJ', 'ISFJ', 'ESTJ'],
    good: ['ESFJ', 'INTJ', 'INFJ'],
    challenging: ['ENTP', 'ESTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Yoğun Bakım',
      description: 'Kritik solunum yetmezliği tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Girişimsel Pulmonoloji',
      description: 'İleri bronkoskopik işlemler',
      additionalTraining: 2
    },
    {
      name: 'Uyku Tıbbı',
      description: 'Uyku bozuklukları tanı ve tedavisi',
      additionalTraining: 1
    },
    {
      name: 'İnterstisyel Akciğer Hastalıkları',
      description: 'Nadir akciğer hastalıkları',
      additionalTraining: 1
    },
    {
      name: 'Pulmoner Onkoloji',
      description: 'Akciğer kanseri tedavisi',
      additionalTraining: 2
    }
  ]
};
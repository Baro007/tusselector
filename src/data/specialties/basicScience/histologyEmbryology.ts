import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const histologyEmbryology: Specialty = {
  id: 'histoloji-embriyoloji',
  name: 'Histoloji ve Embriyoloji',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'Doku ve hücrelerin mikroskobik yapısını ve embriyonik gelişim süreçlerini inceler. Hücre biyolojisi, doku organizasyonu, organ gelişimi ve üreme biyolojisi alanlarında araştırma ve eğitim faaliyetleri yürütür.',
  matchPercentage: 0,
  traits: {
    microscopicSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikroskop kullanımı ve görsel analiz'
    },
    research: {
      weight: 0.9,
      importance: 'critical',
      description: 'Temel bilim araştırmaları'
    },
    teaching: {
      weight: 0.9,
      importance: 'critical',
      description: 'Eğitim ve öğretim yeteneği'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Mikroskobik detaylara dikkat'
    },
    labSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Laboratuvar teknikleri'
    },
    visualization: {
      weight: 0.85,
      importance: 'major',
      description: 'Görsel materyal hazırlama'
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
    perfect: ['ISTJ', 'INTJ', 'INTP'],
    good: ['ISFJ', 'ISTP', 'INFJ'],
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
      name: 'Üreme Biyolojisi',
      description: 'İnfertilite ve yardımcı üreme teknikleri',
      additionalTraining: 2
    },
    {
      name: 'Hücre Biyolojisi',
      description: 'Hücre yapı ve fonksiyonları',
      additionalTraining: 2
    },
    {
      name: 'Gelişimsel Biyoloji',
      description: 'Embriyonik gelişim mekanizmaları',
      additionalTraining: 2
    },
    {
      name: 'Doku Mühendisliği',
      description: 'Yapay doku ve organ geliştirme',
      additionalTraining: 2
    }
  ]
};
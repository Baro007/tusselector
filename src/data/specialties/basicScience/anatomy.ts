import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const anatomy: Specialty = {
  id: 'anatomi',
  name: 'Anatomi',
  category: specialtyCategories.BASIC_SCIENCE,
  description: 'İnsan vücudunun yapısal organizasyonunu, organların konumlarını, şekillerini ve birbirleriyle olan ilişkilerini inceler. Tıp eğitiminde önemli rol oynar ve cerrahi planlama, radyolojik görüntüleme ve klinik uygulamalar için temel oluşturur.',
  matchPercentage: 0,
  traits: {
    teaching: {
      weight: 0.95,
      importance: 'critical',
      description: 'Eğitim ve öğretim yeteneği'
    },
    spatialAwareness: {
      weight: 0.9,
      importance: 'critical',
      description: '3 boyutlu düşünme ve görselleştirme'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    research: {
      weight: 0.85,
      importance: 'major',
      description: 'Araştırma metodolojisi'
    },
    dissectionSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Diseksiyon becerileri'
    },
    visualization: {
      weight: 0.8,
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
      residency: 3
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
    technologyUse: 'moderate'
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
      name: 'Klinik Anatomi',
      description: 'Cerrahi ve klinik uygulamalar için anatomi',
      additionalTraining: 2
    },
    {
      name: 'Nöroanatomi',
      description: 'Sinir sistemi anatomisi',
      additionalTraining: 2
    },
    {
      name: 'Gelişimsel Anatomi',
      description: 'Embriyoloji ve anatomik varyasyonlar',
      additionalTraining: 2
    },
    {
      name: 'Radyolojik Anatomi',
      description: 'Görüntüleme anatomisi',
      additionalTraining: 1
    }
  ]
};
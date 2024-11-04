import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const infectiousDiseases: Specialty = {
  id: 'enfeksiyon-hastaliklari',
  name: 'Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji',
  category: specialtyCategories.INTERNAL,
  description: 'Bakteriyel, viral, fungal ve paraziter enfeksiyonların tanı ve tedavisi ile ilgilenir. Hastane enfeksiyonları, zoonozlar, salgın hastalıklar, HIV/AIDS, sepsis ve antimikrobiyal direnç gibi konularda uzmanlaşır.',
  matchPercentage: 0,
  traits: {
    analyticalThinking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Karmaşık vakaları analiz etme'
    },
    researchAptitude: {
      weight: 0.9,
      importance: 'critical',
      description: 'Bilimsel literatür takibi'
    },
    consultationSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Konsültasyon hizmetleri'
    },
    epidemiologicalThinking: {
      weight: 0.85,
      importance: 'major',
      description: 'Salgın yönetimi'
    },
    laboratoryInterpretation: {
      weight: 0.9,
      importance: 'critical',
      description: 'Laboratuvar sonuçlarını yorumlama'
    },
    publicHealthAwareness: {
      weight: 0.85,
      importance: 'major',
      description: 'Toplum sağlığı perspektifi'
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
      residency: 5,
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
    teamSize: 'medium',
    patientInteraction: 'moderate',
    technologyUse: 'high'
  },
  mbtiPreferences: {
    perfect: ['ISTJ', 'INTJ', 'INTP'],
    good: ['ISFJ', 'ENTJ', 'ESTJ'],
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
      name: 'HIV/AIDS',
      description: 'HIV enfeksiyonu ve bağışıklık sistemi hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Hastane Enfeksiyonları',
      description: 'Nozokomiyal enfeksiyonlar ve önleme',
      additionalTraining: 1
    },
    {
      name: 'Seyahat Tıbbı',
      description: 'Tropik hastalıklar ve seyahat sağlığı',
      additionalTraining: 1
    },
    {
      name: 'Antimikrobiyal Yönetim',
      description: 'Antibiyotik kullanımı ve direnç yönetimi',
      additionalTraining: 1
    },
    {
      name: 'İmmünkompromize Hasta Enfeksiyonları',
      description: 'Bağışıklığı baskılanmış hasta enfeksiyonları',
      additionalTraining: 2
    }
  ]
};
import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const obgyn: Specialty = {
  id: 'kadin-hastaliklari-ve-dogum',
  name: 'Kadın Hastalıkları ve Doğum',
  category: specialtyCategories.SURGICAL,
  description: 'Kadın üreme sistemi hastalıkları, gebelik takibi ve doğum yönetimi ile ilgilenir. Normal ve riskli gebelik takibi, doğum, jinekolojik hastalıklar, infertilite tedavisi ve kadın kanserleri gibi durumların tanı ve tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Cerrahi beceriler'
    },
    decisionMaking: {
      weight: 0.95,
      importance: 'critical',
      description: 'Hızlı ve doğru karar verme'
    },
    communication: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hasta iletişimi ve empati'
    },
    stressManagement: {
      weight: 0.9,
      importance: 'critical',
      description: 'Acil durum yönetimi'
    },
    clinicalJudgment: {
      weight: 0.85,
      importance: 'major',
      description: 'Klinik değerlendirme'
    },
    technicalSkills: {
      weight: 0.85,
      importance: 'major',
      description: 'Ultrason ve endoskopi'
    }
  },
  workLifeBalance: {
    workload: 'heavy',
    nightShifts: 'frequent',
    flexibility: 'low',
    averageHoursPerWeek: 65,
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
      max: 85000
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
    perfect: ['ISFJ', 'ESFJ', 'ESTJ'],
    good: ['ISTJ', 'ENFJ', 'ENTJ'],
    challenging: ['INTP', 'ISTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Maternal-Fetal Tıp',
      description: 'Yüksek riskli gebelik yönetimi',
      additionalTraining: 3
    },
    {
      name: 'Jinekolojik Onkoloji',
      description: 'Kadın kanserleri tedavisi',
      additionalTraining: 3
    },
    {
      name: 'Ürojinekoloji',
      description: 'Kadın pelvik taban hastalıkları',
      additionalTraining: 3
    },
    {
      name: 'Reprodüktif Endokrinoloji ve İnfertilite',
      description: 'Kısırlık tedavisi ve tüp bebek',
      additionalTraining: 3
    },
    {
      name: 'Minimal İnvaziv Jinekolojik Cerrahi',
      description: 'Laparoskopik ve robotik cerrahi',
      additionalTraining: 2
    }
  ]
};
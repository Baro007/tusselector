import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const plasticSurgery: Specialty = {
  id: 'plastik-rekonstrüktif-estetik-cerrahi',
  name: 'Plastik, Rekonstrüktif ve Estetik Cerrahi',
  category: specialtyCategories.SURGICAL,
  description: 'Vücudun şekil ve fonksiyon bozukluklarının onarımı ile ilgilenir. Doğumsal anomaliler, travma sonrası rekonstrüksiyon, mikrocerrahi, el cerrahisi ve estetik cerrahi işlemleri gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    artisticAbility: {
      weight: 0.95,
      importance: 'critical',
      description: 'Estetik görüş ve sanatsal yetenek'
    },
    microsurgicalSkills: {
      weight: 0.95,
      importance: 'critical',
      description: 'Mikrocerrahi becerileri'
    },
    handEyeCoordination: {
      weight: 0.9,
      importance: 'critical',
      description: 'Üstün el-göz koordinasyonu'
    },
    attention: {
      weight: 0.9,
      importance: 'critical',
      description: 'Detaylara dikkat'
    },
    patientCommunication: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta beklentilerini yönetme'
    },
    innovation: {
      weight: 0.8,
      importance: 'major',
      description: 'Yaratıcı problem çözme'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 50,
    weekendWork: false
  },
  careerPath: {
    duration: {
      residency: 5,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 35000,
      max: 100000
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
    perfect: ['ISFP', 'ISTP', 'INTJ'],
    good: ['ISTJ', 'INFJ', 'INTP'],
    challenging: ['ENFP', 'ESFJ']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Kraniofasiyal Cerrahi',
      description: 'Yüz ve kafatası anomalilerinin cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'El Cerrahisi',
      description: 'El ve üst ekstremite cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Mikrocerrahi',
      description: 'Mikroskop altında doku nakli ve rekonstrüksiyon',
      additionalTraining: 2
    },
    {
      name: 'Estetik Cerrahi',
      description: 'Kozmetik amaçlı cerrahi işlemler',
      additionalTraining: 1
    },
    {
      name: 'Yanık Cerrahisi',
      description: 'Yanık tedavisi ve rekonstrüksiyonu',
      additionalTraining: 1
    }
  ]
};
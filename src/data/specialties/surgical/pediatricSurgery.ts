import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const pediatricSurgery: Specialty = {
  id: 'cocuk-cerrahisi',
  name: 'Çocuk Cerrahisi',
  category: specialtyCategories.SURGICAL,
  description: 'Yenidoğan döneminden ergenlik çağına kadar olan hastalarda cerrahi tedavi gerektiren durumlarla ilgilenir. Doğumsal anomaliler, çocukluk çağı tümörleri, travma ve acil cerrahi durumların tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    pediatricCare: {
      weight: 0.95,
      importance: 'critical',
      description: 'Çocuk hasta yönetimi'
    },
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hassas cerrahi beceriler'
    },
    communication: {
      weight: 0.9,
      importance: 'critical',
      description: 'Çocuk ve aile iletişimi'
    },
    emotionalStability: {
      weight: 0.85,
      importance: 'major',
      description: 'Duygusal dayanıklılık'
    },
    adaptability: {
      weight: 0.85,
      importance: 'major',
      description: 'Farklı yaş gruplarına uyum'
    },
    patience: {
      weight: 0.8,
      importance: 'major',
      description: 'Sabır ve anlayış'
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
      residency: 5,
      fellowship: 2
    }
  },
  financialAspects: {
    averageSalaryRange: {
      min: 30000,
      max: 65000
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
    perfect: ['ISFJ', 'INFJ', 'ISTJ'],
    good: ['ESFJ', 'ENFJ', 'INTJ'],
    challenging: ['ESTP', 'ENTP']
  },
  careerOpportunities: {
    academic: true,
    private: true,
    hospital: true,
    research: true
  },
  subspecialties: [
    {
      name: 'Yenidoğan Cerrahisi',
      description: 'Yenidoğan dönemindeki cerrahi problemler',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Üroloji',
      description: 'Çocukluk çağı ürogenital sistem hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Onkolojik Cerrahi',
      description: 'Çocukluk çağı tümörlerinin cerrahi tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Minimal İnvaziv Cerrahi',
      description: 'Çocuklarda laparoskopik ve endoskopik cerrahi',
      additionalTraining: 1
    }
  ]
};
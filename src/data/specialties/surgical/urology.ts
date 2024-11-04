import { Specialty } from '../../../types';
import { specialtyCategories } from '../../specialtyCategories';

export const urology: Specialty = {
  id: 'uroloji',
  name: 'Üroloji',
  category: specialtyCategories.SURGICAL,
  description: 'Üriner sistem ve erkek üreme sisteminin hastalıklarının tanı ve tedavisi ile ilgilenir. Böbrek, mesane, prostat hastalıkları, üriner sistem taşları, kanserler ve erkek infertilitesi gibi durumların cerrahi ve medikal tedavisini gerçekleştirir.',
  matchPercentage: 0,
  traits: {
    surgicalSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Hassas cerrahi beceriler'
    },
    endoscopicSkills: {
      weight: 0.9,
      importance: 'critical',
      description: 'Endoskopik cerrahi yeteneği'
    },
    technicalAbility: {
      weight: 0.85,
      importance: 'major',
      description: 'Teknolojik cihaz kullanımı'
    },
    patientCare: {
      weight: 0.85,
      importance: 'major',
      description: 'Hasta bakım ve takibi'
    },
    problemSolving: {
      weight: 0.8,
      importance: 'major',
      description: 'Klinik problem çözme'
    },
    communication: {
      weight: 0.8,
      importance: 'major',
      description: 'Hassas konularda iletişim'
    }
  },
  workLifeBalance: {
    workload: 'moderate',
    nightShifts: 'occasional',
    flexibility: 'moderate',
    averageHoursPerWeek: 55,
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
      max: 75000
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
    good: ['ISTP', 'INTJ', 'ENTJ'],
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
      name: 'Endoüroloji',
      description: 'Minimal invaziv üriner sistem cerrahisi',
      additionalTraining: 2
    },
    {
      name: 'Üro-onkoloji',
      description: 'Ürogenital sistem kanserlerinin tedavisi',
      additionalTraining: 2
    },
    {
      name: 'Pediatrik Üroloji',
      description: 'Çocuk ürolojik hastalıkları',
      additionalTraining: 2
    },
    {
      name: 'Androloji',
      description: 'Erkek infertilitesi ve cinsel işlev bozuklukları',
      additionalTraining: 2
    },
    {
      name: 'Rekonstrüktif Üroloji',
      description: 'Üriner sistem rekonstrüksiyonu',
      additionalTraining: 1
    }
  ]
};
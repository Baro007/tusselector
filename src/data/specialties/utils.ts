import { Specialty } from '../../types';
import { IMPORTANCE_LEVELS } from './constants';

// Ortak yardımcı fonksiyonlar
export function createBaseTrait(
  weight: number,
  importance: keyof typeof IMPORTANCE_LEVELS,
  description: string
) {
  return {
    weight,
    importance,
    description
  };
}

export function createBaseWorkLifeBalance(
  workload: string,
  nightShifts: string,
  flexibility: string,
  averageHoursPerWeek: number,
  weekendWork: boolean
) {
  return {
    workload,
    nightShifts,
    flexibility,
    averageHoursPerWeek,
    weekendWork
  };
}

export function createBaseCareerPath(
  residencyYears: number,
  fellowshipYears?: number
) {
  return {
    duration: {
      residency: residencyYears,
      ...(fellowshipYears && { fellowship: fellowshipYears })
    }
  };
}

export function createBaseFinancialAspects(
  minSalary: number,
  maxSalary: number,
  privatePractice: boolean,
  academic: boolean
) {
  return {
    averageSalaryRange: {
      min: minSalary,
      max: maxSalary
    },
    privatePracticeOpportunity: privatePractice,
    academicPotential: academic
  };
}

export function createBaseWorkEnvironment(
  teamSize: string,
  patientInteraction: string,
  technologyUse: string
) {
  return {
    teamSize,
    patientInteraction,
    technologyUse
  };
}

export function createBaseCareerOpportunities(
  academic: boolean,
  private: boolean,
  hospital: boolean,
  research: boolean
) {
  return {
    academic,
    private,
    hospital,
    research
  };
}

export function createBaseSubspecialty(
  name: string,
  description: string,
  additionalTraining: number
) {
  return {
    name,
    description,
    additionalTraining
  };
}
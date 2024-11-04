import { Specialty } from '../types';
import { surgicalSpecialties } from './surgical';
import { internalSpecialties } from './internal';
import { basicScienceSpecialties } from './basicScience';
import { diagnosticSpecialties } from './diagnostic';
import { publicHealthSpecialties } from './publicHealth';

export const specialties: Specialty[] = [
  ...surgicalSpecialties,
  ...internalSpecialties,
  ...basicScienceSpecialties,
  ...diagnosticSpecialties,
  ...publicHealthSpecialties
];

export * from './surgical';
export * from './internal';
export * from './basicScience';
export * from './diagnostic';
export * from './publicHealth';
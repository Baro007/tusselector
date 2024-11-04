import { Specialty } from '../../../types';
import { anatomy } from './anatomy';
import { physiology } from './physiology';
import { histologyEmbryology } from './histologyEmbryology';
import { medicalBiochemistry } from './medicalBiochemistry';
import { medicalMicrobiology } from './medicalMicrobiology';
import { medicalPharmacology } from './medicalPharmacology';
import { medicalPathology } from './medicalPathology';
import { medicalGenetics } from './medicalGenetics';

// Tüm temel bilim uzmanlıklarını birleştir
export const basicScienceSpecialties: Specialty[] = [
  anatomy,
  physiology,
  histologyEmbryology,
  medicalBiochemistry,
  medicalMicrobiology,
  medicalPharmacology,
  medicalPathology,
  medicalGenetics
];

// Her bir uzmanlığı ayrı ayrı export et
export {
  anatomy,
  physiology,
  histologyEmbryology,
  medicalBiochemistry,
  medicalMicrobiology,
  medicalPharmacology,
  medicalPathology,
  medicalGenetics
};
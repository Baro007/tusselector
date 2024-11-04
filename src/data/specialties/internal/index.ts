import { Specialty } from '../../../types';
import { internalMedicine } from './internalMedicine';
import { cardiology } from './cardiology';
import { pulmonology } from './pulmonology';
import { infectiousDiseases } from './infectiousDiseases';
import { neurology } from './neurology';
import { psychiatry } from './psychiatry';
import { pediatrics } from './pediatrics';
import { dermatology } from './dermatology';
import { physicalMedicine } from './physicalMedicine';
import { familyMedicine } from './familyMedicine';
import { emergencyMedicine } from './emergencyMedicine';
import { anesthesiology } from './anesthesiology';
import { childPsychiatry } from './childPsychiatry';

// Tüm dahili uzmanlıkları birleştir
export const internalSpecialties: Specialty[] = [
  internalMedicine,
  cardiology,
  pulmonology,
  infectiousDiseases,
  neurology,
  psychiatry,
  pediatrics,
  dermatology,
  physicalMedicine,
  familyMedicine,
  emergencyMedicine,
  anesthesiology,
  childPsychiatry
];

// Her bir uzmanlığı ayrı ayrı export et
export {
  internalMedicine,
  cardiology,
  pulmonology,
  infectiousDiseases,
  neurology,
  psychiatry,
  pediatrics,
  dermatology,
  physicalMedicine,
  familyMedicine,
  emergencyMedicine,
  anesthesiology,
  childPsychiatry
};
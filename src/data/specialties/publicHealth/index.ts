import { Specialty } from '../../../types';
import { publicHealth } from './publicHealth';
import { sportsHealth } from './sportsHealth';
import { underwaterMedicine } from './underwaterMedicine';
import { aviationMedicine } from './aviationMedicine';
import { medicalEcology } from './medicalEcology';
import { forensicMedicine } from './forensicMedicine';

// Tüm halk sağlığı uzmanlıklarını birleştir
export const publicHealthSpecialties: Specialty[] = [
  publicHealth,
  sportsHealth,
  underwaterMedicine,
  aviationMedicine,
  medicalEcology,
  forensicMedicine
];

// Her bir uzmanlığı ayrı ayrı export et
export {
  publicHealth,
  sportsHealth,
  underwaterMedicine,
  aviationMedicine,
  medicalEcology,
  forensicMedicine
};
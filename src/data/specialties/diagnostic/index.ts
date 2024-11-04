import { Specialty } from '../../../types';
import { radiology } from './radiology';
import { nuclearMedicine } from './nuclearMedicine';
import { radiationOncology } from './radiationOncology';

// Tüm tanısal uzmanlıkları birleştir
export const diagnosticSpecialties: Specialty[] = [
  radiology,
  nuclearMedicine,
  radiationOncology
];

// Her bir uzmanlığı ayrı ayrı export et
export {
  radiology,
  nuclearMedicine,
  radiationOncology
};
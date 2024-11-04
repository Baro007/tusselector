import { Specialty } from '../../../types';
import { brainSurgery } from './brainSurgery';
import { generalSurgery } from './generalSurgery';
import { cardiacSurgery } from './cardiacSurgery';
import { thoracicSurgery } from './thoracicSurgery';
import { plasticSurgery } from './plasticSurgery';
import { pediatricSurgery } from './pediatricSurgery';
import { orthopedicSurgery } from './orthopedicSurgery';
import { urology } from './urology';
import { entSurgery } from './entSurgery';
import { eyeSurgery } from './eyeSurgery';
import { obgyn } from './obgyn';

// Tüm cerrahi uzmanlıkları birleştir
export const surgicalSpecialties: Specialty[] = [
  brainSurgery,
  generalSurgery,
  cardiacSurgery,
  thoracicSurgery,
  plasticSurgery,
  pediatricSurgery,
  orthopedicSurgery,
  urology,
  entSurgery,
  eyeSurgery,
  obgyn
];

// Her bir uzmanlığı ayrı ayrı export et
export {
  brainSurgery,
  generalSurgery,
  cardiacSurgery,
  thoracicSurgery,
  plasticSurgery,
  pediatricSurgery,
  orthopedicSurgery,
  urology,
  entSurgery,
  eyeSurgery,
  obgyn
};
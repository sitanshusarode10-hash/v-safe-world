import EquipmentClient from './EquipmentClient';
import { getEquipment } from '@/lib/data';

export const metadata = {
  title: 'Safety Equipment & PPE',
  description: 'Premium safety equipment catalog including PPE, gloves, safety shoes, fire extinguishers, and more.',
};

export default function EquipmentPage() {
  const equipment = getEquipment();
  return <EquipmentClient equipment={equipment} />;
}

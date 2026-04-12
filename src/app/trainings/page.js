import TrainingsClient from './TrainingsClient';
import { getTrainings } from '@/lib/data';

export const metadata = {
  title: 'Training Programs',
  description: 'Comprehensive safety training programs including fire safety, industrial safety, health & wellness, disaster management, and more.',
};

export default function TrainingsPage() {
  const trainings = getTrainings();
  return <TrainingsClient trainings={trainings} />;
}

import Occurrence from '../entities/Occurrence';

export type IUpdateOccurrenceDTO = Omit<Occurrence, 'order'>;

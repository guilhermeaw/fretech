import Occurrence from '../entities/Occurrence';

export type ICreateOccurrenceDTO = Omit<Occurrence, 'id' | 'order'>;

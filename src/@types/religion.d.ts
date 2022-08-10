import { ImageEntity, TinyEntity } from './entity';
import { Reason } from './reason';

export interface Religion extends TinyEntity, ImageEntity {
  reasons?: Reason[] | number
}
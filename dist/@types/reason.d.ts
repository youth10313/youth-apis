import { Entity, ImageEntity, OrderedEntity } from './entity';
import { Religion } from './religion';

export interface Reason extends Entity, ImageEntity, OrderedEntity {
  religion: string | Religion
}


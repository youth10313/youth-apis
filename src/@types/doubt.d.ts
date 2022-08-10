import { Religion } from './religion';

import { AudioEntity, Entity, ImageEntity, MultiCategoryEntity } from './entity';

export interface Doubt extends Entity, AudioEntity, MultiCategoryEntity, ImageEntity {
  doubt: string
  religion: string | Religion
}
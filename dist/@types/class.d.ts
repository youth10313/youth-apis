import { ImageEntity, TinyEntity } from './entity';

import { Lesson } from './lesson';
import { Teacher } from './teacher';

export interface Class extends TinyEntity, ImageEntity {
  teacher: string | Teacher
  lessons?: Lesson[]
}
import { AudioEntity, DateEntity, Entity } from './entity';

import { Class } from './class';

export interface Lesson extends Entity, AudioEntity, DateEntity {
  class: string | Class
}

export interface PassChapter {
  _id: string
  lessionId: string
  userId: string
  date: Date
}
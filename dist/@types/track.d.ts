import { AudioEntity, ImageEntity, TinyEntity } from './entity';
export interface Track extends TinyEntity, ImageEntity, AudioEntity {
  duration: number
  body: string
}
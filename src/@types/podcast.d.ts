import { ImageEntity, TinyEntity } from './entity';

export interface Podcast extends TinyEntity, ImageEntity {
  podcasts: PodcastRow[]
}

export type PodcastRow = {
  title: string
  file: string
  order: number
} 
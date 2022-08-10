import { DateEntity, Entity, ImageEntity, MultiMediaEntity } from "./entity"

export interface Meeting extends Entity, MultiMediaEntity, ImageEntity, DateEntity {
  location: string
}
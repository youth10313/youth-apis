import { Entity, ImageEntity, OrderedEntity } from "./entity"

export interface Ansar extends Entity, ImageEntity, OrderedEntity {
  birth: Date
  death?: Date
  role: string
  nationality: string
  facebook: string
  twitter: string
  nickname: string
  graveLocation?: string
  academy: string
}

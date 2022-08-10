import { ImageEntity, MultiCategoryEntity, TinyEntity } from "./entity";

export interface Pray extends TinyEntity, ImageEntity, MultiCategoryEntity {
  body: string
}
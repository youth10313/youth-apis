import { Entity, ImageEntity, MultiCategoryEntity } from "./entity";

export interface Post extends Entity, ImageEntity, MultiCategoryEntity { }
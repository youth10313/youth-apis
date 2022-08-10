import { DateEntity, Entity, ImageEntity, MultiMediaEntity, OrderedEntity } from "./entity";

export interface Sermon extends Entity, MultiMediaEntity, OrderedEntity, ImageEntity, DateEntity { }

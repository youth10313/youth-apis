import { DateEntity, Entity, ImageEntity, OrderedEntity, PdfEntity } from './entity';

export interface Statement extends Entity, OrderedEntity, PdfEntity, ImageEntity, DateEntity { }


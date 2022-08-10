import { Ansar } from "./ansar";
import { AudioEntity, DateEntity, Entity, ImageEntity, MultiCategoryEntity, PdfEntity } from "./entity";

export interface Book extends Entity, ImageEntity, MultiCategoryEntity, AudioEntity, PdfEntity, DateEntity {
  pages: number
  pin: boolean
  compiler: Ansar | string
  volumes: string[] | Book[]
}

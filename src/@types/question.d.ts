import { DateEntity, SingleCategoryEntity, TinyEntity } from "./entity"

export interface Question extends TinyEntity, SingleCategoryEntity, DateEntity {
  questioner: string
  question: string
  answer: string
  answerer: string
}
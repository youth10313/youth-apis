
export interface Category {
  _id?: string
  name: string
  description: string
  locale: string
  order?: number
  count?: number
}
export interface CategoryOption {
  name?: string
  description?: string
  locale?: string
  order?: number
  count?: number
}
import { Category } from "./category"

export interface Entity {
    _id: string
    title: string
    latinTitle: string
    description: string
    keywords: string[]
    related: Link[]
    body: string
    status: boolean
    locale: string
    attachments: Link[]
    created_date?: Date
    modified_date?: Date
    url?: string
}

export interface TinyEntity {
    _id: string
    title: string
    latinTitle: string
    description: string
    keywords: string[]
    status: boolean
    locale: string
    created_date?: Date
    modified_date?: Date
    url?: string
}

export interface MultiMediaEntity {
    pdf: string
    audio: string
    video: string
}
export interface ImageEntity {
    image: string
}
export interface MultiCategoryEntity {
    category: Category[] | string[]
}
export interface SingleCategoryEntity {
    category: Category | string
}
export interface OrderedEntity {
    order: number
}
export interface PdfEntity {
    pdf: string
}
export interface AudioEntity {
    audio: string
}
export interface DateEntity {
    date: Date
}
export interface Link {
    title: string
    href: string
}
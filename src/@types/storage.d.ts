import { Official } from "./official"
import { User } from "./user"


export interface Storage {
    _id: string
    title: string
    description: string
    agreements: string
    fields: StorageField[]
    expire: Date
    departments: string[]
    department: string
    _department: Official,
    _items: StorageItems[]
}

export interface StorageField {
    label: string
    type: 'string' | 'array' | 'boolean' | 'options'
    required: boolean
    single?: boolean
    options?: string[]
}
export interface StorageItems {
    storageId: string
    date: Date
    userId: string
    items: any[]
    _user: User
}


export interface StorageBody {
    title: string
    description: string
    agreements: string
    fields: StorageField[]
    expire: Date
    departments: string[]
}


export interface Queue {
    _id: string
    ids: string[]
    message: string
    date: Date
    sender: string
    status: boolean
    departmentTitle: string
    employee?: string
}

export interface CitizenLobbeyRow {
    department: string
    expire: Date
    link: string
}

export interface Pagination<T> {
    count: number,
    pages: number,
    page: number,
    perPage: number,
    Items: T[]
}

export interface I18n {
    [x: string]: {
        [x: string]: string
    }
}

export interface I18nLocale {
    [x: string]: string
}
export interface I18nModule {
    [x: string]: {
        [x: string]: string
    }
}
export interface I18nFull {
    [x: string]: I18nModule
}
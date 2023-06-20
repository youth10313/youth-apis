
export interface Ledger {
    _id: string,
    title: string
    latinTitle: string
    locale: string
}

export interface Season {
    _id: string
    title: string
    latiTitle: string
    body: string
    audio: string
    pdf: string
    order: number
    locale: string
    ledger: string
}
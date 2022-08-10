import { OfficialLevels } from "../enum/OfficialTypes"
import { SessionTypes } from "../enum/SessionsTypes"

export interface Official {
    _id: string //? this will be encrypted secret.
    level: OfficialLevels
    responseTo?: string
    title: string
    latinTitle: string
    status: boolean,
    permissions: boolean[]
}


export interface Employee {
    _id: string //? this will be encrypted secret.
    office: string
    title: string
    latinTitle: string
    status: boolean
    permissions: boolean[]
    telegramId: string
}

export type Session = {
    token: string
    date: number
    department: string
    role: SessionTypes
}

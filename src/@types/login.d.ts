import { User } from "./user"


export interface Login {
    _id?: string,
    ip: string,
    userId: string,
    device: {
        type: string,
        name: string
    },
    date: number,
    geo: {
        country: null,
        continent: null
    },
    user?: User[]
}
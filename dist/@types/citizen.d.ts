import { Official } from "./official"
import { User } from "./user"


export interface Citizen {
    _id: string
    department: string
    userId: string
    date: Date
    status: boolean
    _department?: Official,
    _user?: User
}
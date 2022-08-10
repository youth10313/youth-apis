import { Official } from "./official"
import { User } from "./user"


export interface ReportProject {
    _id: string
    title: string
    repeatType: 'daily' | 'weekly' | 'monthly'
    dates: Date[]
    questions: string[]
    update?: Date
    members: string[]
    department: string,
    users?: User[]
    _department?: Official
}

export interface Report {
    _id: string
    date: Date
    answers?: string[]
    userId: string
    projectId: string
    status: boolean
    department: string
    turnId: string
    __count?: number
    __date?: Date
    _project: ReportProject
    _department: Official
    _user: User
}

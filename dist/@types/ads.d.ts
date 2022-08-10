

export interface Ad {
    _id: string
    userId: string
    department: string
    date: Date
    count: number
    consistency: number
    description: string
    status: boolean
}
export interface AdBody {
    count: number
    consistency: number
    description: string
}
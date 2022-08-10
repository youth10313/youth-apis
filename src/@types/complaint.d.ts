

export interface Complaint {
    _id: string
    title: string
    department: string
    because: string //? the department that citizen has complaint of it
    content: string
    userId: string
    readed: false
}
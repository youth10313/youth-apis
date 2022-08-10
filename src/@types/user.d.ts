
export interface User {
  _id?: string
  username: string,
  password?: string,
  avatar: string,
  role: string,
  mother: boolean,
  email: string,
  active: boolean,
  nickname: string,
  bio: string,
  tags: string[],
  lastseen?: string,
  joinAt: Date
  locale?: string
  customRoleTitle?: string
  telegram?: string
  whatsapp?: string
  facebook?: string
  twitter?: string
  instagram?: string
  wallet?: string
  __lock?: boolean
}
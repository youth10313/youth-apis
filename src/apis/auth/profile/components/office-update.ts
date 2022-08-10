import { AUTH_API } from "../../../../constant/api"
import { YouthRoute } from "../../../../models/request"

const UpdateProfile = (body: {
    title?: string
    latinTitle?: string
    telegramId?: string
    locale?: string
}, token = '') => YouthRoute<{ msg: "UPDATED" }>(
    'post',
    AUTH_API + 'departments/profile',
    {},
    { token },
    body
)
const UpdatePassword = (body: {
    password: string
    newpassword: string
}, token = '') => YouthRoute<{ msg: "UPDATED" }>(
    'post',
    AUTH_API + 'departments/profile',
    {},
    { token },
    body
)

export default { UpdatePassword, UpdateProfile }
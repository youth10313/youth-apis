import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const UpdateProfile = (body: {
    username?: string,
    avatar?: string,
    email?: string,
    nickname?: string,
    bio?: string,
    tags?: string[],
    locale?: string
    telegram?: string
    whatsapp?: string
    facebook?: string
    twitter?: string
    instagram?: string
}, Authorization = '') => YouthRoute<{ msg: "UPDATED" }>(
    'post',
    AUTH_API + 'profile',
    {},
    { Authorization },
    body
)
const UpdatePassword = (body: {
    password: string
    newpassword: string
}, Authorization = '') => YouthRoute<{ msg: "UPDATED" }>(
    'post',
    AUTH_API + 'profile',
    {},
    { Authorization },
    body
)

export default { UpdateProfile, UpdatePassword };
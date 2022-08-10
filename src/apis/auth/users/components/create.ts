import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const CreateUser = (body: {
    username: string,
    password: string,
    avatar?: string,
    role: string,
    email: string,
    nickname: string,
    bio?: string,
    tags?: string[],
    locale: string
    customRoleTitle?: string
    telegram?: string
    whatsapp?: string
    facebook?: string
    twitter?: string
    instagram?: string
}, Authorization = '') => YouthRoute<{ id: string }>(
    'post',
    AUTH_API + 'users',
    {},
    { Authorization },
    body
);

export default CreateUser;
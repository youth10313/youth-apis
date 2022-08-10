import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const CreateEmployee = (body: {
    _id: string,
    title: string,
    latinTitle: string,
    status: boolean,
    permissions: boolean[],
    password: string,
    locale: string,
    telegramId?: string
}, token = '') => YouthRoute<{ id: string }>(
    'post',
    AUTH_API + 'employees',
    {},
    { token },
    body
);

export default CreateEmployee;
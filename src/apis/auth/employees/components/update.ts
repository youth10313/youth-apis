import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const UpdateEmployee = (id: string, body: {
    title?: string,
    latinTitle?: string,
    status?: boolean,
    permissions?: boolean[],
    password?: string,
    locale?: string,
    telegramId?: string
}, token = '') => YouthRoute<{ msg: "UPDATED" }>(
    'patch',
    AUTH_API + 'employees/' + id,
    {},
    { token },
    body
);

export default UpdateEmployee;
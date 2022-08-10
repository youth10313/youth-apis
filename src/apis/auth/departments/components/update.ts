import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const UpdateDepartment = (id: string, body: {
    title?: string,
    latinTitle?: string,
    status?: boolean,
    permissions?: boolean[],
    password?: string,
    telegramId?: string,
    locale?: string,
}, token = '') => YouthRoute<{ msg: "UPDATED" }>(
    'patch',
    AUTH_API + 'departments/' + id,
    {},
    { token },
    body
);

export default UpdateDepartment;
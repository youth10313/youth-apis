import { AUTH_API } from "../../../../constant/api";
import { OfficialLevels } from "../../../../enum/OfficialTypes";
import { YouthRoute } from "../../../../models/request";

const CreateDepartment = (body: {
    _id: string,
    level: OfficialLevels,
    title: string,
    latinTitle: string,
    status: boolean,
    permissions: boolean[],
    password: string,
    locale: string,
    telegramId?: string,
    responseTo?: string
}, token = '') => YouthRoute<{ id: string }>(
    'post',
    AUTH_API + 'departments',
    {},
    { token },
    body
);

export default CreateDepartment;
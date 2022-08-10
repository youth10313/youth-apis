import { Official } from "../../../../@types/official";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const GetDepartments = (owners: '' | 'true' = '', token = '') => YouthRoute<Official[]>(
    'get',
    AUTH_API + 'departments',
    { owners },
    { token },
    {}
);

export default GetDepartments;
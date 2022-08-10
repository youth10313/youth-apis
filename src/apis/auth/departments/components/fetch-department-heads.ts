import { Official } from "../../../../@types/official";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const GetDepartmentLevels = (direction: 'up' | 'down', departmentId: string) => YouthRoute<Official[]>(
    'get',
    AUTH_API + 'departments/' + departmentId,
    { direction },
    {},
    {}
);

export default GetDepartmentLevels;
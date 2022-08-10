import { Employee } from "../../../../@types/official";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const GetEmployees = (token = '') => YouthRoute<Employee[]>(
    'get',
    AUTH_API + 'employees',
    {},
    { token },
    {}
);

export default GetEmployees;
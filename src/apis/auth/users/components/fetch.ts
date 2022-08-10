import { Pagination } from "../../../../@types/common";
import { User } from "../../../../@types/user";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const GetUsers = (page: number, keyword: string, Authorization = '') => YouthRoute<Pagination<User>>(
    'get',
    AUTH_API + 'users',
    { page, keyword },
    { Authorization },
    {}
);

export default GetUsers;
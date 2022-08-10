import { User } from "../../../../@types/user";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const GetUser = (id: string, Authorization = '') => YouthRoute<User>(
    'get',
    AUTH_API + 'users/' + id,
    {},
    { Authorization },
    {}
);

export default GetUser;
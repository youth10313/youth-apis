import { User } from "../../../../@types/user";
import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const MyProfile = (Authorization = '') => YouthRoute<User>(
    'get',
    AUTH_API + 'profile',
    {},
    { Authorization },
    {}
)

export default MyProfile;
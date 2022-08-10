import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const DeleteUser = (id: string, Authorization = '') => YouthRoute<{ msg: "DELETED" }>(
    'delete',
    AUTH_API + 'users/' + id,
    {},
    { Authorization },
    {}
);

export default DeleteUser;
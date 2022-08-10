import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const DeleteDepartment = (id: string, token = '') => YouthRoute<{ msg: "DELETED" }>(
    'delete',
    AUTH_API + 'departments/' + id,
    {},
    { token },
    {}
);

export default DeleteDepartment;
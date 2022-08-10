import { AUTH_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const DeleteEmployee = (id: string, token = '') => YouthRoute<{ msg: "DELETED" }>(
    'delete',
    AUTH_API + 'employees/' + id,
    {},
    { token },
    {}
);

export default DeleteEmployee;
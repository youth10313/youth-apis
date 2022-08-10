import { CLOUD_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Unlink = (path = '/', token = '') => YouthRoute<{ msg: 'FILE_DELETED' }>(
    'delete',
    CLOUD_API + 'uploads' + path,
    {},
    { token, 'Content-Type': 'multipart/form-data' },
    {}
);

export default Unlink;
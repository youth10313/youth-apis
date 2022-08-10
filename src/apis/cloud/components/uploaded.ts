import { CLOUD_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Upload = (body: any, path = '/', token = '') => YouthRoute<{ msg: 'FILE_UPLOADED' }>(
    'post',
    CLOUD_API + 'uploads' + path,
    {},
    { token, 'Content-Type': 'multipart/form-data' },
    body,
    1000 * 60 * 10
);

export default Upload;
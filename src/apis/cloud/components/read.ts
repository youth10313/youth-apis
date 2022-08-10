import { CLOUD_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const ReadDirectory = (path = '/', token = '') => YouthRoute<{
    name: string,
    isDir: boolean,
    size: number
}[]>(
    'get',
    CLOUD_API + 'uploads' + path,
    {},
    { token },
    {}
);

export default ReadDirectory;
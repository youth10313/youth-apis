import { Pagination } from "../../../@types/common";
import { Storage, StorageBody } from "../../../@types/storage";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Create = (body: StorageBody, token = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}storages`, {}, { token }, body);
const Update = (id: string, body: StorageBody, token = '') => YouthRoute<{ msg: string }>('patch', `${OFFICIAL_API}storages/${id}`, {}, { token }, body);
const Remove = (id: string, token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}storages/${id}`, {}, { token }, {});
const Fetch = (token = '') => YouthRoute<Pagination<Storage>>('get', `${OFFICIAL_API}storages`, {}, { token }, {});
const FetchOne = (id: string, token = '') => YouthRoute<Storage>('get', `${OFFICIAL_API}storages/${id}`, {}, { token }, {});
const FetchUsersStorage = (Authorization = '') => YouthRoute<Pagination<Storage>>('get', `${OFFICIAL_API}storages`, {}, { Authorization }, {});
const FetchOneUserStorage = (id: string, Authorization = '') => YouthRoute<Storage>('get', `${OFFICIAL_API}storages/${id}`, {}, { Authorization }, {});
const Send = (id: string, items: any[], Authorization = '') => YouthRoute<{ id: string }>('get', `${OFFICIAL_API}storages/${id}`, {}, { Authorization }, { items });

const Storages = { Create, Update, Remove, Fetch, FetchOne, FetchOneUserStorage, FetchUsersStorage, Send };

export default Storages;
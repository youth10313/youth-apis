import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Save = (body: any, id?: string, token = '') => YouthRoute<{ id: string }>(id ? 'patch' : 'post', `${OFFICIAL_API}assets${id ? `/${id}` : ''}`, {}, { token }, body);


const Remove = (id: string, token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}assets/${id}`, {}, { token }, {});


const Fetch = (token = '') => YouthRoute<any[]>('get', `${OFFICIAL_API}assets`, {}, { token }, {});


const Assets = {
    Save,
    Remove,
    Fetch
};

export default Assets;
import { Ad, AdBody } from "../../../@types/ads";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const CreateUserAd = (body: AdBody, Authorization = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}ads`, {}, { Authorization }, body);
const UpdateUserAd = (body: any, Authorization = '') => YouthRoute<{ id: string }>('patch', `${OFFICIAL_API}ads`, {}, { Authorization }, body);
const SignAds = (token = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}ads`, {}, { token }, {});
const RemoveAd = (id: string, token = '', Authorization = '') => YouthRoute<{ msg: "DELETED" }>('delete', `${OFFICIAL_API}ads/${id}`, {}, { token, Authorization }, {});
const GetUserAds = (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, Authorization = '') => YouthRoute<Ad[]>('get', `${OFFICIAL_API}ads`, {
    from: typeof from === typeof Date ? from?.toISOString() : '', to: typeof to === typeof Date ? to?.toISOString() : '', signed: signed ? signed : '', count: count ? count : ''
}, { Authorization }, {});
const GetDepartmentAds = (from: Date | undefined, to: Date | undefined, signed: boolean, count: boolean, token = '') => YouthRoute<Ad[]>('get', `${OFFICIAL_API}ads`, {
    from: typeof from === typeof Date ? from?.toISOString() : '', to: typeof to === typeof Date ? to?.toISOString() : '', signed: signed ? signed : '', count: count ? count : ''
}, { token }, {});


const Ads = {
    CreateUserAd,
    UpdateUserAd,
    SignAds,
    RemoveAd,
    GetDepartmentAds,
    GetUserAds
};

export default Ads;
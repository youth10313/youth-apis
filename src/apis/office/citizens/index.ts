import { Citizen } from "../../../@types/citizen";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const CreateLink = (token = '') => YouthRoute<{ id: string, link: string }>('post', `${OFFICIAL_API}citizens/link`, {}, { token }, {});
const DeleteLink = (token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}citizens/link`, {}, { token }, {});
const Join = (linkHash: string, Authorization = '') => YouthRoute('post', `${OFFICIAL_API}citizens/join/${linkHash}`, {}, { Authorization }, {});
const Left = (id: string, Authorization = '') => YouthRoute('post', `${OFFICIAL_API}citizens/join/${id}`, {}, { Authorization }, {});
const ApproveCitizen = (userId: string, token = '') => YouthRoute('post', `${OFFICIAL_API}citizens/${userId}`, {}, { token }, {});
const KickCitizen = (userId: string, token = '') => YouthRoute('delete', `${OFFICIAL_API}citizens/${userId}`, {}, { token }, {});
const GetUserDepartments = (Authorization = '') => YouthRoute<Citizen[]>('get', `${OFFICIAL_API}citizens`, {}, { Authorization }, {});
const GetDepartmentCitizens = (type: 'lobby' | 'all' | '', token = '') => YouthRoute<Citizen[]>('get', `${OFFICIAL_API}citizens`, { type }, { token }, {});

const Citizens = { CreateLink, DeleteLink, Join, Left, ApproveCitizen, KickCitizen, GetUserDepartments, GetDepartmentCitizens };

export default Citizens;
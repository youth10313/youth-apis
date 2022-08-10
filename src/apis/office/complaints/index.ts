import { Complaint } from "../../../@types/complaint";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Send = (body: { content: string, title: string, department: string, because?: string }, Authorization = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}complaints`, {}, { Authorization }, body);
const Remove = (id: string, token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}complaints/${id}`, {}, { token }, {});
const GetUserComplaint = (id: string, Authorization = '') => YouthRoute<Complaint>('get', `${OFFICIAL_API}complaints/${id}`, {}, { Authorization }, {});
const GetDepartmentComplaint = (id: string, token = '') => YouthRoute<Complaint>('get', `${OFFICIAL_API}complaints/${id}`, {}, { token }, {});
const GetUserComplaints = (keyword = '', Authorization = '') => YouthRoute<Complaint>('get', `${OFFICIAL_API}complaints`, { keyword }, { Authorization }, {});
const GetDepartmentComplaints = (keyword = '', token = '') => YouthRoute<Complaint>('get', `${OFFICIAL_API}complaints`, { keyword }, { token }, {});

const Complaints = { Send, Remove, GetDepartmentComplaint, GetUserComplaint, GetDepartmentComplaints, GetUserComplaints };

export default Complaints;
import { Report, ReportProject } from "../../../@types/report";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const CreateProject = (body: { title: string, dates: Date[], repeatType: "daily" | "weekly" | "monthly", members: string[], questions: [] }, token = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}reports`, {}, { token }, body);
const UpdateProject = (id: string, body: { title: string, dates: Date[], repeatType: "daily" | "weekly" | "monthly", members: string[], questions: [] }, token = '') => YouthRoute<{ msg: string }>('patch', `${OFFICIAL_API}reports/${id}`, {}, { token }, body);
const RemoveProject = (id: string, token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}reports/${id}`, {}, { token }, {});
const Send = (projectId: string, token = '') => YouthRoute<{ msg: string }>('post', `${OFFICIAL_API}reports/send/${projectId}`, {}, { token }, {});
const GetProjects = (token = '') => YouthRoute<ReportProject[]>('get', `${OFFICIAL_API}reports`, {}, { token }, {});
const GetUserProjects = (Authorization = '') => YouthRoute<ReportProject[]>('get', `${OFFICIAL_API}reports`, {}, { Authorization }, {});
const SendUserReport = (projectId: string, id: string, answers?: string[], Authorization = '') => YouthRoute<{ msg: string }>('post', `${OFFICIAL_API}reports/${projectId}`, { id }, { Authorization }, { answers });
const GetUserProjectReports = (id: string, Authorization = '') => YouthRoute<Report[]>('get', `${OFFICIAL_API}reports/${id}`, {}, { Authorization }, {});
const GetProjectReports = (id: string, token = '') => YouthRoute<Report[]>('get', `${OFFICIAL_API}reports/${id}`, {}, { token }, {});

const Reports = { CreateProject, UpdateProject, RemoveProject, GetProjects, GetUserProjects, SendUserReport, GetProjectReports, GetUserProjectReports, Send };

export default Reports;
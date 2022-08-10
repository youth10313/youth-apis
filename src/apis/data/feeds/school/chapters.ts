import { DATA_API } from "../../../../constant/api";
import { YouthRoute } from "../../../../models/request";

const Passed = (Authorization = '') => YouthRoute('get', `${DATA_API}chapters`, {}, { Authorization }, {});
const Pass = (lessonId: string, Authorization = '') => YouthRoute('post', `${DATA_API}chapters`, {}, { Authorization }, { lessonId });
const UnPass = (lessonId: string, Authorization = '') => YouthRoute('get', `${DATA_API}chapters/${lessonId}`, {}, { Authorization }, {});

const Chapters = {
    Passed,
    Pass,
    UnPass
};

export default Chapters;
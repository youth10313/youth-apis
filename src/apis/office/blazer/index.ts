import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Send = (departments: string[], date: string, message: string, token = '') => YouthRoute<{ msg: string }>('post', `${OFFICIAL_API}blazer`, {}, { token }, { departments, message, date });
const Cancel = (id: string, token = '') => YouthRoute('delete', `${OFFICIAL_API}blazer/${id}`, {}, { token }, {})
const History = (token = '') => YouthRoute('get', `${OFFICIAL_API}blazer`, {}, { token }, {})


const Blazer = { Send, Cancel, History };

export default Blazer;
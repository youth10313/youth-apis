import { Pagination } from "../../../@types/common";
import { Letter } from "../../../@types/letter";
import { OFFICIAL_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const Send = (body: { title: string, receiver: string, content: string }, token = '') => YouthRoute<{ id: string }>('post', `${OFFICIAL_API}communication`, {}, { token }, body);
const Remove = (id: string, token = '') => YouthRoute<{ msg: string }>('delete', `${OFFICIAL_API}communication/${id}`, {}, { token }, {});
const Mails = (box: 'inbox' | 'outbox', token = '') => YouthRoute<Pagination<Letter>>('get', `${OFFICIAL_API}communication`, { box }, { token }, {});
const Mail = (id: string, box: 'inbox' | 'outbox', token = '') => YouthRoute<Letter>('get', `${OFFICIAL_API}communication/${id}`, { box }, { token }, {});

const Communication = { Send, Remove, Mails, Mail };

export default Communication;
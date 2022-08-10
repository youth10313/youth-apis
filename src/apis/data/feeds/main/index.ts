import { Ansar } from "../../../../@types/ansar";
import { History } from "../../../../@types/history";
import { Meeting } from "../../../../@types/meeting";
import { Sermon } from "../../../../@types/sermon";
import { Statement } from "../../../../@types/statement";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module1 = new EntityRequest<Sermon, any>(DATA_API + 'sermons');
const Module2 = new EntityRequest<Meeting, any>(DATA_API + 'meetings');
const Module3 = new EntityRequest<Statement, any>(DATA_API + 'statements');
const Module4 = new EntityRequest<Ansar, any>(DATA_API + 'ansar');
const Module5 = new EntityRequest<History, any>(DATA_API + 'history');

const Sermons = Module1.Functions()
const Meetings = Module2.Functions()
const Statements = Module3.Functions()
const Ansars = Module4.Functions()
const Histories = Module5.Functions()

const Main = {
    Sermons,
    Meetings,
    Statements,
    Ansars,
    Histories
}
export default Main;
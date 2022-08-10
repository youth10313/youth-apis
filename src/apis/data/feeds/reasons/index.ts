import { Pagination } from "../../../../@types/common";
import { Reason } from "../../../../@types/reason";
import { Religion } from "../../../../@types/religion";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module1 = new EntityRequest<Reason, any, Pagination<Reason>>(DATA_API + 'reasons');
const Module2 = new EntityRequest<Religion, any, Pagination<Religion>>(DATA_API + 'religions');

const ReasonsFeeds = Module1.Functions()
const Religions = Module2.Functions()

const Reasons = {
    ReasonsFeeds,
    Religions
}
export default Reasons;
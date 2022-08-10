import { Pagination } from "../../../../@types/common";
import { Pray } from "../../../../@types/pray";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module = new EntityRequest<Pray, any, Pagination<Pray>>(DATA_API + 'prays');

const Prays = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions()
}

export default Prays;
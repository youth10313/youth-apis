import { Pagination } from "../../../../@types/common";
import { Post } from "../../../../@types/post";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module1 = new EntityRequest<Post, any, Pagination<Post>>(DATA_API + 'ethics');
const Module2 = new EntityRequest<Post, any, Pagination<Post>>(DATA_API + 'beliefs');
const Module3 = new EntityRequest<Post, any, Pagination<Post>>(DATA_API + 'sharia');
const Module4 = new EntityRequest<Post, any, Pagination<Post>>(DATA_API + 'civilizations');

const Ethics = {
    posts: Module1.Functions(),
    categories: Module1.CategoryFunctions()
}

const Beliefs = {
    posts: Module2.Functions(),
    categories: Module2.CategoryFunctions()
}

const Sharia = {
    posts: Module3.Functions(),
    categories: Module3.CategoryFunctions()
}

const Civilizations = {
    posts: Module4.Functions(),
    categories: Module4.CategoryFunctions()
}

const Islam = {
    Ethics,
    Beliefs,
    Sharia,
    Civilizations
}

export default Islam;
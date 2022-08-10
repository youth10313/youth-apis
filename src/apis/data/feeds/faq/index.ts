import { Pagination } from "../../../../@types/common";
import { Doubt } from "../../../../@types/doubt";
import { Question } from "../../../../@types/question";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module1 = new EntityRequest<Doubt, any, Pagination<Doubt>>(DATA_API + 'doubts');
const Module2 = new EntityRequest<Question, any, Pagination<Question>>(DATA_API + 'questions');

const Doubts = {
    posts: Module1.Functions(),
    categories: Module1.CategoryFunctions()
}
const Questions = {
    posts: Module2.Functions(),
    categories: Module2.CategoryFunctions()
}

const FAQ = {
    Doubts,
    Questions
}
export default FAQ;
import { Class } from "../../../../@types/class";
import { Pagination } from "../../../../@types/common";
import { Lesson } from "../../../../@types/lesson";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";
import Chapters from "./chapters";

const Module1 = new EntityRequest<Class, any, Pagination<Class>>(DATA_API + 'classes');
const Module2 = new EntityRequest<Lesson, any, Pagination<Lesson>>(DATA_API + 'lessons');


const Classes = Module1.Functions();
const Lessons = Module2.Functions();

const School = {
    Classes,
    Lessons,
    Chapters
}

export default School;
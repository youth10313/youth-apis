import { Class } from "../../../../@types/class";
import { Pagination } from "../../../../@types/common";
import { Lesson } from "../../../../@types/lesson";
import { Teacher } from "../../../../@types/teacher";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";
import Chapters from "./chapters";

const Module1 = new EntityRequest<Class, any, Pagination<Class>>(DATA_API + 'classes');
const Module2 = new EntityRequest<Lesson, any, Pagination<Lesson>>(DATA_API + 'lessons');
const Module3 = new EntityRequest<Teacher, any, Pagination<Teacher>>(DATA_API + 'teachers');


const Classes = Module1.Functions();
const Lessons = Module2.Functions();
const Teachers = Module3.Functions();

const School = {
    Classes,
    Lessons,
    Teachers,
    Chapters
}

export default School;
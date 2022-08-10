import { Book } from "../../../../@types/book";
import { Pagination } from "../../../../@types/common";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module = new EntityRequest<Book, any, Pagination<Book>>(DATA_API + 'books');

const Library = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions()
}

export default Library;
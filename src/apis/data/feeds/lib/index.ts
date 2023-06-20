import { Book } from "../../../../@types/book";
import { Pagination } from "../../../../@types/common";
import { Ledger, Season } from "../../../../@types/ledger";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module = new EntityRequest<Book, any, Pagination<Book>>(DATA_API + 'books');
const Module1 = new EntityRequest<Ledger, any, Pagination<Ledger>>(DATA_API + 'ledgers');
const Module2 = new EntityRequest<Season, any, Pagination<Season>>(DATA_API + 'seasons');


const Ledgers = Module1.Functions();
const Seasons = Module2.Functions();


const Library = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions(),
    ledgers: Ledgers,
    seasons: Seasons
}

export default Library;
import { Pagination } from "../../../../@types/common";
import { Post } from "../../../../@types/post";
import { DATA_API } from "../../../../constant/api";
import { EntityRequest } from "../../../../models/entity-request";

const Module = new EntityRequest<Post, Post, Pagination<Post>>(DATA_API + 'posts');

const Blog = {
    posts: Module.Functions(),
    categories: Module.CategoryFunctions()
}

export default Blog;
import { Pagination } from "../../../../@types/common";
import { User } from "../../../../@types/user";
declare const GetUsers: (page: number, keyword: string, Authorization?: string) => {
    onComplete: (func: (data: Pagination<User>) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default GetUsers;

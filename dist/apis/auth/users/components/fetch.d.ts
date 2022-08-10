import { Pagination } from "../../../../@types/common";
import { User } from "../../../../@types/user";
declare const GetUsers: (page: number, keyword: string, Authorization?: string) => {
    onComelete: (func: (data: Pagination<User>) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default GetUsers;

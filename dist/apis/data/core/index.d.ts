import { Pagination } from "../../../@types/common";
declare const Core: (q: string, locale: string, page: number, perPage: number) => {
    onComplete: (func: <A = Pagination<{
        _id: string;
        title: string;
        latinTitle?: string | undefined;
        description: string;
        keywords: string;
        locale: string;
    }>>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: Pagination<{
        _id: string;
        title: string;
        latinTitle?: string | undefined;
        description: string;
        keywords: string;
        locale: string;
    }>) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default Core;

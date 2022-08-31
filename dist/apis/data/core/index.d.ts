import { Pagination } from "../../../@types/common";
declare const Core: (q: string, locale: string) => {
    onComelete: (func: (data: Pagination<{
        _id: string;
        title: string;
        latinTitle?: string | undefined;
        description: string;
        keywords: string;
        locale: string;
    }>) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
    abort: () => void;
};
export default Core;

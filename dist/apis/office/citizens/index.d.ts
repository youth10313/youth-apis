import { Citizen } from "../../../@types/citizen";
declare const Citizens: {
    CreateLink: (token?: string) => {
        onComelete: (func: (data: {
            id: string;
            link: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    DeleteLink: (token?: string) => {
        onComelete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    Join: (linkHash: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    Left: (id: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    ApproveCitizen: (userId: string, token?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    KickCitizen: (userId: string, token?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    GetUserDepartments: (Authorization?: string) => {
        onComelete: (func: (data: Citizen[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    GetDepartmentCitizens: (type: 'lobby' | 'all' | '', token?: string) => {
        onComelete: (func: (data: Citizen[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
};
export default Citizens;

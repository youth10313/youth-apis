import { Citizen } from "../../../@types/citizen";
declare const Citizens: {
    CreateLink: (token?: string) => {
        onComplete: (func: <A = {
            id: string;
            link: string;
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
            link: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    DeleteLink: (token?: string) => {
        onComplete: (func: <A_1 = {
            msg: string;
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Join: (linkHash: string, Authorization?: string) => {
        onComplete: (func: <A_2 = unknown>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Left: (id: string, Authorization?: string) => {
        onComplete: (func: <A_2 = unknown>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    ApproveCitizen: (userId: string, token?: string) => {
        onComplete: (func: <A_2 = unknown>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    KickCitizen: (userId: string, token?: string) => {
        onComplete: (func: <A_2 = unknown>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetUserDepartments: (Authorization?: string) => {
        onComplete: (func: <A_3 = Citizen[]>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Citizen[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetDepartmentCitizens: (type: 'lobby' | 'all' | '', token?: string) => {
        onComplete: (func: <A_3 = Citizen[]>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Citizen[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    JoinByAdmin: (linkHash: string, Authorization?: string) => {
        onComplete: (func: <A_2 = unknown>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: unknown) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Citizens;

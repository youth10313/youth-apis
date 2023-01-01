declare const Departments: {
    CreateDepartment: (body: {
        _id: string;
        level: import("../../../enum/OfficialTypes").OfficialLevels;
        title: string;
        latinTitle: string;
        status: boolean;
        permissions: boolean[];
        password: string;
        locale: string;
        telegramId?: string | undefined;
        responseTo?: string | undefined;
    }, token?: string) => {
        onComplete: (func: <A = {
            id: string;
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    UpdateDepartment: (id: string, body: {
        title?: string | undefined;
        latinTitle?: string | undefined;
        status?: boolean | undefined;
        permissions?: boolean[] | undefined;
        password?: string | undefined;
        telegramId?: string | undefined;
        locale?: string | undefined;
    }, token?: string) => {
        onComplete: (func: <A_1 = {
            msg: "UPDATED";
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    DeleteDepartment: (id: string, token?: string) => {
        onComplete: (func: <A_2 = {
            msg: "DELETED";
        }>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "DELETED";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetDepartmentLevels: (direction: "up" | "down", departmentId: string) => {
        onComplete: (func: <A_3 = import("../../../@types/official").Official[]>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: import("../../../@types/official").Official[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetDepartments: (owners?: "" | "true", token?: string) => {
        onComplete: (func: <A_3 = import("../../../@types/official").Official[]>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: import("../../../@types/official").Official[]) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Departments;

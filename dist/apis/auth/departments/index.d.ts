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
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
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
        onComelete: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    DeleteDepartment: (id: string, token?: string) => {
        onComelete: (func: (data: {
            msg: "DELETED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetDepartmentLevels: (direction: "up" | "down", departmentId: string) => {
        onComelete: (func: (data: import("../../../@types/official").Official[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetDepartments: (owners?: "" | "true", token?: string) => {
        onComelete: (func: (data: import("../../../@types/official").Official[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Departments;

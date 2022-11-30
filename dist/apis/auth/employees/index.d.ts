declare const Employees: {
    CreateEmployee: (body: {
        _id: string;
        title: string;
        latinTitle: string;
        status: boolean;
        permissions: boolean[];
        password: string;
        locale: string;
        telegramId?: string | undefined;
    }, token?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    UpdateEmployee: (id: string, body: {
        title?: string | undefined;
        latinTitle?: string | undefined;
        status?: boolean | undefined;
        permissions?: boolean[] | undefined;
        password?: string | undefined;
        locale?: string | undefined;
        telegramId?: string | undefined;
    }, token?: string) => {
        onComelete: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    DeleteEmployee: (id: string, token?: string) => {
        onComelete: (func: (data: {
            msg: "DELETED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    GetEmployees: (token?: string) => {
        onComelete: (func: (data: import("../../../@types/official").Employee[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
};
export default Employees;

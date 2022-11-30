declare const Users: {
    CreateUser: (body: {
        username: string;
        password: string;
        avatar?: string | undefined;
        role: string;
        email: string;
        nickname: string;
        bio?: string | undefined;
        tags?: string[] | undefined;
        locale: string;
        customRoleTitle?: string | undefined;
        telegram?: string | undefined;
        whatsapp?: string | undefined;
        facebook?: string | undefined;
        twitter?: string | undefined;
        instagram?: string | undefined;
    }, Authorization?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    UpdateUser: (id: string, body: {
        username?: string | undefined;
        password?: string | undefined;
        avatar?: string | undefined;
        role?: string | undefined;
        email?: string | undefined;
        nickname?: string | undefined;
        bio?: string | undefined;
        tags?: string[] | undefined;
        locale: string;
        customRoleTitle?: string | undefined;
        telegram?: string | undefined;
        whatsapp?: string | undefined;
        facebook?: string | undefined;
        twitter?: string | undefined;
        instagram?: string | undefined;
    }, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    DeleteUser: (id: string, Authorization?: string) => {
        onComelete: (func: (data: {
            msg: "DELETED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    GetUsers: (page: number, keyword: string, Authorization?: string) => {
        onComelete: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/user").User>) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    GetUser: (id: string, Authorization?: string) => {
        onComelete: (func: (data: import("../../../@types/user").User) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
};
export default Users;

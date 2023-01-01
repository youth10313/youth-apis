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
    DeleteUser: (id: string, Authorization?: string) => {
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
    GetUsers: (page: number, keyword: string, Authorization?: string) => {
        onComplete: (func: <A_3 = import("../../../@types/common").Pagination<import("../../../@types/user").User>>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: import("../../../@types/common").Pagination<import("../../../@types/user").User>) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetUser: (id: string, Authorization?: string) => {
        onComplete: (func: <A_4 = import("../../../@types/user").User>(data: A_4) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: import("../../../@types/user").User) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Users;

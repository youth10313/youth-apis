declare const Profile: {
    MyProfile: (Authorization?: string) => {
        onComplete: (func: <A = import("../../../@types/user").User>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: import("../../../@types/user").User) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    User: {
        UpdateProfile: (body: {
            username?: string | undefined;
            avatar?: string | undefined;
            email?: string | undefined;
            nickname?: string | undefined;
            bio?: string | undefined;
            tags?: string[] | undefined;
            locale?: string | undefined;
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
        UpdatePassword: (body: {
            password: string;
            newpassword: string;
        }, Authorization?: string) => {
            onComplete: (func: <A_2 = {
                msg: "UPDATED";
            }>(data: A_2) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    Department: {
        UpdatePassword: (body: {
            password: string;
            newpassword: string;
        }, token?: string) => {
            onComplete: (func: <A_3 = {
                msg: "UPDATED";
            }>(data: A_3) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        UpdateProfile: (body: {
            title?: string | undefined;
            latinTitle?: string | undefined;
            telegramId?: string | undefined;
            locale?: string | undefined;
        }, token?: string) => {
            onComplete: (func: <A_4 = {
                msg: "UPDATED";
            }>(data: A_4) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
};
export default Profile;

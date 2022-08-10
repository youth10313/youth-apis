declare const Profile: {
    MyProfile: (Authorization?: string) => {
        onComelete: (func: (data: import("../../../@types/user").User) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
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
            onComelete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        UpdatePassword: (body: {
            password: string;
            newpassword: string;
        }, Authorization?: string) => {
            onComelete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
    };
    Department: {
        UpdatePassword: (body: {
            password: string;
            newpassword: string;
        }, token?: string) => {
            onComelete: (func: (data: {
                msg: "UPDATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
        };
        UpdateProfile: (body: {
            title?: string | undefined;
            latinTitle?: string | undefined;
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
    };
};
export default Profile;

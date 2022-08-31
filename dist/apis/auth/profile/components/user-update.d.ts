declare const _default: {
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
        abort: () => void;
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
        abort: () => void;
    };
};
export default _default;

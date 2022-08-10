declare const _default: {
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
export default _default;

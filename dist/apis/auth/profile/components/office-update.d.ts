declare const _default: {
    UpdatePassword: (body: {
        password: string;
        newpassword: string;
    }, token?: string) => {
        onComplete: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    UpdateProfile: (body: {
        title?: string | undefined;
        latinTitle?: string | undefined;
        telegramId?: string | undefined;
        locale?: string | undefined;
    }, token?: string) => {
        onComplete: (func: (data: {
            msg: "UPDATED";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default _default;

declare const UpdateEmployee: (id: string, body: {
    title?: string;
    latinTitle?: string;
    status?: boolean;
    permissions?: boolean[];
    password?: string;
    locale?: string;
    telegramId?: string;
}, token?: string) => {
    onComelete: (func: (data: {
        msg: "UPDATED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default UpdateEmployee;

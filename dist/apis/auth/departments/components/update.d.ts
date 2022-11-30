declare const UpdateDepartment: (id: string, body: {
    title?: string;
    latinTitle?: string;
    status?: boolean;
    permissions?: boolean[];
    password?: string;
    telegramId?: string;
    locale?: string;
}, token?: string) => {
    onComelete: (func: (data: {
        msg: "UPDATED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined) => void;
    abort: () => void;
};
export default UpdateDepartment;

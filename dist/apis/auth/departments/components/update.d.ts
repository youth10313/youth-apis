declare const UpdateDepartment: (id: string, body: {
    title?: string;
    latinTitle?: string;
    status?: boolean;
    permissions?: boolean[];
    password?: string;
    telegramId?: string;
    locale?: string;
}, token?: string) => {
    onComplete: (func: (data: {
        msg: "UPDATED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default UpdateDepartment;

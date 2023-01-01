declare const CreateEmployee: (body: {
    _id: string;
    title: string;
    latinTitle: string;
    status: boolean;
    permissions: boolean[];
    password: string;
    locale: string;
    telegramId?: string;
}, token?: string) => {
    onComplete: (func: <A = {
        id: string;
    }>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: {
        id: string;
    }) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default CreateEmployee;

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
    onComelete: (func: (data: {
        id: string;
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
    abort: () => void;
};
export default CreateEmployee;

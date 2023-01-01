declare const CreateUser: (body: {
    username: string;
    password: string;
    avatar?: string;
    role: string;
    email: string;
    nickname: string;
    bio?: string;
    tags?: string[];
    locale: string;
    customRoleTitle?: string;
    telegram?: string;
    whatsapp?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
}, Authorization?: string) => {
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
export default CreateUser;

declare const UpdateUser: (id: string, body: {
    username?: string;
    password?: string;
    avatar?: string;
    role?: string;
    email?: string;
    nickname?: string;
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
    onComplete: (func: (data: {
        msg: "UPDATED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default UpdateUser;

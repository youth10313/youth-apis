declare const Register: {
    CheckEmail: (body: {
        email: string;
    }) => {
        onComplete: (func: (data: {
            msg: "ACCCEPTED";
            type: 1 | 2;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    SendForm: (body: {
        username: string;
        password: string;
        email: string;
        nickname: string;
    }) => {
        onComplete: (func: (data: {
            userId: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Register;

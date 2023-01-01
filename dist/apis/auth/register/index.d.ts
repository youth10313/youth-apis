declare const Register: {
    CheckEmail: (body: {
        email: string;
    }) => {
        onComplete: (func: <A = {
            msg: "ACCCEPTED";
            type: 1 | 2;
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "ACCCEPTED";
            type: 1 | 2;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    SendForm: (body: {
        username: string;
        password: string;
        email: string;
        nickname: string;
    }) => {
        onComplete: (func: <A_1 = {
            userId: string;
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            userId: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Register;

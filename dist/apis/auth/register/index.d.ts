declare const Register: {
    CheckEmail: (body: {
        email: string;
    }) => {
        onComelete: (func: (data: {
            msg: "ACCCEPTED";
            type: 1 | 2;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    SendForm: (body: {
        username: string;
        password: string;
        email: string;
        nickname: string;
    }) => {
        onComelete: (func: (data: {
            userId: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
};
export default Register;

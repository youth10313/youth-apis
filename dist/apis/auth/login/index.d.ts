import { Employee, Official } from "../../../@types/official";
import { User } from "../../../@types/user";
declare const Login: {
    LoginUserStepOne: (body: {
        email: string;
        password: string;
    }) => {
        onComelete: (func: (data: {
            msg: "RESEND_DATA_WITH_CODE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    LoginUserStepTwo: (body: {
        email: string;
        password: string;
        code: string;
    }) => {
        onComelete: (func: (data: {
            token: string;
            privateKey: string;
            msg: "LOGGED_IN_SUCCESSFULLY";
            profile: User;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    RenewUserToken: (_private?: string) => {
        onComelete: (func: (data: {
            msg: "TOKEN_SENT";
            time: number;
            token: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    LoginOfficial: (body: {
        phrase: string;
        password: string;
    }) => {
        onComelete: (func: (data: {
            msg: "TOKEN_CREATED";
            _employee?: Employee | undefined;
            _department: Official;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    GetSessions: (Authorization?: string) => {
        onComelete: (func: (data: {
            _id: string;
            device: {
                "parser": {
                    "options": {
                        "emptyUserAgentDeviceType": "desktop";
                        "unknownUserAgentDeviceType": "phone";
                        "botUserAgentDeviceType": "bot";
                        "carUserAgentDeviceType": "car";
                        "consoleUserAgentDeviceType": "tv";
                        "tvUserAgentDeviceType": "tv";
                        "parseUserAgent": false;
                    };
                };
                "type": string;
                "name": string;
            };
            ip: string;
            userId: string;
            date: number;
            geo: {
                "country": string;
                "continent": string;
            };
        }[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    ResetPassword: {
        StepOne: (body: {
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
        StepTwo: (body: {
            email: string;
            password: string;
            code: string;
        }) => {
            onComelete: (func: (data: {
                msg: "ACTIVATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: () => void;
            abort: () => void;
        };
    };
    LogoutOffice: (token?: string) => {
        onComelete: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
    LogoutUser: (_private?: string) => {
        onComelete: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
        abort: () => void;
    };
};
export default Login;

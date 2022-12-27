import { Employee, Official } from "../../../@types/official";
import { User } from "../../../@types/user";
declare const Login: {
    LoginUserStepOne: (body: {
        email: string;
        password: string;
    }) => {
        onComplete: (func: (data: {
            msg: "RESEND_DATA_WITH_CODE";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LoginUserStepTwo: (body: {
        email: string;
        password: string;
        code: string;
    }) => {
        onComplete: (func: (data: {
            token: string;
            privateKey: string;
            msg: "LOGGED_IN_SUCCESSFULLY";
            profile: User;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    RenewUserToken: (Private?: string) => {
        onComplete: (func: (data: {
            msg: "TOKEN_SENT";
            time: number;
            token: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LoginOfficial: (body: {
        phrase: string;
        password: string;
    }) => {
        onComplete: (func: (data: {
            msg: "TOKEN_CREATED";
            _employee?: Employee | undefined;
            _department: Official;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetSessions: (Authorization?: string) => {
        onComplete: (func: (data: {
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
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    ResetPassword: {
        StepOne: (body: {
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
        StepTwo: (body: {
            email: string;
            password: string;
            code: string;
        }) => {
            onComplete: (func: (data: {
                msg: "ACTIVATED";
            }) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    LogoutOffice: (token?: string) => {
        onComplete: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LogoutUser: (Private?: string, tokenId?: string) => {
        onComplete: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Login;

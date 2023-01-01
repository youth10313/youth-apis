import { Employee, Official } from "../../../@types/official";
import { User } from "../../../@types/user";
declare const Login: {
    LoginUserStepOne: (body: {
        email: string;
        password: string;
    }) => {
        onComplete: (func: <A = {
            msg: "RESEND_DATA_WITH_CODE";
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "RESEND_DATA_WITH_CODE";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LoginUserStepTwo: (body: {
        email: string;
        password: string;
        code: string;
    }) => {
        onComplete: (func: <A_1 = {
            token: string;
            privateKey: string;
            msg: "LOGGED_IN_SUCCESSFULLY";
            profile: User;
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            token: string;
            privateKey: string;
            msg: "LOGGED_IN_SUCCESSFULLY";
            profile: User;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    RenewUserToken: (Private?: string) => {
        onComplete: (func: <A_2 = {
            msg: "TOKEN_SENT";
            time: number;
            token: string;
        }>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "TOKEN_SENT";
            time: number;
            token: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LoginOfficial: (body: {
        phrase: string;
        password: string;
    }) => {
        onComplete: (func: <A_3 = {
            msg: "TOKEN_CREATED";
            _employee?: Employee | undefined;
            _department: Official;
        }>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "TOKEN_CREATED";
            _employee?: Employee | undefined;
            _department: Official;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    GetSessions: (Authorization?: string) => {
        onComplete: (func: <A_4 = {
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
        }[]>(data: A_4) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
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
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    ResetPassword: {
        StepOne: (body: {
            email: string;
        }) => {
            onComplete: (func: <A_5 = {
                msg: "ACCCEPTED";
                type: 1 | 2;
            }>(data: A_5) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "ACCCEPTED";
                type: 1 | 2;
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
        StepTwo: (body: {
            email: string;
            password: string;
            code: string;
        }) => {
            onComplete: (func: <A_6 = {
                msg: "ACTIVATED";
            }>(data: A_6) => any) => any;
            onError: (func: (err: any) => any) => any;
            onChange: (func: (state: boolean) => any) => any;
            Convert: (func: (data: {
                msg: "ACTIVATED";
            }) => any) => any;
            subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
            abort: () => void;
        };
    };
    LogoutOffice: (token?: string) => {
        onComplete: (func: <A_7 = {
            msg: "LOGGED_OUT";
        }>(data: A_7) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    LogoutUser: (Private?: string, tokenId?: string) => {
        onComplete: (func: <A_8 = {
            msg: "LOGGED_OUT";
        }>(data: A_8) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: "LOGGED_OUT";
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Login;

import { Employee, Official } from "../../../@types/official";
import { User } from "../../../@types/user";
import { AUTH_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const LoginUserStepOne = (body: { email: string, password: string }) => YouthRoute<{ "msg": "RESEND_DATA_WITH_CODE" }>(
    'post',
    AUTH_API + 'login',
    {},
    {},
    body
)
const LoginUserStepTwo = (body: { email: string, password: string, code: string }) => YouthRoute<{
    "token": string,
    "privateKey": string,
    "msg": "LOGGED_IN_SUCCESSFULLY",
    "profile": User
}>(
    'post',
    AUTH_API + 'login',
    {},
    {},
    body
)

const RenewUserToken = (_private: string = '') => YouthRoute<{
    "msg": "TOKEN_SENT",
    "time": number,
    "token": string
}>(
    'post',
    AUTH_API + 'login',
    {},
    { private: _private },
    {}
)


const LoginOfficial = (body: { phrase: string, password: string }) => YouthRoute<{ msg: "TOKEN_CREATED", _employee?: Employee, _department: Official }>(
    'post',
    AUTH_API + 'login',
    {},
    {},
    body
)

const ResetPassword = {
    StepOne: (body: { email: string }) => YouthRoute<{ msg: "ACCCEPTED", type: 1 | 2 }>(
        'post',
        AUTH_API + 'email-check',
        {},
        {},
        body
    ),
    StepTwo: (body: { email: string, password: string, code: string }) => YouthRoute<{ msg: "ACTIVATED" }>(
        'post',
        AUTH_API + 'activate',
        {},
        {},
        body
    ),
}

const GetSessions = (Authorization: string = '') => YouthRoute<{
    "_id": string,
    "device": {
        "parser": {
            "options": {
                "emptyUserAgentDeviceType": "desktop",
                "unknownUserAgentDeviceType": "phone",
                "botUserAgentDeviceType": "bot",
                "carUserAgentDeviceType": "car",
                "consoleUserAgentDeviceType": "tv",
                "tvUserAgentDeviceType": "tv",
                "parseUserAgent": false
            }
        },
        "type": string,
        "name": string
    },
    "ip": string,
    "userId": string,
    "date": number,
    "geo": {
        "country": string,
        "continent": string
    }
}[]>(
    'get',
    AUTH_API + 'login',
    {},
    { Authorization },
    {}
)


const LogoutUser = (_private = '', tokenId = '') => YouthRoute<{ msg: "LOGGED_OUT" }>(
    'delete',
    AUTH_API + 'login',
    { tokenId },
    { _private },
    {}
)
const LogoutOffice = (token = '') => YouthRoute<{ msg: "LOGGED_OUT" }>(
    'delete',
    AUTH_API + 'login',
    { office: 'true' },
    { token },
    {}
)


const Login = {
    LoginUserStepOne,
    LoginUserStepTwo,
    RenewUserToken,
    LoginOfficial,
    GetSessions,
    ResetPassword,
    LogoutOffice,
    LogoutUser
}

export default Login;
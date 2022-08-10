import { AUTH_API } from "../../../constant/api";
import { YouthRoute } from "../../../models/request";

const CheckEmail = (body: { email: string }) => YouthRoute<{ msg: "ACCCEPTED", type: 1 | 2 }>(
    'post',
    AUTH_API + 'email-check',
    {},
    {},
    body
)

const SendForm = (body: {
    username: string
    password: string
    email: string
    nickname: string
}) => YouthRoute<{ userId: string }>(
    'post',
    AUTH_API + 'register',
    {},
    {},
    body
)

const Register = {
    CheckEmail,
    SendForm
}

export default Register;
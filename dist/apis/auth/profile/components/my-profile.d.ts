import { User } from "../../../../@types/user";
declare const MyProfile: (Authorization?: string) => {
    onComplete: (func: <A = User>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: User) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default MyProfile;

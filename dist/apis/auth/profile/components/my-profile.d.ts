import { User } from "../../../../@types/user";
declare const MyProfile: (Authorization?: string) => {
    onComelete: (func: (data: User) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default MyProfile;

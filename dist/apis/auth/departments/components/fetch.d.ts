import { Official } from "../../../../@types/official";
declare const GetDepartments: (owners?: '' | 'true', token?: string) => {
    onComelete: (func: (data: Official[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default GetDepartments;

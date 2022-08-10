import { Official } from "../../../../@types/official";
declare const GetDepartmentLevels: (direction: 'up' | 'down', departmentId: string) => {
    onComelete: (func: (data: Official[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default GetDepartmentLevels;

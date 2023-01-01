import { Official } from "../../../../@types/official";
declare const GetDepartmentLevels: (direction: 'up' | 'down', departmentId: string) => {
    onComplete: (func: <A = Official[]>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: Official[]) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default GetDepartmentLevels;

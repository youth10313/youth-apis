import { Official } from "../../../../@types/official";
declare const GetDepartmentLevels: (direction: 'up' | 'down', departmentId: string) => {
    onComplete: (func: (data: Official[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default GetDepartmentLevels;

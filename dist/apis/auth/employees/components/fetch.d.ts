import { Employee } from "../../../../@types/official";
declare const GetEmployees: (token?: string) => {
    onComplete: (func: (data: Employee[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default GetEmployees;

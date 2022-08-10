import { Employee } from "../../../../@types/official";
declare const GetEmployees: (token?: string) => {
    onComelete: (func: (data: Employee[]) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default GetEmployees;

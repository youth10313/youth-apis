import { Complaint } from "../../../@types/complaint";
declare const Complaints: {
    Send: (body: {
        content: string;
        title: string;
        department: string;
        because?: string;
    }, Authorization?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Remove: (id: string, token?: string) => {
        onComelete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetDepartmentComplaint: (id: string, token?: string) => {
        onComelete: (func: (data: Complaint) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetUserComplaint: (id: string, Authorization?: string) => {
        onComelete: (func: (data: Complaint) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetDepartmentComplaints: (keyword?: string, token?: string) => {
        onComelete: (func: (data: Complaint) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetUserComplaints: (keyword?: string, Authorization?: string) => {
        onComelete: (func: (data: Complaint) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Complaints;

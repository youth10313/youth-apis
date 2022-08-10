import { Report, ReportProject } from "../../../@types/report";
declare const Reports: {
    CreateProject: (body: {
        title: string;
        dates: Date[];
        repeatType: "daily" | "weekly" | "monthly";
        members: string[];
        questions: [];
    }, token?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    UpdateProject: (id: string, body: {
        title: string;
        dates: Date[];
        repeatType: "daily" | "weekly" | "monthly";
        members: string[];
        questions: [];
    }, token?: string) => {
        onComelete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    RemoveProject: (id: string, token?: string) => {
        onComelete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetProjects: (token?: string) => {
        onComelete: (func: (data: ReportProject[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetUserProjects: (Authorization?: string) => {
        onComelete: (func: (data: ReportProject[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    SendUserReport: (projectId: string, id: string, answers?: string[], Authorization?: string) => {
        onComelete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetProjectReports: (id: string, token?: string) => {
        onComelete: (func: (data: Report[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    GetUserProjectReports: (id: string, Authorization?: string) => {
        onComelete: (func: (data: Report[]) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Reports;
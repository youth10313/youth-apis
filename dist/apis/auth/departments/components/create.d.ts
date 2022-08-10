import { OfficialLevels } from "../../../../enum/OfficialTypes";
declare const CreateDepartment: (body: {
    _id: string;
    level: OfficialLevels;
    title: string;
    latinTitle: string;
    status: boolean;
    permissions: boolean[];
    password: string;
    locale: string;
    telegramId?: string;
    responseTo?: string;
}, token?: string) => {
    onComelete: (func: (data: {
        id: string;
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default CreateDepartment;

import { Pagination } from "../../../@types/common";
import { Letter } from "../../../@types/letter";
declare const Communication: {
    Send: (body: {
        title: string;
        receiver: string;
        content: string;
    }, token?: string) => {
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
    Mails: (box: 'inbox' | 'outbox', token?: string) => {
        onComelete: (func: (data: Pagination<Letter>) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Mail: (id: string, box: 'inbox' | 'outbox', token?: string) => {
        onComelete: (func: (data: Letter) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Communication;

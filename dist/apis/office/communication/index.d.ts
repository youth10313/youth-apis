import { Pagination } from "../../../@types/common";
import { Letter } from "../../../@types/letter";
declare const Communication: {
    Send: (body: {
        title: string;
        receiver: string;
        content: string;
    }, token?: string) => {
        onComplete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Remove: (id: string, token?: string) => {
        onComplete: (func: (data: {
            msg: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Mails: (box: 'inbox' | 'outbox', token?: string) => {
        onComplete: (func: (data: Pagination<Letter>) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Mail: (id: string, box: 'inbox' | 'outbox', token?: string) => {
        onComplete: (func: (data: Letter) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Communication;

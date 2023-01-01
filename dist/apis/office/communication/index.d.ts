import { Pagination } from "../../../@types/common";
import { Letter } from "../../../@types/letter";
declare const Communication: {
    Send: (body: {
        title: string;
        receiver: string;
        content: string;
    }, token?: string) => {
        onComplete: (func: <A = {
            id: string;
        }>(data: A) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            id: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Remove: (id: string, token?: string) => {
        onComplete: (func: <A_1 = {
            msg: string;
        }>(data: A_1) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: {
            msg: string;
        }) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Mails: (box: 'inbox' | 'outbox', token?: string) => {
        onComplete: (func: <A_2 = Pagination<Letter>>(data: A_2) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Pagination<Letter>) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Mail: (id: string, box: 'inbox' | 'outbox', token?: string) => {
        onComplete: (func: <A_3 = Letter>(data: A_3) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        Convert: (func: (data: Letter) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Communication;

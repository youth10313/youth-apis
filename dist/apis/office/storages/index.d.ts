import { Pagination } from "../../../@types/common";
import { Storage, StorageBody } from "../../../@types/storage";
declare const Storages: {
    Create: (body: StorageBody, token?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Update: (id: string, body: StorageBody, token?: string) => {
        onComelete: (func: (data: {
            msg: string;
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
    Fetch: (token?: string) => {
        onComelete: (func: (data: Pagination<Storage>) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    FetchOne: (id: string, token?: string) => {
        onComelete: (func: (data: Storage) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    FetchOneUserStorage: (id: string, Authorization?: string) => {
        onComelete: (func: (data: Storage) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    FetchUsersStorage: (Authorization?: string) => {
        onComelete: (func: (data: Pagination<Storage>) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Send: (id: string, items: any[], Authorization?: string) => {
        onComelete: (func: (data: {
            id: string;
        }) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Storages;

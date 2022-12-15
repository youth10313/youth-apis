declare const Settings: {
    AdjustCluster: (app: string, size: number, locale: string, Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    AdjustFont: (app: string, url: string, locale: string, Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Refresh: (app: string, locale: string, Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Settings;

declare const Settings: {
    AdjustCluster: (app: string, size: number, locale: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    AdjustFont: (app: string, url: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
    Refresh: (app: string, locale: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: () => void;
    };
};
export default Settings;

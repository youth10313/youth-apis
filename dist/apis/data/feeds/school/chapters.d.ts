declare const Chapters: {
    Passed: (Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    Pass: (lessonId: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
    UnPass: (lessonId: string, Authorization?: string) => {
        onComelete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined) => void;
        abort: () => void;
    };
};
export default Chapters;

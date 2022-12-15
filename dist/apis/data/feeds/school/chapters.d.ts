declare const Chapters: {
    Passed: (Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    Pass: (lessonId: string, Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
    UnPass: (lessonId: string, Authorization?: string) => {
        onComplete: (func: (data: unknown) => any) => any;
        onError: (func: (err: any) => any) => any;
        onChange: (func: (state: boolean) => any) => any;
        subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
        abort: () => void;
    };
};
export default Chapters;

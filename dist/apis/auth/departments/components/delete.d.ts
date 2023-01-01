declare const DeleteDepartment: (id: string, token?: string) => {
    onComplete: (func: <A = {
        msg: "DELETED";
    }>(data: A) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    Convert: (func: (data: {
        msg: "DELETED";
    }) => any) => any;
    subscribe: (projects?: string[] | undefined, args?: import("../../../../@types/subscribe").Args | undefined) => void;
    abort: () => void;
};
export default DeleteDepartment;

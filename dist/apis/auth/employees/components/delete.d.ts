declare const DeleteEmployee: (id: string, token?: string) => {
    onComelete: (func: (data: {
        msg: "DELETED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: (projects?: string[] | undefined) => void;
    abort: () => void;
};
export default DeleteEmployee;

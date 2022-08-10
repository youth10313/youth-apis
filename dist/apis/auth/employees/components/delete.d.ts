declare const DeleteEmployee: (id: string, token?: string) => {
    onComelete: (func: (data: {
        msg: "DELETED";
    }) => any) => any;
    onError: (func: (err: any) => any) => any;
    onChange: (func: (state: boolean) => any) => any;
    subscribe: () => void;
};
export default DeleteEmployee;
